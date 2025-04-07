<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { turnstile } from '@svelte-put/cloudflare-turnstile';
	import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
	import { browser } from '$app/environment';

	import { screenshotGenerationSchema } from './playground-schema';
	import * as Form from '$lib/components/ui/form';
	import Input from '@/components/ui/input/input.svelte';
	import Button from '@/components/ui/button/button.svelte';
	import { Checkbox } from '$lib/components/ui/checkbox/index.js';
	import Label from '@/components/ui/label/label.svelte';
	import { toast } from 'svelte-sonner';

	let loading = $state(false);
	let token = $state('');

	const form = superForm(
		defaults(
			{
				width: 1440,
				height: 900,
				fullPage: false
			},
			zod(screenshotGenerationSchema)
		),
		{
			SPA: true,
			validators: zod(screenshotGenerationSchema),
			resetForm: false,
			onUpdate: async ({ form }) => {
				if (form.valid && browser) {
					try {
						loading = true;

						const response = await fetch('/api/generate', {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({
								source: $formData.source,
								width: $formData.width,
								height: $formData.height,
								fullPage: $formData.fullPage,
								token: token,
								type: 'screenshot'
							})
						});

						if (!response.ok) {
							const error = await response.json();
							if (response.status === 429) {
								toast.error(`Rate limit exceeded: ${error.message}`);
							} else {
								toast.error(error.error || 'Failed to generate screenshot');
							}
							return;
						}

						// Get blob from response
						const blob = await response.blob();

						// Create download link and trigger download
						const url = URL.createObjectURL(blob);
						const a = document.createElement('a');
						a.href = url;
						a.download = 'screenshot.png';
						document.body.appendChild(a);
						a.click();
						document.body.removeChild(a);
						URL.revokeObjectURL(url);

						toast.success('Screenshot generated successfully');
						$formData.source = '';
					} catch (error) {
						console.error('Error generating screenshot:', error);
						toast.error('Failed to generate screenshot');
					} finally {
						loading = false;
					}
				}
			}
		}
	);

	const { form: formData, enhance, constraints } = form;
</script>

<form use:enhance>
	<Form.Field {form} name="source">
		<Form.Control>
			{#snippet children({ props })}
				<Form.Label>Enter a URL</Form.Label>
				<Input
					{...props}
					bind:value={$formData.source}
					placeholder="https://example.com"
					{...$constraints.source}
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-3">
		<Form.Field {form} name="width">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Width (px)</Form.Label>
					<Input
						{...props}
						type="number"
						bind:value={$formData.width}
						min={100}
						max={3840}
						placeholder="1920"
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="height">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Height (px)</Form.Label>
					<Input
						{...props}
						type="number"
						bind:value={$formData.height}
						min={100}
						max={2160}
						placeholder="1080"
					/>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="fullPage">
			<Form.Control>
				{#snippet children({ props })}
					{@const checked = $formData.fullPage}
					<div class="mt-3 flex h-full items-center gap-2">
						<Checkbox {checked} onCheckedChange={() => ($formData.fullPage = !checked)} />
						<Label>Capture full page</Label>
					</div>
				{/snippet}
			</Form.Control>
		</Form.Field>
	</div>

	<div class="mt-4 flex justify-end">
		<div
			use:turnstile
			turnstile-sitekey={PUBLIC_TURNSTILE_SITE_KEY}
			turnstile-theme="auto"
			turnstile-size="normal"
			turnstile-language="en"
			turnstile-response-field-name="token"
			turnstile-response-field
			onturnstile={(e) => (token = e.detail.token)}
		></div>
	</div>

	<Button type="submit" disabled={!token || loading} {loading} class="mt-5 w-full">Capture Screenshot</Button>
</form>
