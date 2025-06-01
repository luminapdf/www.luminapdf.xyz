<script>
	import FileText from 'lucide-svelte/icons/file-text';
	import Receipt from 'lucide-svelte/icons/receipt';
	import Camera from 'lucide-svelte/icons/camera';
	import Handshake from 'lucide-svelte/icons/handshake';
	import Download from 'lucide-svelte/icons/download';
	import Users from 'lucide-svelte/icons/users';
	import { Card } from '$lib/components/ui/card';
</script>

<section class="overflow-hidden bg-white px-4 py-24 sm:px-6 md:py-32 lg:px-8" id="use-cases">
	<div class="container mx-auto max-w-7xl">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
				API Use Cases & Applications
			</h2>
			<p class="mx-auto max-w-2xl text-lg text-gray-600">
				Discover how developers integrate LuminaPDF's API for PDF generation and screenshot capture across
				different applications and workflows.
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
					Automated Report Generation
				</h3>
				<p class="text-gray-600">
					Convert HTML reports and dashboards to PDF automatically. Perfect for financial reports, analytics
					summaries, and business intelligence documents.
				</p>
			</Card>

			<!-- Invoice PDF Generation -->
			<Card class="group overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
				<div
					class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
				>
					<Receipt class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
					Invoice & Receipt Generation
				</h3>
				<p class="text-gray-600">
					Generate professional PDF invoices, receipts, and billing documents from HTML templates. Ideal for
					SaaS billing systems and e-commerce platforms.
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
					Website Screenshot API
				</h3>
				<p class="text-gray-600">
					Capture website screenshots for social media previews, monitoring tools, and portfolio showcases.
					High-resolution images with custom viewports.
				</p>
			</Card>

			<!-- Client Proposals & Contracts -->
			<Card class="group overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
				<div
					class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
				>
					<Handshake class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
					Contract & Proposal PDFs
				</h3>
				<p class="text-gray-600">
					Generate dynamic contracts, proposals, and legal documents from templates. Populate with client data
					and convert to secure PDFs.
				</p>
			</Card>

			<!-- Offline PDF Export for Archives -->
			<Card class="group overflow-hidden p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
				<div
					class="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary"
				>
					<Download class="h-6 w-6" />
				</div>
				<h3 class="mb-2 text-xl font-semibold text-gray-900 transition-colors group-hover:text-primary">
					Document Archival & Export
				</h3>
				<p class="text-gray-600">
					Archive web content and documents as PDFs for compliance, backup, and long-term storage. Ideal for
					legal and regulatory requirements.
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
					Documentation & Collaboration
				</h3>
				<p class="text-gray-600">
					Generate shareable PDF documentation, user manuals, and onboarding materials from markdown or HTML
					content.
				</p>
			</Card>
		</div>
	</div>
</section>
