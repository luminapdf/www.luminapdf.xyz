<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		visible: boolean;
	}

	let { visible }: Props = $props();
	let lineAnimation = $state(false);

	onMount(() => {
		const timer1 = setTimeout(() => (visible = true), 500);
		const timer2 = setTimeout(() => (lineAnimation = true), 1500);

		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	});

	const webLines = [
		{ width: 'w-3/4', delay: 'delay-100' },
		{ width: 'w-full', delay: 'delay-200' },
		{ width: 'w-5/6', delay: 'delay-300' },
		{ width: 'w-4/5', delay: 'delay-400' },
		{ width: 'w-2/3', delay: 'delay-500' },
		{ width: 'w-full', delay: 'delay-600' },
		{ width: 'w-5/6', delay: 'delay-700' }
	];
</script>

<div class="relative mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
	<!-- Main transformation flow -->
	<div class="relative z-10 flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16">
		<!-- Source HTML/Web Content -->
		<div
			class="relative order-1 transform transition-all duration-1000 ease-out lg:order-1"
			class:opacity-100={visible}
			class:translate-y-0={visible}
			class:opacity-0={!visible}
			class:translate-y-8={!visible}
		>
			<div class="relative">
				<!-- Browser window mockup -->
				<div
					class="w-72 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl sm:w-80 lg:w-80"
				>
					<!-- Browser header -->
					<div
						class="flex items-center justify-between border-b border-gray-200 bg-gray-100 px-3 py-2 sm:px-4 sm:py-3"
					>
						<div class="flex items-center space-x-1.5 sm:space-x-2">
							<div class="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3"></div>
							<div class="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></div>
							<div class="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3"></div>
						</div>
						<div class="mx-2 flex-1 sm:mx-4">
							<div class="rounded-full border bg-white px-2 py-1 text-xs text-gray-500 sm:px-3">
								https://example.com
							</div>
						</div>
						<div class="h-3 w-5 rounded bg-gray-300 sm:h-4 sm:w-6"></div>
					</div>

					<!-- Web content -->
					<div class="min-h-[250px] bg-gradient-to-br from-blue-50 to-indigo-100 p-4 sm:min-h-[300px] sm:p-6">
						<div class="space-y-3 sm:space-y-4">
							<!-- Header -->
							<div
								class="h-6 w-2/3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 shadow-sm sm:h-8"
							></div>

							<!-- Content lines with animation -->
							<div class="space-y-2 sm:space-y-3">
								{#each webLines as line, index}
									<div
										class="h-2.5 sm:h-3 {line.width} rounded-full bg-gray-300 transition-all duration-700 ease-out {line.delay}"
										class:transform={lineAnimation}
										class:scale-x-110={lineAnimation}
										class:bg-blue-200={lineAnimation}
									></div>
								{/each}
							</div>

							<!-- Interactive elements -->
							<div class="mt-4 space-y-2 sm:mt-6 sm:space-y-3">
								<div
									class="flex h-10 w-full items-center justify-center rounded-lg border-2 border-dashed border-blue-300 bg-white sm:h-12"
								>
									<div class="text-xs font-medium text-blue-500">Interactive Content</div>
								</div>
								<div class="flex space-x-2">
									<div class="h-6 w-16 rounded bg-blue-500 shadow-sm sm:h-8 sm:w-20"></div>
									<div class="h-6 w-12 rounded bg-gray-300 sm:h-8 sm:w-16"></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- HTML/CSS indicators -->
				<div
					class="absolute -right-3 -top-3 transition-all delay-700 duration-1000 sm:-right-4 sm:-top-4"
					class:opacity-100={visible}
					class:scale-100={visible}
					class:opacity-0={!visible}
					class:scale-75={!visible}
				>
					<div
						class="rounded-full bg-orange-500 px-1.5 py-0.5 text-xs font-bold text-white shadow-lg sm:px-2 sm:py-1"
					>
						HTML
					</div>
				</div>
				<div
					class="absolute -bottom-3 -left-3 transition-all delay-1000 duration-1000 sm:-bottom-4 sm:-left-4"
					class:opacity-100={visible}
					class:scale-100={visible}
					class:opacity-0={!visible}
					class:scale-75={!visible}
				>
					<div
						class="rounded-full bg-blue-500 px-1.5 py-0.5 text-xs font-bold text-white shadow-lg sm:px-2 sm:py-1"
					>
						CSS
					</div>
				</div>
			</div>
		</div>

		<!-- Transformation arrows and splitting effect -->
		<div
			class="order-2 flex flex-row items-center space-x-4 lg:order-2 lg:flex-col lg:space-x-0 lg:space-y-8"
		>
			<!-- Main arrow -->
			<div
				class="transition-all delay-1000 duration-1000"
				class:opacity-100={visible}
				class:scale-100={visible}
				class:opacity-0={!visible}
				class:scale-75={!visible}
			>
				<div class="flex items-center lg:flex-col lg:items-center">
					<div
						class="h-0.5 w-8 bg-gradient-to-r from-blue-500 to-purple-500 lg:h-0.5 lg:w-12 lg:rotate-90"
					></div>
					<div
						class="h-3 w-3 rotate-45 transform border-r-2 border-t-2 border-purple-500 lg:h-4 lg:w-4 lg:rotate-[135deg]"
					></div>
				</div>
			</div>

			<!-- LuminaPDF logo/brand -->
			<div
				class="transition-all delay-1000 duration-1000"
				class:opacity-100={visible}
				class:scale-100={visible}
				class:opacity-0={!visible}
				class:scale-75={!visible}
			>
				<div
					class="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-3 py-1.5 text-xs font-bold text-white shadow-lg sm:text-sm lg:px-4 lg:py-2"
				>
					LuminaPDF
				</div>
			</div>

			<!-- Split arrows -->
			<div
				class="flex flex-row space-x-2 transition-all delay-1000 duration-1000 lg:flex-col lg:space-x-0 lg:space-y-4"
				class:opacity-100={lineAnimation}
				class:scale-100={lineAnimation}
				class:opacity-0={!lineAnimation}
				class:scale-75={!lineAnimation}
			>
				<!-- To PDF arrow -->
				<div class="flex rotate-12 transform items-center lg:-rotate-12">
					<div class="h-0.5 w-6 bg-gradient-to-r from-red-400 to-red-600 lg:w-8"></div>
					<div
						class="h-2.5 w-2.5 rotate-45 transform border-r-2 border-t-2 border-red-600 lg:h-3 lg:w-3"
					></div>
				</div>
				<!-- To Screenshot arrow -->
				<div class="flex -rotate-12 transform items-center lg:rotate-12">
					<div class="h-0.5 w-6 bg-gradient-to-r from-green-400 to-green-600 lg:w-8"></div>
					<div
						class="h-2.5 w-2.5 rotate-45 transform border-r-2 border-t-2 border-green-600 lg:h-3 lg:w-3"
					></div>
				</div>
			</div>
		</div>

		<!-- Output formats -->
		<div
			class="order-3 flex flex-col space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0 lg:order-3 lg:flex-col lg:space-x-0 lg:space-y-8"
		>
			<!-- PDF Output -->
			<div
				class="transform transition-all delay-1000 duration-1000 ease-out"
				class:opacity-100={lineAnimation}
				class:translate-x-0={lineAnimation}
				class:translate-y-0={lineAnimation}
				class:opacity-0={!lineAnimation}
				class:translate-x-8={!lineAnimation}
				class:-translate-y-4={!lineAnimation}
			>
				<div class="w-60 overflow-hidden rounded-xl border border-red-200 bg-white shadow-xl sm:w-56 lg:w-64">
					<div class="border-b border-red-100 bg-red-50 px-3 py-2 sm:px-4 sm:py-3">
						<div class="flex items-center justify-between">
							<div class="flex items-center space-x-1.5 sm:space-x-2">
								<div class="flex h-6 w-6 items-center justify-center rounded bg-red-500 sm:h-8 sm:w-8">
									<span class="text-xs font-bold text-white">PDF</span>
								</div>
								<span class="text-xs font-medium text-red-700 sm:text-sm">document.pdf</span>
							</div>
							<span class="text-xs text-red-400">2.4 MB</span>
						</div>
					</div>
					<div class="space-y-2 p-3 sm:space-y-3 sm:p-4">
						<div class="h-4 w-2/3 rounded bg-red-100 sm:h-6"></div>
						{#each webLines.slice(0, 5) as line, index}
							<div
								class="h-2 sm:h-2.5 {line.width} rounded-full bg-gray-200 transition-all duration-500 {line.delay}"
								class:bg-red-200={lineAnimation}
							></div>
						{/each}
						<div
							class="flex h-8 w-full items-center justify-center rounded border border-red-100 bg-red-50 sm:h-10"
						>
							<span class="text-xs font-medium text-red-600">Formatted Content</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Screenshot Output -->
			<div
				class="transform transition-all delay-1000 duration-1000 ease-out"
				class:opacity-100={lineAnimation}
				class:translate-x-0={lineAnimation}
				class:translate-y-0={lineAnimation}
				class:opacity-0={!lineAnimation}
				class:translate-x-8={!lineAnimation}
				class:translate-y-4={!lineAnimation}
			>
				<div
					class="w-60 overflow-hidden rounded-xl border border-green-200 bg-white shadow-xl sm:w-56 lg:w-64"
				>
					<div class="border-b border-green-100 bg-green-50 px-3 py-2 sm:px-4 sm:py-3">
						<div class="flex items-center justify-between">
							<div class="flex items-center space-x-1.5 sm:space-x-2">
								<div class="flex h-6 w-6 items-center justify-center rounded bg-green-500 sm:h-8 sm:w-8">
									<span class="text-xs font-bold text-white">PNG</span>
								</div>
								<span class="text-xs font-medium text-green-700 sm:text-sm">screenshot.png</span>
							</div>
							<span class="text-xs text-green-400">1.2 MB</span>
						</div>
					</div>
					<div class="p-2.5 sm:p-3">
						<div class="overflow-hidden rounded-lg border border-green-100">
							<div class="h-2.5 w-full bg-gradient-to-r from-green-100 to-blue-100 sm:h-3"></div>
							<div class="bg-gradient-to-br from-blue-50 to-indigo-100 p-2.5 sm:p-3">
								<div class="mb-1.5 h-3 w-1/2 rounded bg-green-200 sm:mb-2 sm:h-4"></div>
								{#each webLines.slice(0, 4) as line, index}
									<div
										class="h-1.5 sm:h-2 {line.width} mb-1 rounded-full bg-gray-300 transition-all duration-500 {line.delay}"
										class:bg-green-200={lineAnimation}
									></div>
								{/each}
								<div class="mt-1.5 h-4 w-12 rounded bg-green-300 sm:mt-2 sm:h-6 sm:w-16"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Floating animation elements -->
	<div class="pointer-events-none absolute inset-0 hidden sm:block">
		{#each Array(6) as _, i}
			<div
				class="duration-2000 absolute h-1.5 w-1.5 rounded-full bg-blue-400 transition-all delay-300 sm:h-2 sm:w-2"
				class:opacity-60={lineAnimation}
				class:animate-pulse={lineAnimation}
				class:opacity-0={!lineAnimation}
				style="left: {20 + i * 15}%; top: {30 + (i % 3) * 20}%; animation-delay: {i * 0.3}s"
			></div>
		{/each}
	</div>

	<!-- Background glow effects -->
	<div
		class="absolute -inset-2 -z-10 rounded-2xl bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 opacity-60 blur-2xl sm:-inset-4 sm:rounded-3xl sm:blur-3xl"
	></div>
</div>
