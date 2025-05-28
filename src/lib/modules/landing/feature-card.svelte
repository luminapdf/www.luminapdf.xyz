<script lang="ts">
	import { Badge } from '@/components/ui/badge';
	import type { Snippet } from 'svelte';

	interface FeatureCardProps {
		icon: Snippet;
		title: string;
		description: string;
		chip?: string;
	}

	const { icon, title, description, chip }: FeatureCardProps = $props();
</script>

<div
	id="features"
	class="group h-full overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 ease-out hover:border-primary/30 hover:shadow-lg"
>
	<!-- Subtle hover effect gradient -->
	<div
		class="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-transparent opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
	></div>
	
	<div class="relative z-10">
		<!-- Feature icon with animated background -->
		<div class="mb-5 inline-flex rounded-lg bg-primary/[0.07] p-3.5 text-primary ring-8 ring-primary/[0.03] transition-all duration-300 ease-out group-hover:bg-primary/10 group-hover:text-primary-dark group-hover:ring-primary/[0.05]">
			{@render icon?.()}
		</div>
		
		<!-- Feature labels -->
		{#if chip}
			<Badge variant="secondary" class="mb-3 font-medium">{chip}</Badge>
		{/if}
		
		<!-- Title and description -->
		<h3 class="mb-2.5 text-xl font-bold text-gray-900 group-hover:text-primary/90 transition-colors duration-300">{title}</h3>
		<p class="text-gray-600 leading-relaxed">{description}</p>
	</div>
	
	<!-- Decorative pattern element -->
	<div class="absolute -bottom-6 -right-6 h-24 w-24 rounded-full border border-primary/5 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"></div>
</div>
