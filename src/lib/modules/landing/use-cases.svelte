<script>
	import FileText from 'lucide-svelte/icons/file-text';
	import Receipt from 'lucide-svelte/icons/receipt';
	import Camera from 'lucide-svelte/icons/camera';
	import Handshake from 'lucide-svelte/icons/handshake';
	import Download from 'lucide-svelte/icons/download';
	import Users from 'lucide-svelte/icons/users';
	import { Card } from '$lib/components/ui/card';
</script>

<section class="overflow-hidden bg-white px-4 py-24 sm:px-6 md:py-32 lg:px-8">
	<div class="container mx-auto max-w-7xl">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Use Cases</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				See how Luminapdf can transform your document workflow across various scenarios
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<!-- Generate Reports -->
			<Card class="group overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
				<div
					class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
				>
					<FileText class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
					Generate Reports
				</h3>
				<p class="text-gray-600">Create polished, shareable PDF reports from structured content.</p>
			</Card>

			<!-- Invoice PDF Generation -->
			<Card class="group overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
				<div
					class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
				>
					<Receipt class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
					Invoice PDF Generation
				</h3>
				<p class="text-gray-600">
					Automatically generate professional invoices in PDF before emailing clients.
				</p>
			</Card>

			<!-- Screenshot Capture for SEO -->
			<Card class="group overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
				<div
					class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
				>
					<Camera class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
					Screenshot Capture for SEO
				</h3>
				<p class="text-gray-600">Capture live document snapshots to use as image content for improved SEO.</p>
			</Card>

			<!-- Client Proposals & Contracts -->
			<Card class="group overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
				<div
					class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
				>
					<Handshake class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
					Client Proposals & Contracts
				</h3>
				<p class="text-gray-600">Build customized PDF proposals and agreements on demand.</p>
			</Card>

			<!-- Offline PDF Export for Archives -->
			<Card class="group overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
				<div
					class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
				>
					<Download class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
					Offline PDF Export for Archives
				</h3>
				<p class="text-gray-600">
					Archive documents by exporting them as standalone PDFs for long-term storage.
				</p>
			</Card>

			<!-- Team Collaboration Snapshots -->
			<Card class="group overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
				<div
					class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
				>
					<Users class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
					Team Collaboration Snapshots
				</h3>
				<p class="text-gray-600">Share annotated document states via PDF for asynchronous collaboration.</p>
			</Card>
		</div>
	</div>
</section>
