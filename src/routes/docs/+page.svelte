<script lang="ts">
	import { onMount } from 'svelte';
	import { PUBLIC_API_DOCS_URL } from '$env/static/public';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	let isLoading = $state(true);

	onMount(() => {
		// Add the API reference element
		const apiRef = document.createElement('script');
		apiRef.id = 'api-reference';
		apiRef.setAttribute('data-url', PUBLIC_API_DOCS_URL);
		document.body.appendChild(apiRef);

		// Add the Scalar script
		const scalarScript = document.createElement('script');
		scalarScript.src = 'https://cdn.jsdelivr.net/npm/@scalar/api-reference';

		// Listen for the script to load
		scalarScript.onload = () => {
			// Sometimes there's a slight delay before Scalar renders
			setTimeout(() => {
				isLoading = false;
			}, 2000);
		};

		document.body.appendChild(scalarScript);
	});
</script>

<svelte:head>
	<title>LuminaPDF | API Documentation</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

{#if isLoading}
	<div class="relative h-screen w-full">
		<div
			class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-4"
		>
			<LoaderCircle size={48} class="animate-spin text-blue-600" />
			<p class="font-medium text-gray-800">Loading API documentation...</p>
		</div>
	</div>
{/if}
