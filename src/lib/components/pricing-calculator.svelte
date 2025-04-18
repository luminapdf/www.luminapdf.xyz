<script lang="ts">
	import { PUBLIC_PDF_GENERATION_COST, PUBLIC_SCREENSHOT_GENERATION_COST } from '$env/static/public';
	import { Slider } from '$lib/components/ui/slider/index.js';
	import { centsToDollars } from '$lib/helpers/currency';

	let pdfCount = $state(500);
	let screenshotCount = $state(500);

	const pdfRate = centsToDollars(Number(PUBLIC_PDF_GENERATION_COST));
	const screenshotRate = centsToDollars(Number(PUBLIC_SCREENSHOT_GENERATION_COST));

	// Calculate with free tier (50 free generations)
	const freeTier = 50;

	// Reactive calculation for costs
	const paidPdfCount = $derived(Math.max(0, pdfCount - freeTier));
	const paidScreenshotCount = $derived(Math.max(0, screenshotCount - freeTier));

	const pdfCost = $derived(paidPdfCount * pdfRate);
	const screenshotCost = $derived(paidScreenshotCount * screenshotRate);
	const totalCost = $derived((pdfCost + screenshotCost).toFixed(2));
</script>

<div class="rounded-2xl bg-white p-8 shadow-lg">
	<h3 class="mb-6 text-xl font-semibold text-gray-900">Pay As You Go Calculator</h3>
	<div class="space-y-8">
		<div>
			<div class="mb-2 flex items-center justify-between">
				<label for="pdf-input" class="block text-sm font-medium text-gray-700"> PDF Generations: </label>
				<div class="relative w-32">
					<input
						id="pdf-input"
						type="number"
						value={pdfCount}
						oninput={(e: any) => (pdfCount = Math.max(0, parseInt(e.target.value) || 0))}
						min="0"
						class="w-full rounded-lg border border-gray-300 px-3 py-1.5 text-right text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
					/>
				</div>
			</div>
			<div class="relative flex h-5 w-full touch-none items-center">
				<Slider type="single" bind:value={pdfCount} class="w-full" max={100000} step={25} />
			</div>
			<p class="mt-1 text-sm text-gray-600">
				${pdfCost.toFixed(2)} ({freeTier} generations free)
			</p>
		</div>

		<div>
			<div class="mb-2 flex items-center justify-between">
				<label for="screenshot-input" class="block text-sm font-medium text-gray-700"> Screenshots: </label>
				<div class="relative w-32">
					<input
						id="screenshot-input"
						type="number"
						value={screenshotCount}
						oninput={(e: any) => (screenshotCount = Math.max(0, parseInt(e.target.value) || 0))}
						min="0"
						class="w-full rounded-lg border border-gray-300 px-3 py-1.5 text-right text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
					/>
				</div>
			</div>
			<div class="relative flex h-5 w-full touch-none items-center">
				<Slider type="single" bind:value={screenshotCount} class="w-full" max={100000} step={25} />
			</div>
			<p class="mt-1 text-sm text-gray-600">
				${screenshotCost.toFixed(2)} ({freeTier} screenshots free)
			</p>
		</div>

		<div class="rounded-lg bg-gray-50 p-4">
			<p class="text-sm text-gray-600">Estimated monthly cost</p>
			<p class="text-2xl font-bold text-gray-900">${totalCost}</p>
			<p class="mt-1 text-xs text-gray-500">
				Based on ${pdfRate.toFixed(3)}/PDF and ${screenshotRate.toFixed(3)}/screenshot with your first 50
				generations free
			</p>
		</div>
	</div>
</div>
