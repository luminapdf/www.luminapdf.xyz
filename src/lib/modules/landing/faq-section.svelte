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
			question: 'How does your pricing work?',
			answer:
				"LuminaPDF offers a simple pay-as-you-go model. You get your first 50 PDF generations and screenshots free every month. After that, it's just $0.008 per PDF and $0.005 per screenshot, with no monthly commitment or hidden fees."
		},
		{
			question: 'What makes LuminaPDF different from competitors?',
			answer:
				'LuminaPDF combines enterprise-grade reliability with transparent pricing and excellent developer experience. Our API is designed to be intuitive with predictable costs and outstanding performance, without the complexity of tiered plans or unexpected charges.'
		},
		{
			question: 'Do I need a credit card to get started?',
			answer:
				'No! You can start using LuminaPDF without a credit card. You get 50 free generations (PDF or screenshots) every month, which automatically reset at the beginning of each month. We only ask for payment information when you exceed the free tier limits.'
		},
		{
			question: 'How fast is the API response time?',
			answer:
				'Our globally distributed infrastructure delivers exceptional speed: PDFs are typically generated in under 2 seconds, and screenshots in under 1 second. Performance remains consistent even at high volume, with enterprise-grade reliability and 99.99% uptime.'
		},
		{
			question: 'What customization options are available for PDFs?',
			answer:
				'LuminaPDF supports comprehensive customization including page size, orientation, margins, headers, footers, watermarks, metadata, encryption, and compression levels. You can also specify CSS to control the exact rendering of your HTML content, ensuring pixel-perfect documents every time.'
		},
		{
			question: 'Do you offer technical support?',
			answer:
				'Yes, all customers receive technical support via email with a 24-hour response guarantee. Enterprise customers gain access to priority support with 4-hour response times and dedicated technical contacts for implementation assistance.'
		}
	];
</script>

<section id="faq-section" class="relative overflow-hidden px-6 py-24 sm:py-32">
	<!-- Subtle background gradient spheres -->
	<div
		class="absolute -right-10 top-20 z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-blue-50/30 to-indigo-100/20 opacity-40 blur-3xl animate-pulse"
		style="animation-duration: 12s;"
	></div>
	<div
		class="absolute -left-20 bottom-10 z-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-primary/5 to-primary/10 opacity-30 blur-3xl animate-pulse"
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
			<Badge variant="outline" class="mb-4 border-primary/30 bg-primary/5 text-primary font-medium">Help Center</Badge>
			<h2 class="mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-center font-display text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
				Frequently Asked Questions
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
				Everything you need to know about using LuminaPDF to generate perfect documents for your applications.
			</p>
		</div>
		
		<!-- FAQ accordion -->
		<div class="mx-auto max-w-3xl transition-all duration-700 delay-200 ease-out" class:opacity-100={sectionVisible} class:opacity-0={!sectionVisible}>
			<div class="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
				{#each faqs as faq, i}
					<!-- FAQ Item -->
					<div 
						class="border-b border-gray-100 last:border-0 transition-all duration-200 ease-out"
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
							<div class="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-transform duration-200" class:rotate-45={expandedIndex !== i}>
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
								<p class="text-gray-600 leading-relaxed">{faq.answer}</p>
							</div>
						</div>
					</div>
				{/each}
			</div>
			
			<!-- Additional help link -->
			<div class="mt-8 text-center">
				<p class="text-gray-600">Still have questions? <a href="mailto:support@luminapdf.com" class="font-medium text-primary hover:underline">Contact our support team</a></p>
			</div>
		</div>
	</div>
</section>
