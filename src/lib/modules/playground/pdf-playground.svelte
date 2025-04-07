<script lang="ts">
	import { defaults, superForm } from 'sveltekit-superforms';
	import { zod } from 'sveltekit-superforms/adapters';
	import { turnstile } from '@svelte-put/cloudflare-turnstile';
	import { PUBLIC_TURNSTILE_SITE_KEY } from '$env/static/public';
	import { browser } from '$app/environment';

	import { pdfGenerationSchema } from './playground-schema';
	import * as Form from '$lib/components/ui/form';
	import Input from '@/components/ui/input/input.svelte';
	import * as Select from '$lib/components/ui/select/index.js';
	import Button from '@/components/ui/button/button.svelte';
	import { toast } from 'svelte-sonner';

	let loading = $state(false);
	let token = $state('');

	const form = superForm(
		defaults(
			{
				source: '',
				format: 'A4',
				margin: '10mm'
			},
			zod(pdfGenerationSchema)
		),
		{
			SPA: true,
			validators: zod(pdfGenerationSchema),
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
								format: $formData.format,
								margin: $formData.margin,
								token: token,
								type: 'pdf'
							})
						});

						if (!response.ok) {
							const error = await response.json();
							if (response.status === 429) {
								toast.error(`Rate limit exceeded: ${error.message}`);
							} else {
								toast.error(error.error || 'Failed to generate PDF');
							}
							return;
						}

						// Get blob from response
						const blob = await response.blob();

						// filename from source url with extension
						const filename = $formData.source.split('/').pop() + '.pdf';

						// Create download link and trigger download
						const url = URL.createObjectURL(blob);
						const a = document.createElement('a');
						a.href = url;
						a.download = filename;
						document.body.appendChild(a);
						a.click();
						document.body.removeChild(a);
						URL.revokeObjectURL(url);

						toast.success('PDF generated successfully');
						$formData.source = '';
					} catch (error) {
						console.error('Error generating PDF:', error);
						toast.error('Failed to generate PDF');
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
					{...$constraints.source}
					bind:value={$formData.source}
					placeholder="https://example.com"
				/>
			{/snippet}
		</Form.Control>
		<Form.FieldErrors />
	</Form.Field>

	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<Form.Field {form} name="format">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Format</Form.Label>
					<Select.Root type="single" bind:value={$formData.format} name={props.name}>
						<Select.Trigger {...props}>
							{$formData.format ? $formData.format : 'Select a format'}
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="A4" label="A4" />
							<Select.Item value="Letter" label="Letter" />
							<Select.Item value="Legal" label="Legal" />
						</Select.Content>
					</Select.Root>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>

		<Form.Field {form} name="margin">
			<Form.Control>
				{#snippet children({ props })}
					<Form.Label>Margin</Form.Label>
					<Select.Root type="single" bind:value={$formData.margin} name={props.name}>
						<Select.Trigger {...props}>
							{$formData.margin ? $formData.margin : 'Select a margin'}
						</Select.Trigger>
						<Select.Content>
							<Select.Item value="0mm" label="None" />
							<Select.Item value="10mm" label="Small (10mm)" />
							<Select.Item value="20mm" label="Medium (20mm)" />
							<Select.Item value="40mm" label="Large (40mm)" />
						</Select.Content>
					</Select.Root>
				{/snippet}
			</Form.Control>
			<Form.FieldErrors />
		</Form.Field>
	</div>

	<div class="mt-4 flex justify-end">
		<div
			use:turnstile
			turnstile-sitekey={PUBLIC_TURNSTILE_SITE_KEY}
			turnstile-theme="light"
			turnstile-size="normal"
			turnstile-language="en"
			turnstile-response-field-name="token"
			turnstile-response-field
			onturnstile={(e) => (token = e.detail.token)}
		></div>
	</div>

	<Button type="submit" disabled={!token || loading} {loading} class="mt-5 w-full">Generate PDF</Button>
</form>
