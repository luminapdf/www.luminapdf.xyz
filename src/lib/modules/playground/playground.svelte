<script lang="ts">
	import FileJson from 'lucide-svelte/icons/file-json';
	import Camera from 'lucide-svelte/icons/camera';

	import { Chip } from '../../components/ui/chip';
	import * as Tabs from '$lib/components/ui/tabs/index.js';
	import PdfPlayground from './pdf-playground.svelte';
	import ScreenshotPlayground from './screenshot-playground.svelte';
</script>

<div class="rounded-xl bg-white p-6 shadow-lg">
	<Chip class="mb-4">Try It Yourself</Chip>
	<h2 class="mb-6 text-2xl font-bold text-gray-900">Playground</h2>

	<Tabs.Root value="pdf">
		<div class="mb-6">
			<Tabs.List class="flex space-x-8 border-b border-gray-200 bg-transparent">
				<Tabs.Trigger
					value="pdf"
					class="group border-b-2 border-transparent pb-2 data-[state=active]:border-primary data-[state=active]:text-primary"
				>
					<div class="flex items-center gap-2">
						<FileJson size={18} class="group-data-[state=active]:text-primary" />
						Generate PDF
					</div>
				</Tabs.Trigger>
				<Tabs.Trigger
					value="screenshot"
					class="group border-b-2 border-transparent pb-2 data-[state=active]:border-primary data-[state=active]:text-primary"
				>
					<div class="flex items-center gap-2">
						<Camera size={18} class="group-data-[state=active]:text-primary" />
						Capture Screenshot
					</div>
				</Tabs.Trigger>
			</Tabs.List>
		</div>

		<Tabs.Content value="pdf" class="space-y-4">
			<PdfPlayground />
		</Tabs.Content>

		<Tabs.Content value="screenshot" class="space-y-4">
			<ScreenshotPlayground />
		</Tabs.Content>
	</Tabs.Root>
</div>
