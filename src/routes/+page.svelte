<script>
	import { onMount } from 'svelte';
	import ApiSection from '@/modules/landing/api-section.svelte';
	import HeroSection from '@/modules/landing/hero-section.svelte';
	import LandingHeader from '@/modules/landing/landing-header.svelte';
	import FooterSection from '@/modules/landing/footer-section.svelte';
	import CtaSection from '@/modules/landing/cta-section.svelte';
	import FaqSection from '@/modules/landing/faq-section.svelte';
	// import TestimonialsSection from '@/modules/landing/testimonials-section.svelte';
	import PricingSection from '@/modules/landing/pricing-section.svelte';
	import FeatureSection from '@/modules/landing/feature-section.svelte';
	import PlaygroundSection from '@/modules/landing/playground-section.svelte';
	import UseCases from '@/modules/landing/use-cases.svelte';

	// Intersection Observer for scroll animations
	onMount(() => {
		const sections = document.querySelectorAll('.animate-on-scroll');

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate-in');
						observer.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.1 }
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => observer.unobserve(section));
		};
	});
</script>

<LandingHeader />
<main class="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-16">
	<div class="animate-on-scroll opacity-0 transition-all duration-700 ease-out">
		<HeroSection />
	</div>

	<div class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out">
		<ApiSection />
	</div>

	<div class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out">
		<PlaygroundSection />
	</div>

	<div class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out">
		<FeatureSection />
	</div>

	<div class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out">
		<UseCases />
	</div>

	<div class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out">
		<PricingSection />
	</div>

	<div class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out">
		<FaqSection />
	</div>

	<div class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out">
		<CtaSection />
	</div>

	<div class="animate-on-scroll opacity-0 transition-all delay-100 duration-700 ease-out">
		<FooterSection />
	</div>
</main>
