<script lang="ts">
	import { PUBLIC_DASHBOARD_URL } from '$env/static/public';
	import { Chip } from '@/components/ui/chip';
	import Typewriter from 'svelte-typewriter';
</script>

<section id="hero" class="px-6 py-24 sm:py-32">
	<div class="container mx-auto">
		<div class="mx-auto max-w-3xl text-center">
			<Chip class="mb-4">Starting at $0/month</Chip>
			<Typewriter interval={80}>
				<h1 class="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
					Transform Web Content into Perfect PDFs & Screenshots
				</h1>
			</Typewriter>
			<p class="mb-8 animate-fade-up text-lg text-gray-600">
				Premium PDF generation and screenshot capture at prices that won't break the bank. Save up to 70%
				compared to other providers, with the developer experience you deserve.
			</p>
			<div class="flex flex-wrap items-center justify-center gap-4">
				<a
					href={PUBLIC_DASHBOARD_URL}
					class="inline-flex items-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
				>
					Get Started
				</a>
				<a
					href="/docs"
					class="inline-flex items-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
				>
					View Documentation
				</a>
			</div>
		</div>
	</div>
</section>
