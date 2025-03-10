<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import { cn } from '@/utils';

	interface PricingCardProps {
		name: string;
		price: string;
		description: string;
		features: string[];
		isPopular?: boolean;
	}

	const { name, price, description, features, isPopular }: PricingCardProps = $props();
</script>

<div
	class={cn(
		'relative rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl',
		isPopular && 'border-2 border-primary'
	)}
>
	{#if isPopular}
		<span
			class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-white"
		>
			Most Popular
		</span>
	{/if}
	<div class="mb-6">
		<h3 class="text-xl font-semibold text-gray-900">{name}</h3>
		<div class="mt-4">
			<span class="text-4xl font-bold text-gray-900">{price}</span>
			{#if price !== 'Custom'}
				<span class="text-gray-600">/month</span>
			{/if}
		</div>
		<p class="mt-2 text-gray-600">{description}</p>
	</div>
	<ul class="mb-8 space-y-4">
		{#each features as feature}
			<li class="flex items-center gap-3 text-gray-600">
				<Check size={18} class="text-primary" />
				{feature}
			</li>
		{/each}
	</ul>
	<a
		href="#"
		class={cn(
			'inline-flex w-full items-center justify-center rounded-lg px-6 py-3 text-center text-sm font-medium transition-all',
			isPopular
				? 'bg-primary text-white hover:bg-primary-dark'
				: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
		)}
	>
		Get Started
	</a>
</div>
