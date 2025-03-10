<script lang="ts">
	import FileJson from 'lucide-svelte/icons/file-json';
	import Camera from 'lucide-svelte/icons/camera';

	import { Chip } from './ui/chip';
	import * as Tabs from '$lib/components/ui/tabs/index.js';

	let activeTab = $state('pdf');
	let loading = $state(false);
	let error = $state('');
	let url = $state('');
	let result = $state('');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		loading = true;
		error = '';

		try {
			// In a real app, this would make an actual API call
			// For demo purposes, we'll simulate a response after a delay
			await new Promise((resolve) => setTimeout(resolve, 1500));

			if (!url || !url.startsWith('http')) {
				throw new Error('Please enter a valid URL starting with http:// or https://');
			}

			// Mock response - in production this would be the actual PDF or screenshot
			const mockResponse =
				activeTab === 'pdf'
					? 'data:application/pdf;base64,JVBERi0xLjcKJb/3ov4KMiAwIG9iago8PCAvTGluZWFyaXplZCAxIC9MIDEyMjkyIC9IIFsgNjg4IDEyNiBdIC9PIDIgL0UgMTIwMTcgL04gMSAvVCAxMjAxNiA+PgplbmRvYmo='
					: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAABLFBMVEX///8AAAD+/v4EBAT8/Pz29vb5+fns7Oz09PTy8vLw8PDc3Nzp6enR0dFnZ2dXV1etra2+vr6WlpaOjo63t7fa2tqgoKDi4uK6urqnp6d0dHRJSUlQUFDLy8uEhIRCQkJ8fHwxMTEoKCgwMDAiIiIbGxtgYGASEhI7OzsbGOEbGAkcGSQ4ODhxcXFiYmIVFRXw+vbDw8Ps8e+OjM05Ni43NBXS3th5hXyWnMVVYld2gXm+wNYlIQUMAAbHx985NiaWnZpHRClbVzSIj5NzdFxXVkFkZE0tKxA/PilkbGaJiHllY0NOS1Cxt7RzgHdOTTZqcW5JUk0sIi6an6mEg26QjnXU3NuepqNLRC1OVlNIQDovKB0pHiJbXGeAhpBrb3ufpKlWUFcfEgi=';

			result = mockResponse;
		} catch (err) {
			error = err instanceof Error ? err.message : 'An unknown error occurred';
		} finally {
			loading = false;
		}
	}
</script>

<div class="rounded-xl bg-white p-6 shadow-lg">
	<Chip class="mb-4">Try It Yourself</Chip>
	<h2 class="mb-6 text-2xl font-bold text-gray-900">Playground</h2>

	<Tabs.Root value={activeTab} onValueChange={(val) => (activeTab = val)}>
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

		<form onsubmit={handleSubmit} class="space-y-6">
			<div>
				<label for="url" class="mb-2 block text-sm font-medium text-gray-700"> Enter a URL </label>
				<input
					type="url"
					id="url"
					bind:value={url}
					class="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
					placeholder="https://example.com"
					required
				/>
			</div>

			<Tabs.Content value="pdf" class="space-y-4">
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div>
						<label for="pdf-format" class="mb-2 block text-sm font-medium text-gray-700"> Format </label>
						<select
							id="pdf-format"
							class="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
						>
							<option value="A4">A4</option>
							<option value="Letter">Letter</option>
							<option value="Legal">Legal</option>
						</select>
					</div>
					<div>
						<label for="pdf-margin" class="mb-2 block text-sm font-medium text-gray-700"> Margin </label>
						<select
							id="pdf-margin"
							class="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
						>
							<option value="0px">None</option>
							<option value="10px">Small (10px)</option>
							<option value="20px">Medium (20px)</option>
							<option value="40px">Large (40px)</option>
						</select>
					</div>
				</div>
			</Tabs.Content>

			<Tabs.Content value="screenshot" class="space-y-4">
				<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
					<div>
						<label for="screenshot-width" class="mb-2 block text-sm font-medium text-gray-700">
							Width (px)
						</label>
						<input
							type="number"
							id="screenshot-width"
							defaultValue={1920}
							min={100}
							max={3840}
							class="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
						/>
					</div>
					<div>
						<label for="screenshot-height" class="mb-2 block text-sm font-medium text-gray-700">
							Height (px)
						</label>
						<input
							type="number"
							id="screenshot-height"
							defaultValue={1080}
							min={100}
							max={2160}
							class="w-full rounded-lg border border-gray-300 p-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
						/>
					</div>
					<div class="flex items-end">
						<label class="flex items-center space-x-2">
							<input
								type="checkbox"
								id="fullPage"
								defaultChecked
								class="rounded border-gray-300 text-primary focus:ring-primary"
							/>
							<span class="text-sm font-medium text-gray-700">Capture full page</span>
						</label>
					</div>
				</div>
			</Tabs.Content>

			<div>
				<button
					type="submit"
					disabled={loading}
					class="inline-flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:bg-primary-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70"
				>
					{activeTab === 'pdf' ? 'Generate PDF' : 'Capture Screenshot'}
				</button>
			</div>
		</form>
	</Tabs.Root>
</div>
