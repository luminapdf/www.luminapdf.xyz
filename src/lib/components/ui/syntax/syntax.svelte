<script lang="ts" module>
	const langdefinitions = {
		bash: bash,
		javascript: javascript,
		go: go,
		python: python
	} as const;

	export interface SyntaxProps {
		lang: keyof typeof langdefinitions;
		code: string;
		class?: string;
	}
</script>

<script lang="ts">
	import Highlight from 'svelte-highlight';
	import bash from 'svelte-highlight/languages/bash';
	import javascript from 'svelte-highlight/languages/javascript';
	import go from 'svelte-highlight/languages/go';
	import python from 'svelte-highlight/languages/python';
	import 'svelte-highlight/styles/github-dark.css';

	const { lang, code, class: className }: SyntaxProps = $props();
</script>

<Highlight class={className} language={langdefinitions[lang]} {code} />
