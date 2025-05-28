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

<div class="relative mx-auto max-w-6xl p-8">
	<!-- Main transformation flow -->
	<div class="relative z-10 flex items-center justify-center gap-16">
		<!-- Source HTML/Web Content -->
		<div
			class="relative transform transition-all duration-1000 ease-out"
			class:opacity-100={visible}
			class:translate-y-0={visible}
			class:opacity-0={!visible}
			class:translate-y-8={!visible}
		>
			<div class="relative">
				<!-- Browser window mockup -->
				<div class="w-80 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl">
					<!-- Browser header -->
					<div class="flex items-center justify-between border-b border-gray-200 bg-gray-100 px-4 py-3">
						<div class="flex items-center space-x-2">
							<div class="h-3 w-3 rounded-full bg-red-400"></div>
							<div class="h-3 w-3 rounded-full bg-yellow-400"></div>
							<div class="h-3 w-3 rounded-full bg-green-400"></div>
						</div>
						<div class="mx-4 flex-1">
							<div class="rounded-full border bg-white px-3 py-1 text-xs text-gray-500">
								https://example.com
							</div>
						</div>
						<div class="h-4 w-6 rounded bg-gray-300"></div>
					</div>

					<!-- Web content -->
					<div class="min-h-[300px] bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
						<div class="space-y-4">
							<!-- Header -->
							<div class="h-8 w-2/3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 shadow-sm"></div>

							<!-- Content lines with animation -->
							<div class="space-y-3">
								{#each webLines as line, index}
									<div
										class="h-3 {line.width} rounded-full bg-gray-300 transition-all duration-700 ease-out {line.delay}"
										class:transform={lineAnimation}
										class:scale-x-110={lineAnimation}
										class:bg-blue-200={lineAnimation}
									></div>
								{/each}
							</div>

							<!-- Interactive elements -->
							<div class="mt-6 space-y-3">
								<div
									class="flex h-12 w-full items-center justify-center rounded-lg border-2 border-dashed border-blue-300 bg-white"
								>
									<div class="text-xs font-medium text-blue-500">Interactive Content</div>
								</div>
								<div class="flex space-x-2">
									<div class="h-8 w-20 rounded bg-blue-500 shadow-sm"></div>
									<div class="h-8 w-16 rounded bg-gray-300"></div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- HTML/CSS indicators -->
				<div
					class="absolute -right-4 -top-4 transition-all delay-700 duration-1000"
					class:opacity-100={visible}
					class:scale-100={visible}
					class:opacity-0={!visible}
					class:scale-75={!visible}
				>
					<div class="rounded-full bg-orange-500 px-2 py-1 text-xs font-bold text-white shadow-lg">HTML</div>
				</div>
				<div
					class="absolute -bottom-4 -left-4 transition-all delay-1000 duration-1000"
					class:opacity-100={visible}
					class:scale-100={visible}
					class:opacity-0={!visible}
					class:scale-75={!visible}
				>
					<div class="rounded-full bg-blue-500 px-2 py-1 text-xs font-bold text-white shadow-lg">CSS</div>
				</div>
			</div>
		</div>

		<!-- Transformation arrows and splitting effect -->
		<div class="flex flex-col items-center space-y-8">
			<!-- Main arrow -->
			<div
				class="transition-all delay-1000 duration-1000"
				class:opacity-100={visible}
				class:scale-100={visible}
				class:opacity-0={!visible}
				class:scale-75={!visible}
			>
				<div class="flex items-center">
					<div class="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-purple-500"></div>
					<div class="h-4 w-4 rotate-45 transform border-r-2 border-t-2 border-purple-500"></div>
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
					class="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-sm font-bold text-white shadow-lg"
				>
					LuminaPDF
				</div>
			</div>

			<!-- Split arrows -->
			<div
				class="flex flex-col space-y-4 transition-all delay-1000 duration-1000"
				class:opacity-100={lineAnimation}
				class:scale-100={lineAnimation}
				class:opacity-0={!lineAnimation}
				class:scale-75={!lineAnimation}
			>
				<!-- To PDF arrow -->
				<div class="flex -rotate-12 transform items-center">
					<div class="h-0.5 w-8 bg-gradient-to-r from-red-400 to-red-600"></div>
					<div class="h-3 w-3 rotate-45 transform border-r-2 border-t-2 border-red-600"></div>
				</div>
				<!-- To Screenshot arrow -->
				<div class="flex rotate-12 transform items-center">
					<div class="h-0.5 w-8 bg-gradient-to-r from-green-400 to-green-600"></div>
					<div class="h-3 w-3 rotate-45 transform border-r-2 border-t-2 border-green-600"></div>
				</div>
			</div>
		</div>

		<!-- Output formats -->
		<div class="flex flex-col space-y-8">
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
				<div class="w-64 overflow-hidden rounded-xl border border-red-200 bg-white shadow-xl">
					<div class="border-b border-red-100 bg-red-50 px-4 py-3">
						<div class="flex items-center justify-between">
							<div class="flex items-center space-x-2">
								<div class="flex h-8 w-8 items-center justify-center rounded bg-red-500">
									<span class="text-xs font-bold text-white">PDF</span>
								</div>
								<span class="text-sm font-medium text-red-700">document.pdf</span>
							</div>
							<span class="text-xs text-red-400">2.4 MB</span>
						</div>
					</div>
					<div class="space-y-3 p-4">
						<div class="h-6 w-2/3 rounded bg-red-100"></div>
						{#each webLines.slice(0, 5) as line, index}
							<div
								class="h-2.5 {line.width} rounded-full bg-gray-200 transition-all duration-500 {line.delay}"
								class:bg-red-200={lineAnimation}
							></div>
						{/each}
						<div class="flex h-10 w-full items-center justify-center rounded border border-red-100 bg-red-50">
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
				<div class="w-64 overflow-hidden rounded-xl border border-green-200 bg-white shadow-xl">
					<div class="border-b border-green-100 bg-green-50 px-4 py-3">
						<div class="flex items-center justify-between">
							<div class="flex items-center space-x-2">
								<div class="flex h-8 w-8 items-center justify-center rounded bg-green-500">
									<span class="text-xs font-bold text-white">PNG</span>
								</div>
								<span class="text-sm font-medium text-green-700">screenshot.png</span>
							</div>
							<span class="text-xs text-green-400">1.2 MB</span>
						</div>
					</div>
					<div class="p-3">
						<div class="overflow-hidden rounded-lg border border-green-100">
							<div class="h-3 w-full bg-gradient-to-r from-green-100 to-blue-100"></div>
							<div class="bg-gradient-to-br from-blue-50 to-indigo-100 p-3">
								<div class="mb-2 h-4 w-1/2 rounded bg-green-200"></div>
								{#each webLines.slice(0, 4) as line, index}
									<div
										class="h-2 {line.width} mb-1 rounded-full bg-gray-300 transition-all duration-500 {line.delay}"
										class:bg-green-200={lineAnimation}
									></div>
								{/each}
								<div class="mt-2 h-6 w-16 rounded bg-green-300"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Floating animation elements -->
	<div class="pointer-events-none absolute inset-0">
		{#each Array(6) as _, i}
			<div
				class="duration-2000 absolute h-2 w-2 rounded-full bg-blue-400 transition-all delay-300"
				class:opacity-60={lineAnimation}
				class:animate-pulse={lineAnimation}
				class:opacity-0={!lineAnimation}
				style="left: {20 + i * 15}%; top: {30 + (i % 3) * 20}%; animation-delay: {i * 0.3}s"
			></div>
		{/each}
	</div>

	<!-- Background glow effects -->
	<div
		class="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 opacity-60 blur-3xl"
	></div>
</div>
