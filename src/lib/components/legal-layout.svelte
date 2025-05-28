<script lang="ts">
	export let title: string;
	export let lastUpdated: string;
</script>

<section class="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
	<!-- Subtle decorative elements -->
	<div class="absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/5 to-primary/10 opacity-50 blur-3xl"></div>
	<div class="absolute -left-20 bottom-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-blue-50 to-indigo-100 opacity-40 blur-3xl"></div>
	
	<div class="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
		<div class="mx-auto max-w-4xl">
			<!-- Header -->
			<div class="mb-12 text-center">
				<h1 class="bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text font-display text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
					{title}
				</h1>
				<p class="mt-4 text-sm text-gray-500">Last updated on {lastUpdated}</p>
			</div>
			
			<!-- Content -->
			<div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100 sm:p-8 md:p-10">
				<div class="prose prose-slate max-w-none">
					<slot></slot>
				</div>
			</div>
			
			<!-- Footer -->
			<div class="mt-8 text-center">
				<p class="text-sm text-gray-500">
					If you have any questions about our legal documents, please contact 
					<a href="mailto:legal@luminapdf.xyz" class="text-primary hover:text-primary-dark transition-colors">
						legal@luminapdf.xyz
					</a>
				</p>
			</div>
		</div>
	</div>
</section>
