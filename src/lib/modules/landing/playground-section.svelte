<script lang="ts">
	import Playground from '@/modules/playground/playground.svelte';
	import { Badge } from '@/components/ui/badge'; 
	import { onMount } from 'svelte';

	let sectionVisible = $state(false);
	
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					sectionVisible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);
		
		const section = document.querySelector('#playground-section');
		if (section) observer.observe(section);
		
		return () => observer.disconnect();
	});
</script>

<section id="playground-section" class="relative overflow-hidden px-6 py-24 sm:py-32">
	<div class="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
	
	<!-- Animated background gradient spheres -->
	<div
		class="absolute right-0 bottom-40 z-0 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-primary/5 to-blue-100/20 opacity-30 blur-3xl animate-pulse"
		style="animation-duration: 15s;"
	></div>
	<div
		class="absolute -left-40 top-20 z-0 h-[550px] w-[550px] rounded-full bg-gradient-to-bl from-indigo-50/30 to-primary/5 opacity-20 blur-3xl animate-pulse"
		style="animation-duration: 18s;"
	></div>
	
	<div class="container relative z-10 mx-auto">
		<!-- Section header -->
		<div 
			class="mb-16 text-center transition-all duration-700 ease-out" 
			class:opacity-100={sectionVisible}
			class:translate-y-0={sectionVisible}
			class:opacity-0={!sectionVisible}
			class:translate-y-8={!sectionVisible}
		>
			<Badge variant="outline" class="mb-4 border-primary/30 bg-primary/5 text-primary font-medium">Interactive Demo</Badge>
			<h2 class="mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-center font-display text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
				Try it yourself
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
				Experiment with our API directly in your browser. Generate PDFs and screenshots instantly to see the quality and performance firsthand.
			</p>
		</div>
		
		<!-- Playground container with subtle animation -->
		<div 
			class="mx-auto max-w-4xl overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg transition-all duration-1000 ease-out md:rounded-2xl" 
			class:opacity-100={sectionVisible}
			class:translate-y-0={sectionVisible}
			class:opacity-0={!sectionVisible}
			class:translate-y-8={!sectionVisible}
		>
			<Playground />
		</div>
	</div>
</section>
