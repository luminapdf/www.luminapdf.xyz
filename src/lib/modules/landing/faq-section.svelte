<script lang="ts">
	import { Chip } from '@/components/ui/chip';

	const faqs = [
		{
			question: 'How does your pricing work?',
			answer:
				"LuminaPDF offers a simple pay-as-you-go model. You get your first 50 PDF generations and screenshots free every month. After that, it's just $0.008 per PDF and $0.005 per screenshot, with no monthly commitment or hidden fees."
		},
		{
			question: 'What makes LuminaPDF different?',
			answer:
				'LuminaPDF combines enterprise-grade reliability with transparent pricing and excellent developer experience. We focus on providing a straightforward, reliable service without the complexity of tiered plans.'
		},
		{
			question: 'Do you offer a free trial?',
			answer:
				'Yes! You get 50 free generations (PDF or screenshots) every month, which reset at the beginning of each billing cycle. No credit card required to get started.'
		},
		{
			question: 'How fast is the API?',
			answer:
				'Our API typically responds in under 2 seconds for PDFs and under 1 second for screenshots, with consistent performance at any scale.'
		},
		{
			question: 'Can I customize the PDF output?',
			answer:
				'Yes, you can customize margins, formats, headers, footers, and more. Our API supports all standard PDF customization options with simple parameters.'
		}
	];
</script>

<section class="bg-gray-50 px-6 py-24">
	<div class="container mx-auto">
		<div class="mb-12 text-center">
			<Chip class="mb-4">FAQ</Chip>
			<h2 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Frequently Asked Questions</h2>
			<p class="mx-auto max-w-2xl text-gray-600">
				Everything you need to know about LuminaPDF's PDF and screenshot solutions.
			</p>
		</div>
		<div class="mx-auto max-w-3xl">
			<div class="divide-y divide-gray-200">
				{#each faqs as faq}
					<div class="py-6">
						<h3 class="mb-3 text-lg font-semibold text-gray-900">
							{faq.question}
						</h3>
						<p class="text-gray-600">{faq.answer}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
