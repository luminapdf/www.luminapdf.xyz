<script lang="ts">
	import Twitter from 'lucide-svelte/icons/twitter';
	import Github from 'lucide-svelte/icons/github';
	import Linkedin from 'lucide-svelte/icons/linkedin';
	import Mail from 'lucide-svelte/icons/mail';
</script>

<footer class="bg-gray-900 px-6 py-12 text-gray-300">
	<div class="container mx-auto">
		<div class="grid gap-8 md:grid-cols-4">
			<div>
				<h3 class="mb-4 text-lg font-semibold text-white">LuminaPDF</h3>
				<p class="mb-4 text-sm">Powerful PDF and screenshot API with simple, transparent pricing.</p>
				<div class="flex gap-4">
					<a href="#" class="hover:text-primary"><Twitter size={20} /></a>
					<a href="#" class="hover:text-primary"><Github size={20} /></a>
					<a href="#" class="hover:text-primary"><Linkedin size={20} /></a>
					<a href="#" class="hover:text-primary"><Mail size={20} /></a>
				</div>
			</div>
			<div>
				<h4 class="mb-4 font-semibold text-white">Product</h4>
				<ul class="space-y-2 text-sm">
					<li><a href="#" class="hover:text-primary">Features</a></li>
					<li><a href="#" class="hover:text-primary">Pricing</a></li>
					<li><a href="#" class="hover:text-primary">Documentation</a></li>
					<li><a href="#" class="hover:text-primary">API Reference</a></li>
				</ul>
			</div>
			<div>
				<h4 class="mb-4 font-semibold text-white">Company</h4>
				<ul class="space-y-2 text-sm">
					<li><a href="#" class="hover:text-primary">About</a></li>
					<li><a href="#" class="hover:text-primary">Contact</a></li>
				</ul>
			</div>
			<div>
				<h4 class="mb-4 font-semibold text-white">Legal</h4>
				<ul class="space-y-2 text-sm">
					<li><a href="/legal/privacy-policy" class="hover:text-primary">Privacy Policy</a></li>
					<li><a href="/legal/terms-of-service" class="hover:text-primary">Terms of Service</a></li>
				</ul>
			</div>
		</div>
		<div class="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
			<p>© {new Date().getFullYear()} LuminaPDF. All rights reserved.</p>
		</div>
	</div>
</footer>
