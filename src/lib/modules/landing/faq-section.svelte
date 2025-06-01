<script lang="ts">
	import { Badge } from '@/components/ui/badge';
	import { onMount } from 'svelte';
	import Plus from 'lucide-svelte/icons/plus';
	import Minus from 'lucide-svelte/icons/minus';

	let sectionVisible = $state(false);
	let expandedIndex = $state<number | null>(null);

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

		const section = document.querySelector('#faq-section');
		if (section) observer.observe(section);

		return () => observer.disconnect();
	});

	function toggleFaq(index: number) {
		if (expandedIndex === index) {
			expandedIndex = null;
		} else {
			expandedIndex = index;
		}
	}

	const faqs = [
		{
			question: 'How does the PDF and screenshot API pricing work?',
			answer:
				"LuminaPDF offers transparent pay-as-you-go pricing. You get 100 free PDF generations and screenshots every month. After that, it's just $0.008 per PDF and $0.005 per screenshot, with no monthly commitment, setup fees, or hidden charges."
		},
		{
			question: 'What programming languages does the API support?',
			answer:
				'Our REST API works with any programming language that can make HTTP requests. We provide official SDK libraries for JavaScript/Node.js, Python, Ruby, PHP, Go, and Java. You can also use tools like curl, Postman, or any HTTP client library.'
		},
		{
			question: 'Do I need a credit card to start using the API?',
			answer:
				'No credit card required to get started! Create a free account and receive 100 monthly generations (PDFs or screenshots) that automatically renew each month. We only require payment information when you exceed the free tier limits.'
		},
		{
			question: 'How fast is the PDF generation and screenshot capture?',
			answer:
				'Our globally distributed infrastructure delivers excellent performance: PDF generation typically completes in under 2 seconds, and screenshot capture in under 1 second. Performance scales consistently even at high volume with 99.99% uptime SLA.'
		},
		{
			question: 'What HTML/CSS features are supported for PDF conversion?',
			answer:
				'LuminaPDF supports modern HTML5 and CSS3, including Flexbox, Grid, custom fonts, images, SVGs, and JavaScript-rendered content. You can customize page size, orientation, margins, headers, footers, watermarks, and apply print-specific CSS styles.'
		},
		{
			question: 'Is there API rate limiting or volume restrictions?',
			answer:
				'Free tier accounts have a rate limit of 10 requests per minute. Paid accounts have higher limits based on usage patterns. For enterprise volumes or specific rate limit requirements, contact our team for custom solutions and dedicated infrastructure.'
		},
		{
			question: 'How do I authenticate API requests?',
			answer:
				'API authentication uses API keys passed in the Authorization header or as a query parameter. Each project gets unique API keys that you can regenerate anytime from your dashboard. We also support webhook signatures for secure callback verification.'
		},
		{
			question: 'What support options are available for developers?',
			answer:
				'All users get access to comprehensive documentation, code examples, and community support. Paid accounts receive email support with 24-hour response times. Enterprise customers get priority support with 4-hour response guarantees and dedicated technical contacts.'
		}
	];
</script>

<section id="faq-section" class="relative overflow-hidden px-6 py-24 sm:py-32">
	<!-- Subtle background gradient spheres -->
	<div
		class="absolute -right-10 top-20 z-0 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-bl from-blue-50/30 to-indigo-100/20 opacity-40 blur-3xl"
		style="animation-duration: 12s;"
	></div>
	<div
		class="absolute -left-20 bottom-10 z-0 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-tr from-primary/5 to-primary/10 opacity-30 blur-3xl"
		style="animation-duration: 15s;"
	></div>
	<div class="container mx-auto">
		<!-- Section header -->
		<div
			class="mb-16 text-center transition-all duration-700 ease-out"
			class:opacity-100={sectionVisible}
			class:translate-y-0={sectionVisible}
			class:opacity-0={!sectionVisible}
			class:translate-y-8={!sectionVisible}
		>
			<Badge variant="outline" class="mb-4 border-primary/30 bg-primary/5 font-medium text-primary"
				>Developer FAQ</Badge
			>
			<h2
				class="font-display mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-center text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl"
			>
				PDF & Screenshot API Questions
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
				Common questions about integrating LuminaPDF's API for PDF generation and screenshot capture in your
				applications.
			</p>
		</div>

		<!-- FAQ accordion -->
		<div
			class="mx-auto max-w-3xl transition-all delay-200 duration-700 ease-out"
			class:opacity-100={sectionVisible}
			class:opacity-0={!sectionVisible}
		>
			<div class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
				{#each faqs as faq, i}
					<!-- FAQ Item -->
					<div
						class="border-b border-gray-100 transition-all duration-200 ease-out last:border-0"
						style="transition-delay: {i * 50}ms"
						class:translate-y-0={sectionVisible}
						class:translate-y-4={!sectionVisible}
					>
						<!-- Question (clickable header) -->
						<button
							class="flex w-full items-center justify-between px-6 py-5 text-left transition-colors hover:bg-gray-50"
							onclick={() => toggleFaq(i)}
							aria-expanded={expandedIndex === i}
						>
							<h3 class="text-lg font-semibold text-gray-900">
								{faq.question}
							</h3>
							<div
								class="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-transform duration-200"
								class:rotate-45={expandedIndex !== i}
							>
								{#if expandedIndex === i}
									<Minus size={16} />
								{:else}
									<Plus size={16} />
								{/if}
							</div>
						</button>

						<!-- Answer (collapsible content) -->
						<div
							class="overflow-hidden transition-all duration-300 ease-out"
							class:max-h-0={expandedIndex !== i}
							class:max-h-[500px]={expandedIndex === i}
							class:opacity-0={expandedIndex !== i}
							class:opacity-100={expandedIndex === i}
						>
							<div class="bg-gray-50/50 px-6 pb-5 pt-2">
								<p class="leading-relaxed text-gray-600">{faq.answer}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<!-- Additional help link -->
			<div class="mt-8 text-center">
				<p class="text-gray-600">
					Still have questions? <a
						href="mailto:support@luminapdf.com"
						class="font-medium text-primary hover:underline">Contact our support team</a
					>
				</p>
			</div>
		</div>
	</div>
</section>
