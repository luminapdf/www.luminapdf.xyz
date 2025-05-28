<script lang="ts">
	import Copy from 'lucide-svelte/icons/copy';
	import Check from 'lucide-svelte/icons/check';
	import * as Tabs from '$lib/components/ui/tabs';
	import { Badge } from '@/components/ui/badge';
	import { apiCallExamples } from './api-call-examples';
	import Syntax, { type SyntaxProps } from '@/components/ui/syntax/syntax.svelte';
	import { onMount } from 'svelte';

	let selectedEndpoint = $state('pdf');
	let selectedLanguage = $state<SyntaxProps['lang']>('bash');
	let copied = $state(false);
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
		
		const section = document.querySelector('#api-example');
		if (section) observer.observe(section);
		
		return () => observer.disconnect();
	});

	function copyToClipboard() {
		navigator.clipboard.writeText(apiCallExamples?.[selectedLanguage]?.[selectedEndpoint]);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
	
	const languages = Object.keys(apiCallExamples);
</script>

<section id="api-example" class="px-6 py-24 sm:py-32">
	<div class="container mx-auto">
		<div 
			class="mx-auto max-w-4xl transition-all duration-700 ease-out" 
			class:opacity-100={sectionVisible}
			class:translate-y-0={sectionVisible}
			class:opacity-0={!sectionVisible}
			class:translate-y-8={!sectionVisible}
		>
			<div class="mb-12 text-center">
				<Badge variant="outline" class="mb-4 border-primary/30 bg-primary/5 text-primary font-medium">Simple Integration</Badge>
				<h2 class="mb-6 bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text text-center font-display text-3xl font-bold tracking-tight text-transparent sm:text-4xl md:text-5xl">
					Integrate with just a few lines of code
				</h2>
				<p class="mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
					Our developer-friendly API lets you generate PDFs and capture screenshots with minimal effort.
					Get started in minutes with our comprehensive SDK support.
				</p>
			</div>
			
			<div class="overflow-hidden rounded-xl border border-gray-200 bg-gray-950 shadow-xl md:rounded-2xl">
				<div class="flex items-center justify-between border-b border-gray-800 px-5 py-3">
					<div class="flex items-center space-x-2">
						<span class="h-3 w-3 rounded-full bg-red-500"></span>
						<span class="h-3 w-3 rounded-full bg-yellow-500"></span>
						<span class="h-3 w-3 rounded-full bg-green-500"></span>
					</div>
					<div class="text-xs font-medium text-gray-400">luminapdf-api.js</div>
				</div>
				
				<div class="p-5">
					<Tabs.Root value={selectedEndpoint} onValueChange={(val) => (selectedEndpoint = val)}>
						<div class="mb-6 flex items-center justify-between">
							<Tabs.List class="inline-flex rounded-lg bg-gray-900/50 p-1">
								<Tabs.Trigger
									value="pdf"
									class="rounded-md px-3 py-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-white data-[state=active]:bg-gray-800 data-[state=active]:text-white"
								>
									PDF Generation
								</Tabs.Trigger>
								<Tabs.Trigger
									value="screenshot"
									class="rounded-md px-3 py-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-white data-[state=active]:bg-gray-800 data-[state=active]:text-white"
								>
									Screenshot Capture
								</Tabs.Trigger>
							</Tabs.List>

							<div class="flex items-center space-x-1.5">
								{#each languages as language}
									<button
										onclick={() => (selectedLanguage = language as SyntaxProps['lang'])}
										class={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
											selectedLanguage === language
												? 'bg-primary/20 text-primary'
												: 'text-gray-400 hover:bg-gray-800 hover:text-white'
										}`}
									>
										{language.toUpperCase()}
									</button>
								{/each}
							</div>
						</div>

						<div class="relative mt-1 overflow-hidden rounded-lg bg-gray-900/50 p-4">
							<button
								onclick={copyToClipboard}
								class="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-md bg-gray-800/80 text-gray-400 backdrop-blur-sm transition-colors hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/30"
								title="Copy code"
							>
								{#if copied}
									<Check size={16} class="text-green-500" />
								{:else}
									<Copy size={16} />
								{/if}
							</button>

							<Syntax lang={selectedLanguage} code={apiCallExamples[selectedLanguage][selectedEndpoint]} />
						</div>
					</Tabs.Root>
				</div>
			</div>
			
			<!-- API Benefits -->
			<div 
				class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3 transition-all duration-700 delay-300 ease-out"
				class:opacity-100={sectionVisible}
				class:translate-y-0={sectionVisible}
				class:opacity-0={!sectionVisible}
				class:translate-y-8={!sectionVisible}
			>
				<div class="rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
					<div class="mb-3 text-lg font-semibold text-gray-900">Universal Support</div>
					<p class="text-gray-600">Client libraries available for JavaScript, Python, Ruby, PHP, and more.</p>
				</div>
				<div class="rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
					<div class="mb-3 text-lg font-semibold text-gray-900">Detailed Documentation</div>
					<p class="text-gray-600">Comprehensive guides with examples for all use cases and edge scenarios.</p>
				</div>
				<div class="rounded-lg border border-gray-100 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
					<div class="mb-3 text-lg font-semibold text-gray-900">Playground Testing</div>
					<p class="text-gray-600">Try API calls directly in our interactive playground before implementing.</p>
				</div>
			</div>
		</div>
	</div>
</section>
