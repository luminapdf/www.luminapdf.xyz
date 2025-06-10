<script lang="ts">
	import { page } from '$app/state';
	import { PUBLIC_APP_DOMAIN } from '$env/static/public';
	import { Toaster } from '$lib/components/ui/sonner/index.js';

	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<title>LuminaPDF API - PDF Generation & Screenshot Capture for Developers | 70% Cheaper</title>
	<meta
		name="description"
		content="Developer-first PDF generation and screenshot API. Convert HTML to PDF, capture web screenshots with a simple REST API. Save 70% vs alternatives. Free tier available with 50 monthly generations."
	/>
	<meta
		name="keywords"
		content="pdf api, pdf generation api, html to pdf, screenshot api, web screenshot capture, developer api, pdf converter api, html pdf conversion, rest api pdf, web to pdf api, document generation api, puppeteer alternative"
	/>
	<meta name="author" content="LuminaPDF" />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<meta name="googlebot" content="index, follow" />
	<link rel="canonical" href="{PUBLIC_APP_DOMAIN}{page.url.pathname}" />

	<!-- Open Graph / Social Media - improved -->
	<meta property="og:site_name" content="LuminaPDF API" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="LuminaPDF API - PDF Generation & Screenshot Capture for Developers" />
	<meta
		property="og:description"
		content="Developer-first PDF generation and screenshot API. Convert HTML to PDF and capture web screenshots with a simple REST API. Save up to 70% compared to alternatives."
	/>
	<meta property="og:image" content="{PUBLIC_APP_DOMAIN}/og-image.jpeg" />
	<meta property="og:image:alt" content="LuminaPDF API - PDF Generation and Screenshot Service" />
	<meta property="og:url" content="https://luminapdf.xyz" />
	<meta property="og:locale" content="en_US" />

	<!-- Twitter Card - improved -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@luminapdf" />
	<meta name="twitter:title" content="LuminaPDF API - PDF Generation & Screenshot Capture for Developers" />
	<meta
		name="twitter:description"
		content="Developer-first PDF generation and screenshot API. Convert HTML to PDF and capture web screenshots. Save up to 70% vs alternatives."
	/>
	<meta name="twitter:image" content="{PUBLIC_APP_DOMAIN}/og-image.jpeg" />
	<meta name="twitter:image:alt" content="LuminaPDF API - Developer-friendly PDF and screenshot generation" />

	<!-- improved structured data for better SEO -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "SoftwareApplication",
			"name": "LuminaPDF API",
			"applicationCategory": "DeveloperApplication",
			"operatingSystem": "Cross-platform",
			"description": "Developer-first REST API for PDF generation and screenshot capture. Convert HTML to PDF and capture web screenshots with enterprise-grade reliability at affordable pricing.",
			"url": "https://luminapdf.xyz",
			"author": {
				"@type": "Organization",
				"name": "LuminaPDF"
			},
			"offers": {
				"@type": "Offer",
				"price": "0",
				"priceCurrency": "USD",
				"description": "Free tier with 100 monthly generations, then pay-as-you-go pricing starting from $0.001 per generation"
			},
			"featureList": [
				"HTML to PDF conversion",
				"Web screenshot capture",
				"REST API integration",
				"Multi-language SDK support",
				"Enterprise security",
				"Cloud storage integration",
				"Developer-friendly documentation"
			],
			"screenshot": "{PUBLIC_APP_DOMAIN}/og-image.jpeg"
		}
	</script>
</svelte:head>

<Toaster />

{@render children()}
