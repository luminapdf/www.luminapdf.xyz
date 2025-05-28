<script lang="ts">
	import { PUBLIC_DASHBOARD_URL } from '$env/static/public';
	import { Button } from '@/components/ui/button';
	import { onMount } from 'svelte';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';
	import FileCheck from 'lucide-svelte/icons/file-check';
	
	let sectionVisible = $state(false);
	
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					sectionVisible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);
		
		const section = document.querySelector('#cta-section');
		if (section) observer.observe(section);
		
		return () => observer.disconnect();
	});
	
	const benefits = [
		'50 free PDF generations',
		'Developer-friendly API',
		'No credit card required'
	];
</script>

<section id="cta-section" class="relative overflow-hidden px-6 py-24 sm:py-32">
	<!-- Animated background gradient spheres -->
	<div
		class="absolute right-10 -top-20 z-0 h-[450px] w-[450px] rounded-full bg-gradient-to-bl from-primary/20 to-indigo-300/20 opacity-30 blur-3xl animate-pulse"
		style="animation-duration: 10s;"
	></div>
	<div
		class="absolute -left-40 bottom-0 z-0 h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-blue-100/20 to-primary/10 opacity-20 blur-3xl animate-pulse"
		style="animation-duration: 14s;"
	></div>
	<div class="container mx-auto">
		<div 
			class="overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-dark transition-all duration-700 ease-out sm:rounded-3xl" 
			class:opacity-100={sectionVisible}
			class:scale-100={sectionVisible}
			class:opacity-0={!sectionVisible}
			class:scale-95={!sectionVisible}
		>
			<!-- Background patterns -->
			<div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent"></div>
			<div class="absolute -left-20 -top-20 h-[400px] w-[400px] rounded-full bg-primary-light opacity-20 mix-blend-overlay blur-3xl"></div>
			
			<div class="relative z-10 grid gap-8 p-8 sm:p-12 md:grid-cols-5 md:gap-16 md:p-16 lg:p-20">
				<div class="md:col-span-3">
					<h2 
						class="mb-4 text-3xl font-bold leading-tight text-white transition-all duration-700 delay-100 ease-out sm:text-4xl md:text-5xl" 
						class:opacity-100={sectionVisible}
						class:translate-y-0={sectionVisible}
						class:opacity-0={!sectionVisible}
						class:translate-y-8={!sectionVisible}
					>
						Start creating perfect documents in minutes
					</h2>
					<p 
						class="mb-8 text-lg text-white/90 transition-all duration-700 delay-200 ease-out md:text-xl"
						class:opacity-100={sectionVisible}
						class:translate-y-0={sectionVisible}
						class:opacity-0={!sectionVisible}
						class:translate-y-8={!sectionVisible}
					>
						Join thousands of developers who trust LuminaPDF for their document generation needs. Get up and running in less than five minutes.
					</p>
					
					<ul class="mb-8 space-y-3 transition-all duration-700 delay-300 ease-out" class:opacity-100={sectionVisible} class:opacity-0={!sectionVisible}>
						{#each benefits as benefit, i}
							<li class="flex items-center text-white/90 transition-all" style="transition-delay: {300 + (i * 100)}ms" class:opacity-100={sectionVisible} class:translate-x-0={sectionVisible} class:opacity-0={!sectionVisible} class:translate-x-4={!sectionVisible}>
								<FileCheck class="mr-3 h-5 w-5 text-white/70" />
								{benefit}
							</li>
						{/each}
					</ul>
					
					<div 
						class="transition-all duration-700 delay-500 ease-out"
						class:opacity-100={sectionVisible}
						class:translate-y-0={sectionVisible}
						class:opacity-0={!sectionVisible}
						class:translate-y-4={!sectionVisible}
					>
						<Button 
							href={PUBLIC_DASHBOARD_URL}
							class="group bg-white text-primary hover:bg-white/95 shadow-lg hover:shadow-xl"
							size="lg"
						>
							Get Started Free
							<ArrowRight class="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
						</Button>
					</div>
				</div>
				
				<!-- Decorative mockup -->
				<div 
					class="relative hidden overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm transition-all duration-1000 delay-300 ease-out md:col-span-2 md:block" 
					class:opacity-100={sectionVisible}
					class:translate-x-0={sectionVisible}
					class:opacity-0={!sectionVisible}
					class:translate-x-16={!sectionVisible}
				>
					<div class="p-1">
						<div class="rounded-lg bg-primary-dark/30 p-4">
							<!-- Document mockup elements -->
							<div class="mb-3 h-3 w-24 rounded-full bg-white/20"></div>
							<div class="mb-4 h-5 w-36 rounded-full bg-white/30"></div>
							<div class="space-y-2">
								<div class="h-2 w-full rounded-full bg-white/10"></div>
								<div class="h-2 w-5/6 rounded-full bg-white/10"></div>
								<div class="h-2 w-4/6 rounded-full bg-white/10"></div>
							</div>
							<div class="mt-6 flex items-center justify-end space-x-2">
								<div class="h-6 w-12 rounded bg-white/20"></div>
								<div class="h-6 w-12 rounded bg-white/30"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
