<script lang="ts">
	import Star from 'lucide-svelte/icons/star';

	interface TestimonialCardProps {
		name: string;
		role: string;
		company: string;
		content: string;
		rating: number;
	}

	const { name, role, company, content, rating }: TestimonialCardProps = $props();
</script>

<div class="rounded-2xl bg-white p-8 shadow-lg">
	<div class="mb-4 flex gap-1">
		{#each Array.from({ length: rating }), _}
			<Star size={20} class="fill-primary text-primary" />
		{/each}
	</div>
	<p class="mb-6 text-gray-600">{content}</p>
	<div>
		<p class="font-semibold text-gray-900">{name}</p>
		<p class="text-sm text-gray-600">
			{role}, {company}
		</p>
	</div>
</div>
