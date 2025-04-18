<script lang="ts">
	import Check from 'lucide-svelte/icons/check';
	import { cn } from '@/utils';

	interface PricingCardProps {
		name: string;
		price: string;
		description: string;
		features: string[];
		isPopular?: boolean;
		buttonText?: string;
		buttonHref?: string;
		class?: string;
	}

	const {
		name,
		price,
		description,
		features,
		isPopular,
		buttonText = 'Get Started',
		buttonHref = '/',
		class: className = ''
	}: PricingCardProps = $props();
</script>

<div
	class={cn(
		'relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl',
		isPopular
			? 'border-2 border-primary ring-4 ring-primary/10'
			: 'border border-gray-100 hover:border-gray-200',
		className
	)}
>
	{#if isPopular}
		<span
			class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-6 py-1.5 text-sm font-medium text-white shadow-md"
		>
			Most Popular
		</span>
	{/if}
	<div class="mb-8">
		<h3 class="text-2xl font-semibold text-gray-900">{name}</h3>
		<div class="mt-4">
			<span class="text-4xl font-bold text-gray-900">{price}</span>
			{#if price !== 'Custom' && price !== '$0'}
				<span class="text-gray-600">/generation</span>
			{/if}
		</div>
		<p class="mt-3 text-gray-600">{description}</p>
	</div>
	<ul class="mb-8 flex-grow space-y-4">
		{#each features as feature}
			<li class="flex items-start gap-3 text-gray-600">
				<div class="mt-0.5 rounded-full bg-primary/10 p-1">
					<Check size={16} class="text-primary" />
				</div>
				<span>{feature}</span>
			</li>
		{/each}
	</ul>
	<a
		href={buttonHref}
		class={cn(
			'inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-center font-medium transition-all',
			isPopular
				? 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark'
				: 'bg-gray-50 text-gray-800 hover:bg-gray-100'
		)}
	>
		{buttonText}
	</a>
</div>
