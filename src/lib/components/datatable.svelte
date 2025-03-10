<script module lang="ts">
	export interface DataTableColumn<T = any> {
		key: string;
		label: string;
		class?: string;
		snippet?: string;
		render?: (row: T, index: number) => string;
		formatter?: (value: any) => string;
	}
</script>

<script lang="ts">
	import { get } from 'lodash-es';
	import * as Table from '$lib/components/ui/table/index.js';

	interface Props {
		columns: DataTableColumn[];
		data: any[];
		caption?: string;
		loading?: boolean;
		[x: string]: any;
	}

	const { caption, data, columns, loading, ...restProps }: Props = $props();
</script>

<Table.Root>
	{#if caption}
		<Table.Caption>{caption}</Table.Caption>
	{/if}
	<Table.Header>
		<Table.Row>
			{#each columns as column}
				<Table.Head class={column.class}>{column.label}</Table.Head>
			{/each}
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#if loading && !data.length}
			<Table.Row>
				{#each columns as column}
					<Table.Cell>Loading...</Table.Cell>
				{/each}
			</Table.Row>
		{:else}
			{#each data || [] as item, index (item?.id)}
				<Table.Row>
					{#each columns as column}
						<Table.Cell>
							{#if column.render}
								{column.render(item, index)}
							{:else if column.snippet}
								{@render restProps?.[column.snippet]?.(item)}
							{:else if column.key && column.formatter}
								{column.formatter(get(item, column.key, '-'))}
							{:else}
								{get(item, column.key, '-')}
							{/if}
						</Table.Cell>
					{/each}
				</Table.Row>
			{/each}
		{/if}
	</Table.Body>
</Table.Root>
