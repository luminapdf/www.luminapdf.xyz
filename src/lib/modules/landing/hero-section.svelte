<script lang="ts">
	import { PUBLIC_DASHBOARD_URL } from '$env/static/public';
	import { Badge } from '@/components/ui/badge';
	import { Button } from '@/components/ui/button';
	import { onMount } from 'svelte';
	
	// Animation setup
	let heroVisible = false;
	
	onMount(() => {
		setTimeout(() => {
			heroVisible = true;
		}, 300);
	});
</script>

<section id="hero" class="relative overflow-hidden px-6 py-32 sm:py-40">
	<!-- Subtle background gradient sphere */-->
	<div class="absolute -right-10 -top-20 z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary/5 to-primary/10 blur-3xl"></div>
	<div class="absolute -left-10 bottom-10 z-0 h-[300px] w-[300px] rounded-full bg-gradient-to-tr from-primary/5 to-primary/10 blur-3xl"></div>
	
	<div class="container relative z-10 mx-auto">
		<div class="mx-auto max-w-4xl">
			<div 
				class="mb-6 text-center transition-all duration-700 ease-out" 
				class:opacity-100={heroVisible}
				class:translate-y-0={heroVisible}
				class:opacity-0={!heroVisible}
				class:translate-y-4={!heroVisible}
			>
				<Badge variant="outline" class="border-primary/30 bg-primary/5 text-primary mb-6 font-medium">Free tier available</Badge>
			</div>
			
			<h1 
				class="mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-center font-display text-4xl font-bold leading-tight tracking-tight text-transparent transition-all duration-700 ease-out sm:text-6xl md:text-7xl" 
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
				Create pixel-perfect PDFs and screenshots with a developer-first API that's up to 70% more affordable than alternatives.
			</p>
			
			<div 
				class="flex flex-wrap items-center justify-center gap-4 transition-all delay-200 duration-700 ease-out" 
				class:opacity-100={heroVisible}
				class:translate-y-0={heroVisible}
				class:opacity-0={!heroVisible}
				class:translate-y-4={!heroVisible}
			>
				<Button href={PUBLIC_DASHBOARD_URL} size="lg" class="relative overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
					Get Started Now
					<span class="absolute inset-0 -z-10 bg-gradient-to-br from-primary to-primary-dark opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
				</Button>
				<Button href="/docs" variant="outline" size="lg" class="shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] hover:border-primary/50">
					Explore Documentation
				</Button>
			</div>
			
			<!-- App preview/screenshot mockup -->
			<div 
				class="relative mt-16 transition-all delay-300 duration-1000 ease-out"
				class:opacity-100={heroVisible}
				class:translate-y-0={heroVisible}
				class:opacity-0={!heroVisible}
				class:translate-y-8={!heroVisible}
			>
				<div class="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-white/80"></div>
				<div class="rounded-xl border border-gray-100 bg-white p-1 shadow-2xl">
					<div class="overflow-hidden rounded-lg bg-gray-50">
						<div class="flex items-center justify-end gap-1.5 border-b border-gray-200 bg-white p-2">
							<span class="h-2.5 w-2.5 rounded-full bg-red-400"></span>
							<span class="h-2.5 w-2.5 rounded-full bg-yellow-400"></span>
							<span class="h-2.5 w-2.5 rounded-full bg-green-400"></span>
						</div>
						<div class="p-4">
							<div class="h-[250px] w-full rounded bg-gray-200"></div>
							<div class="mt-4 flex justify-between">
								<div class="h-6 w-24 rounded bg-gray-200"></div>
								<div class="h-6 w-16 rounded bg-primary/20"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
