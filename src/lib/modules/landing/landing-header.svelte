<script lang="ts">
	import { PUBLIC_DASHBOARD_URL } from '$env/static/public';
	import { Button } from '@/components/ui/button';
	import { onMount } from 'svelte';
	import Menu from 'lucide-svelte/icons/menu';
	import X from 'lucide-svelte/icons/x';
	import ArrowRight from 'lucide-svelte/icons/arrow-right';

	import logo from '$lib/assets/logo/lumina-logo.png';

	let isMobileMenuOpen = $state(false);
	let headerVisible = $state(false);
	let scrolled = $state(false);

	onMount(() => {
		setTimeout(() => {
			headerVisible = true;
		}, 100);

		const handleScroll = () => {
			scrolled = window.scrollY > 20;
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function toggleMobileMenu() {
		isMobileMenuOpen = !isMobileMenuOpen;
	}

	function closeMobileMenu() {
		isMobileMenuOpen = false;
	}

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/#features', label: 'Features' },
		{ href: '/#pricing', label: 'Pricing' },
		{ href: '/docs', label: 'Documentation', external: true }
	];
</script>

<header
	class="fixed left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out {scrolled
		? 'border-b border-gray-100 bg-white/90 shadow-sm backdrop-blur-md'
		: 'bg-transparent'}"
	class:opacity-100={headerVisible}
	class:opacity-0={!headerVisible}
>
	<div class="container mx-auto px-6">
		<div class="flex h-16 items-center justify-between">
			<a href="/" class="font-display group relative text-lg font-semibold text-gray-900">
				<!-- <span class="relative z-10">LuminaPDF</span> -->
				<img src={logo} alt="LuminaPDF" width="140" height="50" />
				<span
					class="absolute bottom-0 left-0 h-[5px] w-0 bg-primary/10 transition-all duration-300 ease-out group-hover:w-full"
				></span>
			</a>

			<nav class="hidden items-center space-x-8 md:flex">
				{#each navItems as item}
					<a
						href={item.href}
						target={item.external ? '_blank' : undefined}
						class="group relative text-sm font-medium text-gray-800 transition-colors"
					>
						<span>{item.label}</span>
						<span
							class="absolute -bottom-0.5 left-0 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"
						></span>
					</a>
				{/each}
			</nav>

			<div class="flex items-center gap-2">
				<div class="hidden md:block">
					<Button
						href={PUBLIC_DASHBOARD_URL}
						target="_blank"
						variant="outline"
						size="sm"
						class="group border-gray-200 bg-white/50 shadow-sm transition-all hover:border-primary/40 hover:bg-white hover:shadow"
					>
						<span>Open App</span>
						<ArrowRight
							class="ml-1.5 h-3.5 w-3.5 opacity-50 transition-transform group-hover:translate-x-1 group-hover:opacity-100"
						/>
					</Button>
				</div>

				<button
					onclick={toggleMobileMenu}
					class="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100/80 text-gray-700 transition-colors hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 md:hidden"
					aria-label="Toggle menu"
					aria-expanded={isMobileMenuOpen}
				>
					{#if isMobileMenuOpen}
						<X size={18} />
					{:else}
						<Menu size={18} />
					{/if}
				</button>
			</div>
		</div>
	</div>

	{#if isMobileMenuOpen}
		<div
			class="absolute left-0 top-16 z-40 w-full overflow-hidden bg-white shadow-lg transition-all duration-300"
			class:max-h-[400px]={isMobileMenuOpen}
			class:max-h-0={!isMobileMenuOpen}
		>
			<div class="border-t border-gray-100 p-4">
				<nav class="flex flex-col divide-y divide-gray-100">
					{#each navItems as item}
						<a
							href={item.href}
							target={item.external ? '_blank' : undefined}
							onclick={closeMobileMenu}
							class="flex items-center justify-between py-3 text-base font-medium text-gray-900 transition-colors hover:text-primary"
						>
							{item.label}
							<ArrowRight class="h-4 w-4 opacity-40" />
						</a>
					{/each}
					<div class="pt-4">
						<Button href={PUBLIC_DASHBOARD_URL} target="_blank" class="w-full gap-2 shadow-sm">
							Open Dashboard
							<ArrowRight class="h-4 w-4" />
						</Button>
					</div>
				</nav>
			</div>
		</div>
	{/if}
</header>
