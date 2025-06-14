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
			title: 'HTML to PDF Conversion',
			description:
				'Convert any HTML content, web pages, or documents into pixel-perfect PDFs with precise formatting, custom headers/footers, and advanced pagination control.',
			chip: 'Core Feature',
			delay: 0
		},
		{
			icon: Camera,
			title: 'Web Screenshot Capture',
			description:
				'Generate high-resolution screenshots of websites and web pages with customizable viewports, device emulation, and wait conditions for dynamic content.',
			chip: 'Popular',
			delay: 100
		},
		{
			icon: Zap,
			title: 'High-Performance API',
			description:
				'Process thousands of PDF generations and screenshot captures in parallel with our distributed cloud infrastructure, delivering sub-second response times.',
			delay: 200
		},
		{
			icon: Cloud,
			title: 'Secure Cloud Storage',
			description:
				'Access generated PDFs and screenshots instantly with secure cloud storage, automatic file management, and configurable retention policies.',
			delay: 300
		},
		{
			icon: ShieldCheck,
			title: 'Enterprise Security & Compliance',
			description:
				'Bank-grade encryption, GDPR compliance, SOC 2 certification, and data privacy protection for secure document processing in enterprise environments.',
			delay: 400
		},
		{
			icon: Code,
			title: 'Developer Experience',
			description:
				'Intuitive REST API with comprehensive documentation, SDK libraries for all major programming languages, and responsive developer support.',
			delay: 500
		}
	];
</script>

<section id="features-section" class="relative overflow-hidden px-6 py-24 sm:py-32">
	<!-- Floating Geometric Shapes -->
	<div class="pointer-events-none absolute inset-0 z-0">
		<!-- Triangle -->
		<div
			class="absolute left-[10%] top-[20%] h-16 w-16 animate-bounce opacity-15"
			style="
				clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
				background: linear-gradient(135deg, #3b82f6, #8b5cf6);
				animation-duration: 6s;
			"
		></div>

		<!-- Circle -->
		<div
			class="absolute right-[15%] top-[30%] h-12 w-12 animate-pulse rounded-full opacity-20"
			style="
				background: linear-gradient(135deg, #10b981, #3b82f6);
				animation-duration: 4s;
			"
		></div>

		<!-- Square -->
		<div
			class="absolute bottom-[30%] left-[20%] h-10 w-10 animate-spin opacity-15"
			style="
				background: linear-gradient(135deg, #f59e0b, #ef4444);
				animation-duration: 8s;
			"
		></div>

		<!-- Hexagon -->
		<div
			class="opacity-12 absolute bottom-[20%] right-[25%] h-14 w-14 animate-bounce"
			style="
				clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
				background: linear-gradient(135deg, #8b5cf6, #ec4899);
				animation-duration: 7s;
			"
		></div>

		<!-- Diamond -->
		<div
			class="absolute left-[70%] top-[40%] h-8 w-8 rotate-45 animate-pulse opacity-15"
			style="
				background: linear-gradient(135deg, #06b6d4, #3b82f6);
				animation-duration: 5s;
			"
		></div>
	</div>

	<!-- Subtle gradient background -->
	<div class="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-gray-50/50 to-white/80"></div>

	<div class="container relative z-10 mx-auto">
		<div class="mb-16 text-center">
			<Badge variant="outline" class="mb-4 border-primary/30 bg-primary/5 font-medium text-primary"
				>API Features</Badge
			>
			<h2
				class="font-display mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl"
			>
				Complete PDF & Screenshot API Solution
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
				Enterprise-grade PDF generation and screenshot capture API designed for developers. Convert HTML to
				PDF, capture web screenshots, and integrate document generation into any application.
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
