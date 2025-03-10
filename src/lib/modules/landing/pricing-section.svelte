<script lang="ts">
	import PricingCalculator from '@/components/pricing-calculator.svelte';
	import PricingCard from '@/components/pricing-card.svelte';
	import { Chip } from '@/components/ui/chip';

	const pricingPlan = {
		name: 'Pay As You Go',
		price: 'From $0.005',
		description: 'Simple, transparent pricing',
		features: [
			'First 50 generations free every month',
			'$0.008 per PDF generation',
			'$0.005 per screenshot',
			'No monthly commitment',
			'Full API access',
			'Community support'
		]
	};
</script>

<section id="pricing" class="bg-gray-50 px-6 py-24">
	<div class="container mx-auto">
		<div class="mb-12 text-center">
			<Chip class="mb-4">Pricing</Chip>
			<h2 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Simple, transparent pricing</h2>
			<p class="mx-auto max-w-2xl text-gray-600">
				Pay only for what you use. Get your first 50 generations free every month.
			</p>
		</div>
		<div class="mx-auto max-w-lg">
			<PricingCard {...pricingPlan} />
		</div>
		<div class="mt-12">
			<PricingCalculator />
		</div>
		<div class="mt-12 text-center">
			<p class="text-sm text-gray-600">
				All prices are in USD. Need a custom plan for high volume?{' '}
				<a href="#" class="text-primary hover:underline"> Contact us </a>
			</p>
		</div>
	</div>
</section>
