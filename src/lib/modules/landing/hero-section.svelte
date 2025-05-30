<script lang="ts">
	import { PUBLIC_DASHBOARD_URL } from '$env/static/public';
	import { Badge } from '@/components/ui/badge';
	import { Button } from '@/components/ui/button';
	import { onMount } from 'svelte';
	import HeroIllustrations from '$lib/components/hero-illustrations.svelte';

	// Animation setup
	let heroVisible = false;

	onMount(() => {
		setTimeout(() => {
			heroVisible = true;
		}, 300);
	});
</script>

<section id="hero" class="py-18 relative overflow-hidden px-6 sm:py-24">
	<!-- Dot Pattern Background -->
	<div class="absolute inset-0 z-[1] opacity-60">
		<div
			class="h-full w-full"
			style="background-image: radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px); background-size: 24px 24px;"
		></div>
	</div>

	<!-- Subtle background gradient sphere -->
	<div
		class="absolute -right-10 -top-20 z-[2] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/5 to-primary/10 blur-3xl"
	></div>
	<div
		class="absolute -left-10 bottom-10 z-[2] h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-primary/5 to-primary/10 blur-3xl"
	></div>

	<!-- Animated dot pattern overlay -->
	<div class="absolute inset-0 z-[3]">
		<div
			class="h-full w-full animate-pulse opacity-40"
			style="background-image: radial-gradient(circle, #3b82f6 1px, transparent 1px); background-size: 40px 40px; animation-duration: 6s;"
		></div>
	</div>

	<div class="container relative z-10 mx-auto">
		<div class="mx-auto max-w-4xl">
			<div
				class="mb-6 text-center transition-all duration-700 ease-out"
				class:opacity-100={heroVisible}
				class:translate-y-0={heroVisible}
				class:opacity-0={!heroVisible}
				class:translate-y-4={!heroVisible}
			>
				<Badge variant="outline" class="mb-6 border-primary/30 bg-primary/5 font-medium text-primary"
					>Free tier available</Badge
				>
			</div>

			<h1
				class="font-display mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-center text-4xl font-bold leading-tight tracking-tight text-transparent transition-all duration-700 ease-out sm:text-6xl md:text-7xl"
				class:opacity-100={heroVisible}
				class:opacity-0={!heroVisible}
			>
				Distraction-free PDF & screenshot generation
			</h1>

			<p
				class="mx-auto mb-10 max-w-2xl text-center text-lg text-gray-600 transition-all delay-100 duration-700 ease-out sm:text-xl"
				class:opacity-100={heroVisible}
				class:translate-y-0={heroVisible}
				class:opacity-0={!heroVisible}
				class:translate-y-4={!heroVisible}
			>
				Create pixel-perfect PDFs and screenshots with a developer-first API that's up to 70% more affordable
				than alternatives.
			</p>

			<div
				class="flex flex-wrap items-center justify-center gap-4 transition-all delay-200 duration-700 ease-out"
				class:opacity-100={heroVisible}
				class:translate-y-0={heroVisible}
				class:opacity-0={!heroVisible}
				class:translate-y-4={!heroVisible}
			>
				<Button
					href={PUBLIC_DASHBOARD_URL}
					size="lg"
					class="relative overflow-hidden shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
				>
					Get Started Now
					<span
						class="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100"
					></span>
				</Button>
				<Button
					href="/docs"
					variant="outline"
					size="lg"
					class="shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-md"
				>
					Explore Documentation
				</Button>
			</div>

			<!-- Animated illustrations for PDF/Screenshot generation -->
			<div
				class="relative mb-16 mt-12 transition-all delay-300 duration-1000 ease-out"
				class:opacity-100={heroVisible}
				class:translate-y-0={heroVisible}
				class:opacity-0={!heroVisible}
				class:translate-y-8={!heroVisible}
			>
				<div class="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-white/80"></div>

				<!-- Using our custom illustrations component -->
				<HeroIllustrations visible={heroVisible} />
			</div>
		</div>
	</div>
</section>
