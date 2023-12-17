<script lang="ts">
	export let data: { name: string; points: number; comment: string }[] = [];

	function handleBodyChange(index: number, event: Event) {
		const target = event.currentTarget as HTMLInputElement;
		data[index].points = parseInt(target.value, 10);
	}
</script>

<table>
	<thead>
		<tr>
			<th>Jméno</th>
			<th class="column1">Body</th>
		</tr>
	</thead>
	<tbody>
		{#each data as record, index}
			<tr>
				<td>{record.name}</td>
				<td class="column1">
					<input
						type="number"
						bind:value={record.points}
						on:input={(e) => handleBodyChange(index, e)}
					/>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
		margin: 10px 0;
	}

	th {
		padding: 8px;
		background-color: light dark;
	}

	td {
		padding: 6px;
	}

	td input {
		width: 100%;
		margin: 0; /* Ostranění mezery kolem inputu */
		box-sizing: border-box; /* Zahrnutí okraje do celkové šířky */
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: left;
	}

	tr:hover {
		background-color: rgb(46, 46, 46);
	}

	input {
		font-size: larger;
	}

	.column1 {
		width: 100px;
	}
</style>
