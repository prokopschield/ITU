<script lang="ts">
	export let children: string[] = ["Díte 1", "Díte 1", "Díte 3"];
	export let actions: string[] = ["Akce 1", "Akce 1", "Akce 1"];
	let tableData: { name: string; points: number[] }[] = initializeTableData();

	function initializeTableData(): { name: string; points: number[] }[] {
		return children.map((child) => ({
			name: child,
			points: actions.map(() => 0), // Počáteční body pro každou akci jsou 0
		}));
	}

	function updatePoints(
		childIndex: number,
		actionIndex: number,
		value: number,
	) {
		tableData[childIndex].points[actionIndex] = value;
	}

	function calculateRowTotal(points: number[]): number {
		return points.reduce((acc, val) => acc + val, 0);
	}
</script>

<table>
	<thead>
		<tr>
			<th>Name</th>
			{#each actions as action}
				<th>{action}</th>
			{/each}
			<th>Total</th>
		</tr>
	</thead>
	<tbody>
		{#each tableData as { name, points }, childIndex}
			<tr>
				<td>{name}</td>
				{#each points as point, actionIndex}
					<td>
						<input
							type="number"
							bind:value={point}
							on:input={() =>
								updatePoints(childIndex, actionIndex, +point)}
							class="input-large"
						/>
					</td>
				{/each}
				<td>{calculateRowTotal(points)}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	/* Styly pro tabulku, můžete upravit podle potřeby */
	table {
		width: 100%;
		border-collapse: collapse;
		margin: 10px 0;
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: left;
	}

	th {
		background-color: light dark;
	}

	tr:hover {
		background-color: rgb(46, 46, 46);
	}

	.input-large {
		font-size: 18px;
		width: 100%;
		min-width: 55px;
	}
</style>
