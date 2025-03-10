<script lang="ts">
	import { cn } from '@/utils';
	import type { Snippet } from 'svelte';

	interface ChipProps {
		class?: string;
		children?: Snippet;
	}

	const { class: className, children }: ChipProps = $props();
</script>

<span
	class={cn(
		'inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary',
		className
	)}
>
	{@render children?.()}
</span>
