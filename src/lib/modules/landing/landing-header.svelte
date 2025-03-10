<script>
	import Button from '@/components/ui/button/button.svelte';
</script>

<header class="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
	<div class="container mx-auto px-6">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="text-xl font-bold text-gray-900">LuminaPDF</a>

			<nav class="hidden items-center space-x-8 md:flex">
				<a href="/" class="text-sm font-medium text-gray-700 hover:text-primary"> Home </a>
				<a href="#pricing" class="text-sm font-medium text-gray-700 hover:text-primary"> Pricing </a>
				<a href="#" class="text-sm font-medium text-gray-700 hover:text-primary"> Docs </a>
				<a href="#" class="text-sm font-medium text-gray-700 hover:text-primary"> Status </a>
			</nav>

			<div class="space-x-2">
				<Button href="https://app.luminapdf.xyz">Open App</Button>
			</div>
		</div>
	</div>
</header>
