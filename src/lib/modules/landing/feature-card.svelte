<script lang="ts">
	import { Chip } from '@/components/ui/chip';
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
	class="group relative overflow-hidden rounded-xl bg-white p-6 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl"
>
	<div
		class="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
	></div>
	<div class="relative z-10">
		{#if chip}
			<Chip class="mb-4">{chip}</Chip>
		{/if}
		<div class="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary">
			{@render icon?.()}
		</div>
		<h3 class="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
		<p class="text-gray-600">{description}</p>
	</div>
</div>
