<script lang="ts">
	import PricingCalculator from '@/components/pricing-calculator.svelte';
	import PricingCard from '@/components/pricing-card.svelte';
	import { Badge } from '@/components/ui/badge';
	import { onMount } from 'svelte';
	import {
		PUBLIC_PDF_GENERATION_COST,
		PUBLIC_SCREENSHOT_GENERATION_COST,
		PUBLIC_DASHBOARD_URL
	} from '$env/static/public';
	import { centsToDollars, formatCurrency } from '$lib/helpers/currency';
	import Check from 'lucide-svelte/icons/check';

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
		
		const section = document.querySelector('#pricing-section');
		if (section) observer.observe(section);
		
		return () => observer.disconnect();
	});

	const freePlan = {
		name: 'Free',
		popular: false,
		price: '$0',
		description: 'Perfect for prototyping and small projects',
		features: [
			'50 generations free every month',
			'Auto-renewing quota',
			'Max file size: 2MB',
			'Timeout: 30 seconds',
			'Community support'
		],
		buttonText: 'Start for Free',
		buttonHref: PUBLIC_DASHBOARD_URL,
		buttonVariant: 'outline' as const
	};

	const pricingPlan = {
		name: 'Pay As You Go',
		popular: true,
		price: `From ${formatCurrency(centsToDollars(Number(PUBLIC_SCREENSHOT_GENERATION_COST)))}`,
		description: 'For production applications and businesses',
		features: [
			'50 free generations included monthly',
			`${formatCurrency(centsToDollars(Number(PUBLIC_PDF_GENERATION_COST)))} per PDF generation`,
			`${formatCurrency(centsToDollars(Number(PUBLIC_SCREENSHOT_GENERATION_COST)))} per screenshot`,
			'Unlimited file size',
			'Timeout: up to 15 minutes',
			'No monthly commitment',
			'Full API access',
			'Priority community support'
		],
		buttonText: 'Choose Plan',
		buttonHref: PUBLIC_DASHBOARD_URL,
		buttonVariant: 'default' as const
	};
</script>

<section id="pricing-section" class="relative overflow-hidden px-6 py-24 sm:py-32">
	<div class="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
	<div class="container relative z-10 mx-auto">
		<!-- Section header -->
		<div 
			class="mb-16 text-center transition-all duration-700 ease-out"
			class:opacity-100={sectionVisible}
			class:translate-y-0={sectionVisible}
			class:opacity-0={!sectionVisible}
			class:translate-y-8={!sectionVisible}
		>
			<Badge variant="outline" class="mb-4 border-primary/30 bg-primary/5 text-primary font-medium">Pricing</Badge>
			<h2 class="mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-center font-display text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
				Simple, transparent pricing
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
				Pay only for what you use with no hidden fees or complicated tiers.
				Get your first 50 generations free every month.
			</p>
		</div>

		<!-- Pricing Cards -->
		<div 
			class="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2"
			class:opacity-100={sectionVisible}
			class:translate-y-0={sectionVisible}
			class:opacity-0={!sectionVisible}
			class:translate-y-8={!sectionVisible}
		>
			<!-- Free Plan -->
			<div class="h-full transform transition-all duration-500 ease-out hover:translate-y-[-8px]" style="transition-delay: 200ms">
				<div class="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
					<!-- Card Header -->
					<div class="border-b border-gray-100 p-6 text-center">
						<h3 class="mb-2 font-display text-xl font-semibold text-gray-900">{freePlan.name}</h3>
						<div class="mb-1 text-3xl font-bold text-gray-900">{freePlan.price}</div>
						<p class="text-gray-500">{freePlan.description}</p>
					</div>
					
					<!-- Features -->
					<div class="flex grow flex-col justify-between p-6">
						<ul class="mb-8 space-y-4">
							{#each freePlan.features as feature}
								<li class="flex items-start">
									<Check size={18} class="mr-2 mt-0.5 text-primary/70" />
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
						
						<!-- CTA -->
						<a 
							href={freePlan.buttonHref}
							target="_blank" 
							rel="noopener noreferrer"
							class="group inline-flex w-full items-center justify-center rounded-lg border border-primary/30 bg-white px-4 py-2.5 text-center text-sm font-medium text-primary shadow-sm transition-all hover:border-primary/50 hover:bg-primary/5"
						>
							{freePlan.buttonText}
						</a>
					</div>
				</div>
			</div>
			
			<!-- Pro Plan -->
			<div class="h-full transform transition-all duration-500 ease-out hover:translate-y-[-8px]" style="transition-delay: 400ms">
				<div class="relative flex h-full flex-col overflow-hidden rounded-xl border-2 border-primary/20 bg-white shadow-md transition-shadow hover:shadow-lg">
					<!-- Popular Badge -->
					{#if pricingPlan.popular}
						<div class="absolute right-0 top-0 overflow-hidden">
							<div class="flex -translate-y-1/2 translate-x-1/2 rotate-45 transform items-center justify-center gap-1 bg-primary px-8 py-1 text-xs font-medium text-white shadow-sm">
								Popular
							</div>
						</div>
					{/if}
					
					<!-- Card Header -->
					<div class="border-b border-gray-100 bg-primary/[0.03] p-6 text-center">
						<h3 class="mb-2 font-display text-xl font-semibold text-gray-900">{pricingPlan.name}</h3>
						<div class="mb-1 text-3xl font-bold text-gray-900">{pricingPlan.price}</div>
						<p class="text-gray-500">{pricingPlan.description}</p>
					</div>
					
					<!-- Features -->
					<div class="flex grow flex-col justify-between p-6">
						<ul class="mb-8 space-y-4">
							{#each pricingPlan.features as feature}
								<li class="flex items-start">
									<Check size={18} class="mr-2 mt-0.5 text-primary" />
									<span>{feature}</span>
								</li>
							{/each}
						</ul>
						
						<!-- CTA -->
						<a 
							href={pricingPlan.buttonHref}
							target="_blank" 
							rel="noopener noreferrer"
							class="group inline-flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow"
						>
							{pricingPlan.buttonText}
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Pricing Calculator -->
		<div class="mt-20 transition-all duration-700 delay-500 ease-out" class:opacity-100={sectionVisible} class:opacity-0={!sectionVisible}>
			<PricingCalculator />
		</div>
		
		<!-- Custom Plan CTA -->
		<div class="mt-16 text-center transition-all duration-700 delay-700 ease-out" class:opacity-100={sectionVisible} class:opacity-0={!sectionVisible}>
			<p class="text-gray-600">
				All prices are in USD. Need a custom plan for high volume?{' '}
				<a href="mailto:yusril@izza.dev" class="font-medium text-primary transition-colors hover:text-primary-dark hover:underline"> 
					Contact our sales team
				</a>
			</p>
		</div>
	</div>
</section>
