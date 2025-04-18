<script lang="ts">
	import { PUBLIC_DASHBOARD_URL } from '$env/static/public';
	import Button from '@/components/ui/button/button.svelte';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';

	let isMobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}
</script>

<header class="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
	<div class="container mx-auto px-6">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="text-xl font-bold text-gray-900">LuminaPDF</a>

			<nav class="hidden items-center space-x-8 md:flex">
				<a href="/" class="text-sm font-medium text-gray-700 hover:text-primary"> Home </a>
				<a href="/#pricing" class="text-sm font-medium text-gray-700 hover:text-primary"> Pricing </a>
				<a href="/docs" target="_blank" class="text-sm font-medium text-gray-700 hover:text-primary">
					Docs
				</a>
				<a href="#" class="text-sm font-medium text-gray-700 hover:text-primary"> Status </a>
			</nav>

			<div class="flex items-center gap-2">
				<div class="hidden md:block">
					<Button href={PUBLIC_DASHBOARD_URL} target="_blank" size="sm">Open App</Button>
				</div>

				<button
					onclick={toggleMobileMenu}
					class="rounded p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary md:hidden"
					aria-label="Toggle menu"
					aria-expanded={isMobileMenuOpen}
				>
					{#if isMobileMenuOpen}
						<X size={24} />
					{:else}
						<Menu size={24} />
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if isMobileMenuOpen}
		<div class="absolute left-0 top-16 z-40 w-full border-b border-gray-200 bg-white p-6 shadow-md md:hidden">
			<nav class="flex flex-col space-y-4">
				<a
					href="/"
					onclick={closeMobileMenu}
					class="block rounded px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
				>
					Home
				</a>
				<a
					href="/#pricing"
					onclick={closeMobileMenu}
					class="block rounded px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
				>
					Pricing
				</a>
				<a
					href="/docs"
					target="_blank"
					onclick={closeMobileMenu}
					class="block rounded px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
				>
					Docs
				</a>
				<a
					href="#"
					onclick={closeMobileMenu}
					class="block rounded px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary"
				>
					Status
				</a>
				<hr class="border-gray-200" />
				<Button href={PUBLIC_DASHBOARD_URL} target="_blank" class="w-full">Open App</Button>
			</nav>
		</div>
	{/if}
</header>
