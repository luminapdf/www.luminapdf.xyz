<script lang="ts">
	import Copy from 'lucide-svelte/icons/copy';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import { apiCallExamples } from './api-call-examples';
	import Syntax, { type SyntaxProps } from '@/components/ui/syntax/syntax.svelte';

	let selectedEndpoint = $state('pdf');
	let selectedLanguage = $state<SyntaxProps['lang']>('bash');
	let copied = $state(false);

	function copyToClipboard() {
		navigator.clipboard.writeText(apiCallExamples?.[selectedLanguage]?.[selectedEndpoint]);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<section id="api-example" class="px-6 py-16">
	<div class="container mx-auto">
		<div class="mx-auto max-w-3xl">
			<div class="relative overflow-hidden rounded-xl bg-gray-950 p-6 shadow-xl">
				<Tabs.Root value={selectedEndpoint} onValueChange={(val) => (selectedEndpoint = val)}>
					<div class="mb-4 border-b border-gray-800">
						<Tabs.List class="flex space-x-4 bg-transparent">
							<Tabs.Trigger
								value="pdf"
								class="border-b-2 border-transparent pb-2 text-sm text-gray-400 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-white"
							>
								PDF Generation
							</Tabs.Trigger>
							<Tabs.Trigger
								value="screenshot"
								class="border-b-2 border-transparent pb-2 text-sm text-gray-400 data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-white"
							>
								Screenshot Capture
							</Tabs.Trigger>
						</Tabs.List>
					</div>

					<div class="mb-4 flex space-x-4">
						{#each Object.keys(apiCallExamples) as language}
							<button
								onclick={() => (selectedLanguage = language as SyntaxProps['lang'])}
								class={`rounded px-3 py-1 text-sm ${
									selectedLanguage === language
										? 'bg-gray-800 text-white'
										: 'text-gray-400 hover:bg-gray-800 hover:text-white'
								}`}
							>
								{language.toUpperCase()}
							</button>
						{/each}
					</div>

					<div class="relative">
						<button
							onclick={copyToClipboard}
							class="absolute right-2 top-2 rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
						>
							<Copy size={16} />
						</button>

						<Syntax lang={selectedLanguage} code={apiCallExamples[selectedLanguage][selectedEndpoint]} />
					</div>
				</Tabs.Root>

				{#if copied}
					<div
						class="absolute inset-0 flex animate-fade-in items-center justify-center bg-primary bg-opacity-90"
					>
						<p class="text-white">Copied to clipboard!</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>
