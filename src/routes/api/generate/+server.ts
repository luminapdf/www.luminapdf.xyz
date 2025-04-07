import { z } from 'zod';
import { env } from '$env/dynamic/private';
import { PUBLIC_API_URL } from '$env/static/public';

// In-memory rate limiting store
// Maps IP address to an array of timestamps
const rateLimitMap = new Map<string, number[]>();

// Rate limit configuration: 3 requests per minute
const RATE_LIMIT = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute in milliseconds

const schema = z.object({
	source: z.string().url(),
	type: z.enum(['screenshot', 'pdf']),
	token: z.string().min(1),

	format: z.string().optional(),
	margin: z.string().optional(),
	width: z.number().optional(),
	height: z.number().optional(),
	fullPage: z.boolean().optional()
});

export const POST = async ({ request, getClientAddress }) => {
	const payload = await request.json();

	const { success, data } = schema.safeParse(payload);

	if (!success) {
		return new Response(JSON.stringify({ error: 'Invalid payload' }), { status: 400 });
	}

	const ipAddress = getClientAddress();

	// Apply rate limiting
	const now = Date.now();
	const userRequests = rateLimitMap.get(ipAddress) || [];

	// Remove requests older than the rate limit window
	const recentRequests = userRequests.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS);

	// Check if user has exceeded rate limit
	if (recentRequests.length >= RATE_LIMIT) {
		// Calculate time until next available request slot
		const oldestRequest = recentRequests[0];
		const resetTime = oldestRequest + RATE_LIMIT_WINDOW_MS;
		const timeToReset = Math.ceil((resetTime - now) / 1000);

		return new Response(
			JSON.stringify({
				error: 'Rate limit exceeded',
				message: `Too many requests. Please try again in ${timeToReset} seconds.`
			}),
			{
				status: 429,
				headers: {
					'Retry-After': String(timeToReset)
				}
			}
		);
	}

	// Add current request timestamp and update the map
	recentRequests.push(now);
	rateLimitMap.set(ipAddress, recentRequests);

	// Validate the token by calling the
	// "/siteverify" API endpoint.
	const formData = new FormData();
	formData.append('secret', env.PRIVATE_TURNSTILE_SECRET_KEY);
	formData.append('response', data.token);
	formData.append('remoteip', ipAddress);

	const url = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
	const result = await fetch(url, {
		body: formData,
		method: 'POST'
	});

	const outcome = await result.json();
	if (!outcome.success) {
		return new Response(JSON.stringify({ error: 'Invalid reCAPTCHA token.' }), { status: 400 });
	}

	if (data.type === 'pdf') {
		const pdfResponse = await fetch(PUBLIC_API_URL + '/generate/pdf', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${env.PRIVATE_APP_API_KEY}`
			},
			body: JSON.stringify({
				source: data.source,
				format: data.format,
				margin: data.margin
					? { top: data.margin, right: data.margin, bottom: data.margin, left: data.margin }
					: undefined
			})
		});

		if (!pdfResponse.ok) {
			const error = await pdfResponse.json();
			return new Response(JSON.stringify({ error: error.message || 'Failed to generate PDF' }), {
				status: 500
			});
		}

		const pdf = await pdfResponse.arrayBuffer();

		return new Response(pdf, {
			headers: {
				'Content-Type': 'application/pdf',
				'Content-Disposition': 'attachment; filename="generated.pdf"'
			}
		});
	} else if (data.type === 'screenshot') {
		const screenshotResponse = await fetch(PUBLIC_API_URL + '/generate/screenshot', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${env.PRIVATE_APP_API_KEY}`
			},
			body: JSON.stringify({
				source: data.source,
				width: data.width,
				height: data.height,
				fullPage: data.fullPage
			})
		});

		if (!screenshotResponse.ok) {
			const error = await screenshotResponse.json();
			return new Response(JSON.stringify({ error: error?.message || 'Failed to generate screenshot' }), {
				status: 500
			});
		}

		const screenshot = await screenshotResponse.arrayBuffer();

		return new Response(screenshot, {
			headers: {
				'Content-Type': 'image/png',
				'Content-Disposition': 'attachment; filename="generated.png"'
			}
		});
	}

	return new Response(JSON.stringify({ error: 'Invalid type' }), { status: 400 });
};
