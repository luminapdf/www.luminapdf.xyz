<script lang="ts">
	import { Toaster } from '$lib/components/ui/sonner/index.js';

	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>LuminaPDF - PDF Generation & Screenshot API</title>
	<meta
		name="description"
		content="Premium PDF generation and screenshot capture at prices that won't break the bank. Save up to 70%
				compared to other providers, with the developer experience you deserve."
	/>
	<meta
		name="keywords"
		content="pdf generation, screenshot api, web to pdf, html to pdf, developer api, document generation"
	/>
	<meta name="author" content="LuminaPDF" />

	<!-- Open Graph / Social Media -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="LuminaPDF - PDF Generation & Screenshot API" />
	<meta
		property="og:description"
		content="Transform web content into perfect PDFs and screenshots with LuminaPDF. Powerful API with pay-as-you-go pricing."
	/>
	<!-- <meta property="og:image" content="/og-image.png" /> -->
	<meta property="og:url" content="https://luminapdf.xyz" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="LuminaPDF - PDF Generation & Screenshot API" />
	<meta
		name="twitter:description"
		content="Transform web content into perfect PDFs and screenshots with LuminaPDF. Powerful API with pay-as-you-go pricing."
	/>
	<!-- <meta name="twitter:image" content="/og-image.png" /> -->
</svelte:head>

<Toaster />
{@render children()}
