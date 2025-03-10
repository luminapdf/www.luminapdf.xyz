<script>
	import ApiSection from '@/modules/landing/api-section.svelte';
	import HeroSection from '@/modules/landing/hero-section.svelte';
	import LandingHeader from '@/modules/landing/landing-header.svelte';
	import FooterSection from '@/modules/landing/footer-section.svelte';
	import CtaSection from '@/modules/landing/cta-section.svelte';
	import FaqSection from '@/modules/landing/faq-section.svelte';
	import TestimonialsSection from '@/modules/landing/testimonials-section.svelte';
	import PricingSection from '@/modules/landing/pricing-section.svelte';
	import FeatureSection from '@/modules/landing/feature-section.svelte';
	import PlaygroundSection from '@/modules/landing/playground-section.svelte';
</script>

<LandingHeader />
<main class="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-16">
	<HeroSection />

	<ApiSection />

	<PlaygroundSection />

	<FeatureSection />

	<PricingSection />

	<TestimonialsSection />

	<FaqSection />

	<CtaSection />

	<FooterSection />
</main>
