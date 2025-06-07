<script lang="ts">
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { PUBLIC_DASHBOARD_URL } from '$env/static/public';
	import Home from 'lucide-svelte/icons/home';
	import ArrowLeft from 'lucide-svelte/icons/arrow-left';
	import Search from 'lucide-svelte/icons/search';
	import logo from '$lib/assets/logo/lumina-logo.png';

	// Use Svelte 5 $derived for reactive values
	const error = $derived(page.error);
	const status = $derived(page.status);

	// Derived values for error content
	const errorTitle = $derived(
		status === 404 ? 'Page Not Found' : status === 500 ? 'Server Error' : 'Something Went Wrong'
	);

	const errorMessage = $derived(
		status === 404
			? {
					primary: "The page you're looking for doesn't exist or has been moved.",
					secondary: 'It might have been removed, renamed, or the URL was entered incorrectly.'
				}
			: status === 500
				? {
						primary: "We're experiencing technical difficulties on our end.",
						secondary: 'Our team has been notified and is working to resolve the issue.'
					}
				: {
						primary: 'An unexpected error occurred while processing your request.',
						secondary: error?.message || 'Please try again or contact support if the problem persists.'
					}
	);

	// Navigation links configuration
	const helpfulLinks = [
		{ href: '/docs', label: 'API Documentation' },
		{ href: '/#features', label: 'Features' },
		{ href: '/#pricing', label: 'Pricing' },
		{ href: '/#faq', label: 'FAQ' },
		{ href: 'mailto:support@luminapdf.com', label: 'Support' }
	];

	function goBack() {
		history.back();
	}
</script>

<svelte:head>
	<title>{status} - Page Not Found | LuminaPDF API</title>
	<meta
		name="description"
		content="The page you're looking for doesn't exist. Return to LuminaPDF's homepage or explore our API documentation."
	/>
	<meta name="robots" content="noindex, nofollow" />
</svelte:head>

<!-- 404 Error Page -->
<div class="flex min-h-screen flex-col bg-gradient-to-b from-white to-gray-50">
	<!-- Simple Header -->
	<header class="border-b border-gray-100 bg-white/80 backdrop-blur-sm">
		<div class="container mx-auto px-6">
			<a href="/" class="flex items-center space-x-3 transition-opacity hover:opacity-80">
				<img src={logo} alt="LuminaPDF" width="140" height="50" />
			</a>
		</div>
	</header>

	<!-- Main Error Content -->
	<main class="flex flex-1 items-center justify-center px-6 py-24">
		<div class="mx-auto max-w-2xl text-center">
			<!-- Error Status Badge -->
			<Badge variant="outline" class="mb-6 border-red-200 bg-red-50 font-medium text-red-700">
				Error {status}
			</Badge>

			<!-- Large 404 Display -->
			<div class="mb-8">
				<h1 class="mb-4 select-none text-8xl font-bold text-gray-200 md:text-9xl">
					{status}
				</h1>
				<div class="relative">
					<h2 class="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
						{errorTitle}
					</h2>
				</div>
			</div>

			<!-- Error Message -->
			<div class="mb-10">
				<p class="mb-4 text-lg text-gray-600">
					{errorMessage.primary}
				</p>
				<p class="text-gray-500">
					{errorMessage.secondary}
				</p>
			</div>

			<!-- Action Buttons -->
			<div class="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
				<Button
					href="/"
					size="lg"
					class="shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
				>
					<Home size={18} class="mr-2" />
					Go Home
				</Button>

				<Button
					onclick={goBack}
					variant="outline"
					size="lg"
					class="shadow-sm transition-all duration-300 hover:scale-[1.02]"
				>
					<ArrowLeft size={18} class="mr-2" />
					Go Back
				</Button>

				<Button
					href={PUBLIC_DASHBOARD_URL}
					variant="outline"
					size="lg"
					class="shadow-sm transition-all duration-300 hover:scale-[1.02]"
				>
					<Search size={18} class="mr-2" />
					Try API Dashboard
				</Button>
			</div>

			<!-- Helpful Links -->
			<div class="border-t border-gray-100 pt-8">
				<p class="mb-4 text-sm text-gray-500">Looking for something specific?</p>
				<nav class="flex flex-wrap items-center justify-center gap-6 text-sm">
					{#each helpfulLinks as link}
						<a href={link.href} class="font-medium text-primary hover:underline">
							{link.label}
						</a>
					{/each}
				</nav>
			</div>
		</div>
	</main>

	<!-- Simple Footer -->
	<footer class="border-t border-gray-100 bg-white/50 backdrop-blur-sm">
		<div class="container mx-auto px-6 py-8 text-center">
			<p class="text-sm text-gray-500">
				© 2024 LuminaPDF. Professional PDF generation and screenshot API for developers.
			</p>
		</div>
	</footer>
</div>

<!-- Background decoration -->
<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
	<!-- Subtle dot pattern -->
	<div
		class="absolute inset-0 opacity-30"
		style="background-image: radial-gradient(circle, #cbd5e1 1px, transparent 1px); background-size: 32px 32px;"
	></div>

	<!-- Floating shapes -->
	<div class="absolute left-[10%] top-20 h-16 w-16 animate-pulse rounded-full bg-primary/5"></div>
	<div
		class="absolute bottom-32 right-[15%] h-24 w-24 animate-pulse rounded-full bg-primary/5"
		style="animation-delay: 2s;"
	></div>
	<div
		class="absolute left-[80%] top-1/2 h-12 w-12 animate-pulse rounded-full bg-primary/5"
		style="animation-delay: 4s;"
	></div>
</div>
