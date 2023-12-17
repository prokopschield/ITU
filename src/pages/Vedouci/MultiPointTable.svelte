<script lang="ts">
	import type { real } from "@prokopschield/complex";
	import { state } from "@prokopschield/localstorage-state";
	import { get_leader_points_table } from "../../lib/backend";
	import { onMount } from "svelte";

	let attendees: ({ id: real; user: { displayname: string } } & {
		score: Record<string | number | symbol, number>;
		getScore(activity: real): number;
		setScore(activity: real, score: number): Promise<any>;
	})[] = [];

	let actions: {
		id: real;
		name: string;
		attended: {
			score: number;
			attendee: { id: real; user: { displayname: string } };
		}[];
	}[] = [];

	let tableData: {
		attendees: ({ id: real; user: { displayname: string } } & {
			score: Record<string | number | symbol, number>;
			getScore(activity: real): number;
			setScore(activity: real, score: number): Promise<any>;
		})[];
		activities: {
			id: real;
			name: string;
			attended: {
				score: number;
				attendee: { id: real; user: { displayname: string } };
			}[];
		}[];
	};

	onMount(async () => {
		tableData = await get_leader_points_table(state.selected_camp.value);
		attendees = tableData.attendees;
		actions = tableData.activities;
	});
</script>

<table>
	<thead>
		<tr>
			<th>Name</th>
			{#each actions as action}
				<th>{action.name}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each attendees as attendee}
			<tr>
				<td>{attendee.user.displayname}</td>
				{#each actions as action}
					<td>
						<input
							type="number"
							bind:value={attendee.score[Number(action.id)]}
							class="input-large"
						/>
					</td>
				{/each}
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
