<script lang="ts">
	import { state } from "@prokopschield/localstorage-state";
	import { backend } from "../../lib/backend";

	//backend.get_attendees(state.selected_camp.value);
	//backend.get_actions(state.selected_camp.value);
	export let attendees: { id: number; name: string }[] = [
		{ id: 1, name: "Děcko" },
		{ id: 1, name: "Děcko" },
	];
	export let actions: string[] = ["Akce 1", "Akce 1", "Akce 1"];
	let tableData: { name: string; score: number[] }[] = initializeTableData();

	function initializeTableData(): { name: string; score: number[] }[] {
		return attendees.map((attendee) => ({
			name: attendee.name,
			score: actions.map(() => 0), // Počáteční body pro každou akci jsou 0
		}));
	}

	function updateScore(
		childIndex: number,
		actionIndex: number,
		value: number,
	) {
		tableData[childIndex].score[actionIndex] = value;
	}

	function calculateRowTotal(score: number[]): number {
		return score.reduce((acc, val) => acc + val, 0);
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
		{#each tableData as { name, score }, childIndex}
			<tr>
				<td>{name}</td>
				{#each score as point, actionIndex}
					<td>
						<input
							type="number"
							bind:value={point}
							on:input={() =>
								updateScore(childIndex, actionIndex, +point)}
							class="input-large"
						/>
					</td>
				{/each}
				<td>{calculateRowTotal(score)}</td>
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
