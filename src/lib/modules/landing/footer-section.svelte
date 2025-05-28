<script lang="ts">
	import Github from 'lucide-svelte/icons/github';
	import Mail from 'lucide-svelte/icons/mail';
	import ArrowUpRight from 'lucide-svelte/icons/arrow-up-right';
	import { onMount } from 'svelte';

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

		const section = document.querySelector('#footer-section');
		if (section) observer.observe(section);

		return () => observer.disconnect();
	});

	function mailTo() {
		window.location.href = 'mailto:yusril@izza.dev';
	}

	const footerLinks = [
		{
			title: 'Product',
			links: [
				{ name: 'Features', href: '/#features' },
				{ name: 'Pricing', href: '/#pricing' },
				{ name: 'Documentation', href: '/docs', external: true },
				{ name: 'API Reference', href: '/docs', external: true }
			]
		},
		{
			title: 'Company',
			links: [
				{ name: 'About', href: '#' },
				{ name: 'Contact', href: 'mailto:yusril@izza.dev' },
				{ name: 'Status', href: '#' }
			]
		},
		{
			title: 'Legal',
			links: [
				{ name: 'Privacy Policy', href: '/legal/privacy-policy' },
				{ name: 'Terms of Service', href: '/legal/terms-of-service' }
			]
		}
	];
</script>

<footer id="footer-section" class="border-t border-gray-200 bg-gray-50 px-6 py-16 sm:py-20">
	<div
		class="container mx-auto transition-all duration-700 ease-out"
		class:opacity-100={sectionVisible}
		class:translate-y-0={sectionVisible}
		class:opacity-0={!sectionVisible}
		class:translate-y-8={!sectionVisible}
	>
		<div class="grid gap-12 md:grid-cols-5 lg:gap-16">
			<!-- Brand column -->
			<div class="md:col-span-2">
				<div class="mb-6">
					<a href="/" class="font-display text-xl font-semibold text-gray-900">LuminaPDF</a>
				</div>
				<p class="mb-8 max-w-md text-gray-600">
					Powerful PDF generation and screenshot API designed for developers. Create pixel-perfect documents
					with a simple API call.
				</p>
				<div class="flex items-center gap-5">
					<a
						href="https://github.com/luminapdf"
						target="_blank"
						rel="noopener noreferrer"
						class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-primary"
						aria-label="GitHub"
					>
						<Github size={20} />
					</a>
					<button
						onclick={mailTo}
						class="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-primary"
						aria-label="Email"
					>
						<Mail size={20} />
					</button>
				</div>
			</div>

			<!-- Links columns -->
			{#each footerLinks as column, i}
				<div
					style="transition-delay: {i * 100}ms"
					class="transition-all duration-700 ease-out"
					class:opacity-100={sectionVisible}
					class:translate-y-0={sectionVisible}
					class:opacity-0={!sectionVisible}
					class:translate-y-4={!sectionVisible}
				>
					<h4 class="font-display mb-5 text-sm font-semibold uppercase tracking-wider text-gray-900">
						{column.title}
					</h4>
					<ul class="space-y-4">
						{#each column.links as link}
							<li>
								<a
									href={link.href}
									target={link.external ? '_blank' : undefined}
									rel={link.external ? 'noopener noreferrer' : undefined}
									class="group inline-flex items-center text-gray-600 transition-colors hover:text-primary"
								>
									{link.name}
									{#if link.external}
										<ArrowUpRight
											size={14}
											class="ml-1 opacity-50 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
										/>
									{/if}
								</a>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<div class="mt-16 flex flex-col items-center justify-between border-t border-gray-200 pt-8 sm:flex-row">
			<p class="mb-4 text-sm text-gray-500 sm:mb-0">
				© {new Date().getFullYear()} LuminaPDF. All rights reserved.
			</p>
			<div class="text-sm text-gray-500">
				Designed with <span class="text-red-400">♥</span> for developers
			</div>
		</div>
	</div>
</footer>
