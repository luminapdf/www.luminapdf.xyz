<script lang="ts">
	import FileJson from 'lucide-svelte/icons/file-json';
	import Camera from 'lucide-svelte/icons/camera';
	import Zap from 'lucide-svelte/icons/zap';
	import Cloud from 'lucide-svelte/icons/cloud';
	import ShieldCheck from 'lucide-svelte/icons/shield-check';
	import Code from 'lucide-svelte/icons/code';
	import { Badge } from '@/components/ui/badge';
	import FeatureCard from './feature-card.svelte';
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
		
		const section = document.querySelector('#features-section');
		if (section) observer.observe(section);
		
		return () => observer.disconnect();
	});

	const features = [
		{
			icon: FileJson,
			title: 'PDF Generation',
			description: 'Convert any HTML content into pixel-perfect PDFs with precise formatting, custom headers/footers, and pagination support.',
			chip: 'Core Feature',
			delay: 0
		},
		{
			icon: Camera,
			title: 'Screenshot API',
			description: 'Generate high-resolution screenshots with customizable viewports, wait conditions, and device emulation for perfect captures.',
			chip: 'Popular',
			delay: 100
		},
		{
			icon: Zap,
			title: 'Lightning Fast',
			description: 'Process thousands of documents in parallel with our distributed infrastructure, returning results in milliseconds.',
			delay: 200
		},
		{
			icon: Cloud,
			title: 'Cloud Storage',
			description: 'Access your generated documents instantly with secure cloud storage, complete with versioning and expiration control.',
			delay: 300
		},
		{
			icon: ShieldCheck,
			title: 'Enterprise Security',
			description: 'Bank-grade encryption, GDPR compliance, and SOC 2 certification for secure document handling in any environment.',
			delay: 400
		},
		{
			icon: Code,
			title: 'Developer First',
			description: 'Intuitive API with comprehensive documentation, client libraries for all major languages, and rapid developer support.',
			delay: 500
		}
	];
</script>

<section id="features-section" class="relative overflow-hidden px-6 py-24 sm:py-32">
	<!-- Subtle background accents -->
	<div class="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-60"></div>
	
	<div class="container mx-auto">
		<div class="mb-16 text-center">
			<Badge variant="outline" class="mb-4 border-primary/30 bg-primary/5 text-primary font-medium">Features</Badge>
			<h2 class="mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-center font-display text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
				Everything you need for perfect documents
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
				Our API provides developers with powerful tools to generate pixel-perfect PDFs and screenshots with unmatched reliability and performance.
			</p>
		</div>
		
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
			{#each features as feature, i}
				<div 
					class="transition-all duration-700 ease-out"
					style="transition-delay: {feature.delay}ms"
					class:opacity-100={sectionVisible}
					class:translate-y-0={sectionVisible}
					class:opacity-0={!sectionVisible}
					class:translate-y-8={!sectionVisible}
				>
					<FeatureCard chip={feature.chip} title={feature.title} description={feature.description}>
						{#snippet icon()}
							<feature.icon size={24} />
						{/snippet}
					</FeatureCard>
				</div>
			{/each}
		</div>
	</div>
</section>
