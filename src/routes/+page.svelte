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

<!-- improved accessibility with skip links -->
<a
	href="#main-content"
	class="sr-only z-50 rounded bg-primary px-4 py-2 text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
>
	Skip to main content
</a>

<LandingHeader />
<!-- improved semantic HTML structure with proper headings hierarchy -->
<main id="main-content" class="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-16" role="main">
	<!-- Hero Section - Primary CTA -->
	<section
		class="animate-on-scroll opacity-0 transition-all duration-700 ease-out"
		aria-labelledby="hero-heading"
	>
		<HeroSection />
	</section>

	<!-- API Integration Section -->
	<section
		class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out"
		aria-labelledby="api-heading"
	>
		<ApiSection />
	</section>

	<!-- Live Playground Demo -->
	<section
		class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out"
		aria-labelledby="playground-heading"
	>
		<PlaygroundSection />
	</section>

	<!-- Core Features -->
	<section
		class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out"
		aria-labelledby="features-heading"
	>
		<FeatureSection />
	</section>

	<!-- Use Cases & Applications -->
	<section
		class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out"
		aria-labelledby="use-cases-heading"
	>
		<UseCases />
	</section>

	<!-- Pricing Information -->
	<section
		class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out"
		aria-labelledby="pricing-heading"
	>
		<PricingSection />
	</section>

	<!-- Developer FAQ -->
	<section
		class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out"
		aria-labelledby="faq-heading"
	>
		<FaqSection />
	</section>

	<!-- Final CTA -->
	<section
		class="animate-on-scroll translate-y-4 opacity-0 transition-all delay-100 duration-700 ease-out"
		aria-labelledby="cta-heading"
	>
		<CtaSection />
	</section>

	<!-- Footer -->
	<footer
		class="animate-on-scroll opacity-0 transition-all delay-100 duration-700 ease-out"
		role="contentinfo"
	>
		<FooterSection />
	</footer>
</main>
