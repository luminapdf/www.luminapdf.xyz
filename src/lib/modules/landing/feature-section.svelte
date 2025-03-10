<script lang="ts">
	import FileJson from 'lucide-svelte/icons/file-json';
	import Camera from 'lucide-svelte/icons/camera';
	import Zap from 'lucide-svelte/icons/zap';
	import Cloud from 'lucide-svelte/icons/cloud';
	import Shield from 'lucide-svelte/icons/shield';
	import Code from 'lucide-svelte/icons/code';
	import { Chip } from '@/components/ui/chip';
	import FeatureCard from './feature-card.svelte';

	const features = [
		{
			icon: FileJson,
			title: 'PDF Generation',
			description: 'Convert HTML to PDF with pixel-perfect accuracy and lightning-fast speed.',
			chip: 'Core Feature'
		},
		{
			icon: Camera,
			title: 'Screenshot API',
			description: 'Capture high-quality screenshots of any webpage with a single API call.',
			chip: 'Popular'
		},
		{
			icon: Zap,
			title: 'Lightning Fast',
			description: 'Process thousands of documents in minutes with our distributed infrastructure.'
		},
		{
			icon: Cloud,
			title: 'Cloud Storage',
			description: 'Secure storage and instant access to your generated documents.'
		},
		{
			icon: Shield,
			title: 'Enterprise Security',
			description: 'Bank-grade encryption and compliance with industry standards.'
		},
		{
			icon: Code,
			title: 'Developer First',
			description: 'Comprehensive documentation and excellent developer experience.'
		}
	];
</script>

<section class="px-6 py-16">
	<div class="container mx-auto">
		<div class="mb-12 text-center">
			<Chip class="mb-4">Features</Chip>
			<h2 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
				Everything you need to create perfect documents
			</h2>
			<p class="mx-auto max-w-2xl text-gray-600">
				Our API provides all the tools you need to generate PDFs and capture screenshots with precision and
				reliability.
			</p>
		</div>
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			{#each features as feature}
				<FeatureCard chip={feature.chip} title={feature.title} description={feature.description}>
					{#snippet icon()}
						<feature.icon size={24} />
					{/snippet}
				</FeatureCard>
			{/each}
		</div>
	</div>
</section>
