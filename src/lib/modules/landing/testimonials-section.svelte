<script lang="ts">
	import { Chip } from '@/components/ui/chip';
	import TestimonialCard from './testimonial-card.svelte';

	const testimonials = [
		{
			name: 'Sarah Chen',
			role: 'CTO',
			company: 'TechFlow',
			content:
				"LuminaPDF's pricing is refreshingly simple. We love the pay-as-you-go model with free monthly generations - perfect for our variable usage needs.",
			rating: 5
		},
		{
			name: 'Mike Johnson',
			role: 'Lead Developer',
			company: 'DataStack',
			content:
				"The most straightforward PDF API we've found. Integration was a breeze, and the free monthly generations make testing and development so much easier.",
			rating: 5
		},
		{
			name: 'Lisa Rodriguez',
			role: 'Engineering Manager',
			company: 'CloudServe',
			content:
				"Finally, an affordable PDF solution that doesn't compromise on quality. LuminaPDF has become an essential part of our stack.",
			rating: 5
		}
	];
</script>

<section class="relative overflow-hidden px-6 py-24 sm:py-32">
	<!-- Animated background gradient spheres -->
	<div
		class="absolute -right-40 top-40 z-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-50/40 to-blue-100/20 opacity-40 blur-3xl animate-pulse"
		style="animation-duration: 12s;"
	></div>
	<div
		class="absolute left-20 -bottom-20 z-0 h-[400px] w-[400px] rounded-full bg-gradient-to-bl from-primary/5 to-primary/10 opacity-30 blur-3xl animate-pulse"
		style="animation-duration: 16s;"
	></div>
	<div class="container mx-auto">
		<div class="mb-12 text-center">
			<Chip class="mb-4">Testimonials</Chip>
			<h2 class="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">Trusted by developers worldwide</h2>
			<p class="mx-auto max-w-2xl text-gray-600">
				Join thousands of developers who've switched to LuminaPDF for reliable, straightforward document
				generation.
			</p>
		</div>
		<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
			{#each testimonials as testimonial}
				<TestimonialCard {...testimonial} />
			{/each}
		</div>
	</div>
</section>
