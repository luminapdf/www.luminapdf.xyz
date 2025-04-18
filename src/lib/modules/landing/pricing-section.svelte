<script lang="ts">
	import PricingCalculator from '@/components/pricing-calculator.svelte';
	import PricingCard from '@/components/pricing-card.svelte';
	import { Chip } from '@/components/ui/chip';
	import {
		PUBLIC_PDF_GENERATION_COST,
		PUBLIC_SCREENSHOT_GENERATION_COST,
		PUBLIC_DASHBOARD_URL
	} from '$env/static/public';
	import { centsToDollars, formatCurrency } from '$lib/helpers/currency';

	const freePlan = {
		name: 'Free',
		price: '$0',
		description: 'Perfect for getting started',
		features: [
			'50 generations free every month',
			'Max file size: 2MB',
			'Timeout: 30 seconds',
			'Community support'
		],
		buttonText: 'Get Started',
		buttonHref: PUBLIC_DASHBOARD_URL
	};

	const pricingPlan = {
		name: 'Pay As You Go',
		price: `From ${formatCurrency(centsToDollars(Number(PUBLIC_SCREENSHOT_GENERATION_COST)))}`,
		description: 'For professional use',
		features: [
			`${formatCurrency(centsToDollars(Number(PUBLIC_PDF_GENERATION_COST)))} per PDF generation`,
			`${formatCurrency(centsToDollars(Number(PUBLIC_SCREENSHOT_GENERATION_COST)))} per screenshot`,
			'Unlimited file size',
			'Timeout: up to 15 minutes',
			'No monthly commitment',
			'Full API access',
			'Community support'
		],
		buttonText: 'Choose Plan',
		buttonHref: PUBLIC_DASHBOARD_URL
	};
</script>

<section id="pricing" class="bg-gradient-to-b from-white to-gray-50 px-6 py-24">
	<div class="container mx-auto">
		<div class="mb-16 text-center">
			<Chip class="mb-4">Pricing</Chip>
			<h2 class="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">Simple, transparent pricing</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				Pay only for what you use. Get your first 50 generations free every month.
			</p>
		</div>
		<div class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
			<div class="h-full transform transition-all duration-300 hover:translate-y-[-8px]">
				<PricingCard {...freePlan} class="h-full" />
			</div>
			<div class="h-full transform transition-all duration-300 hover:translate-y-[-8px]">
				<PricingCard {...pricingPlan} class="h-full" />
			</div>
		</div>
		<div class="mt-20">
			<PricingCalculator />
		</div>
		<div class="mt-16 text-center">
			<p class="text-sm text-gray-600">
				All prices are in USD. Need a custom plan for high volume?{' '}
				<a href="mailto:yusril@izza.dev" class="font-medium text-primary hover:underline"> Contact us </a>
			</p>
		</div>
	</div>
</section>
