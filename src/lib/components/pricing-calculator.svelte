<script lang="ts">
	import { PUBLIC_PDF_GENERATION_COST, PUBLIC_SCREENSHOT_GENERATION_COST } from '$env/static/public';
	import { Slider } from '$lib/components/ui/slider/index.js';
	import { centsToDollars } from '$lib/helpers/currency';
	import { Calculator, FileText, Camera } from 'lucide-svelte';

	let pdfCount = $state(500);
	let screenshotCount = $state(500);

	const pdfRate = centsToDollars(Number(PUBLIC_PDF_GENERATION_COST));
	const screenshotRate = centsToDollars(Number(PUBLIC_SCREENSHOT_GENERATION_COST));

	// Calculate with free tier (50 free generations)
	const freeTier = 100;

	// Reactive calculation for costs
	const paidPdfCount = $derived(Math.max(0, pdfCount - freeTier));
	const paidScreenshotCount = $derived(Math.max(0, screenshotCount - freeTier));

	const pdfCost = $derived(paidPdfCount * pdfRate);
	const screenshotCost = $derived(paidScreenshotCount * screenshotRate);
	const totalCost = $derived((pdfCost + screenshotCost).toFixed(2));
</script>

<div
	class="relative mx-auto max-w-4xl rounded-3xl border border-gray-200/50 bg-gradient-to-br from-white to-gray-50/50 p-8 shadow-lg backdrop-blur-sm md:p-12"
>
	<!-- Header -->
	<div class="mb-10 text-center">
		<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
			<Calculator class="h-6 w-6 text-primary" />
		</div>
		<h3 class="font-display mb-2 text-2xl font-bold text-gray-900">Pricing Calculator</h3>
		<p class="text-gray-600">Estimate your monthly costs with our transparent pricing</p>
	</div>

	<!-- Calculator Content -->
	<div class="space-y-10">
		<!-- PDF Generation Section -->
		<div
			class="group rounded-2xl border border-gray-100 bg-white/70 p-6 transition-all hover:border-gray-200 hover:shadow-md"
		>
			<div class="mb-6 flex items-center gap-3">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 transition-colors group-hover:bg-blue-100"
				>
					<FileText class="h-5 w-5 text-blue-600" />
				</div>
				<div>
					<h4 class="font-semibold text-gray-900">PDF Generations</h4>
					<p class="text-sm text-gray-600">${pdfRate.toFixed(3)} per generation after free tier</p>
				</div>
			</div>

			<div class="space-y-4">
				<div class="flex items-center justify-between">
					<span class="text-sm font-medium text-gray-700">Monthly volume:</span>
					<div class="flex items-center gap-3">
						<input
							type="number"
							value={pdfCount}
							oninput={(e: any) => (pdfCount = Math.max(0, parseInt(e.target.value) || 0))}
							min="0"
							class="w-20 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-right text-sm font-medium focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
						/>
						<span class="text-sm text-gray-500">PDFs</span>
					</div>
				</div>

				<div class="px-1">
					<Slider type="single" bind:value={pdfCount} max={10000} step={50} class="w-full" />
				</div>

				<div class="flex items-center justify-between rounded-lg bg-blue-50/50 px-4 py-3">
					<span class="text-sm text-gray-600">
						{pdfCount <= freeTier ? 'All free' : `${freeTier} free + ${paidPdfCount} paid`}
					</span>
					<span class="font-semibold text-blue-700">${pdfCost.toFixed(2)}</span>
				</div>
			</div>
		</div>

		<!-- Screenshot Generation Section -->
		<div
			class="group rounded-2xl border border-gray-100 bg-white/70 p-6 transition-all hover:border-gray-200 hover:shadow-md"
		>
			<div class="mb-6 flex items-center gap-3">
				<div
					class="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 transition-colors group-hover:bg-green-100"
				>
					<Camera class="h-5 w-5 text-green-600" />
				</div>
				<div>
					<h4 class="font-semibold text-gray-900">Screenshots</h4>
					<p class="text-sm text-gray-600">${screenshotRate.toFixed(3)} per generation after free tier</p>
				</div>
			</div>

			<div class="space-y-4">
				<div class="flex items-center justify-between">
					<span class="text-sm font-medium text-gray-700">Monthly volume:</span>
					<div class="flex items-center gap-3">
						<input
							type="number"
							value={screenshotCount}
							oninput={(e: any) => (screenshotCount = Math.max(0, parseInt(e.target.value) || 0))}
							min="0"
							class="w-20 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-right text-sm font-medium focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
						/>
						<span class="text-sm text-gray-500">Screenshots</span>
					</div>
				</div>

				<div class="px-1">
					<Slider type="single" bind:value={screenshotCount} max={10000} step={50} class="w-full" />
				</div>

				<div class="flex items-center justify-between rounded-lg bg-green-50/50 px-4 py-3">
					<span class="text-sm text-gray-600">
						{screenshotCount <= freeTier ? 'All free' : `${freeTier} free + ${paidScreenshotCount} paid`}
					</span>
					<span class="font-semibold text-green-700">${screenshotCost.toFixed(2)}</span>
				</div>
			</div>
		</div>

		<!-- Total Cost Summary -->
		<div
			class="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 text-center"
		>
			<div class="mb-2">
				<span class="text-sm font-medium text-gray-600">Estimated Monthly Cost</span>
			</div>
			<div class="mb-4">
				<span class="font-display text-4xl font-bold text-gray-900">${totalCost}</span>
				<span class="text-lg text-gray-600">/month</span>
			</div>
			<div class="space-y-1 text-sm text-gray-600">
				<p>
					{#if paidPdfCount > 0 || paidScreenshotCount > 0}
						Includes your first 100 generations free each month
					{:else}
						All generations are free with your current volume
					{/if}
				</p>
				<p class="text-xs">No monthly commitment • Pay only for what you use</p>
			</div>
		</div>
	</div>
</div>
