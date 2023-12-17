<!--
	Tomáš Pařízek
-->
<script lang="ts">
	import type { real } from "@prokopschield/complex";
	import { onMount } from "svelte";
	import { createEventDispatcher } from "svelte";
	import { state } from "@prokopschield/localstorage-state";
	import { get_leaderboard } from "../../lib/backend";

	const dispatch = createEventDispatcher();

	let sortColumn: String | undefined = undefined;
	let sortDirection = false; // descending

	function sortBy(column: String) {
		if (sortColumn === column) {
			// Otočení směru řazení
			sortDirection = !sortDirection;
		} else {
			sortColumn = column;
			sortDirection = false;
		}

		let icon = sortDirection
			? "fa-solid fa-sort-down"
			: "fa-solid fa-sort-up";
		if (sortColumn === "name") {
			document.getElementById("nameIcon")!.className = icon;
			document.getElementById("pointsIcon")!.className =
				"fa-solid fa-sort";
		} else {
			document.getElementById("nameIcon")!.className = "fa-solid fa-sort";
			document.getElementById("pointsIcon")!.className = icon;
		}

		leaderboard = leaderboard.sort((a, b) => {
			const aValue = column === "name" ? a.displayname : a.points;
			const bValue = column === "name" ? b.displayname : b.points;

			if (sortDirection) {
				return aValue > bValue ? 1 : -1;
			} else {
				return aValue < bValue ? 1 : -1;
			}
		});
	}

	let leaderboard: {
		id: real;
		displayname: string;
		points: number;
	}[] = [];

	onMount(async () => {
		sortBy("name");
		const { attendees } = await get_leaderboard(state.selected_camp.value);

		leaderboard = attendees;
	});
</script>

<table id="table">
	<thead>
		<th class="column0 sortable-header" on:click={() => sortBy("name")}>
			<span>Jméno</span>
			<span><i class="fa-solid fa-sort" id="nameIcon"></i></span>
		</th>
		<th class="column2 sortable-header" on:click={() => sortBy("points")}>
			<span>Body</span>
			<span><i class="fa-solid fa-sort" id="pointsIcon"></i></span>
		</th>
		<th class="column3"></th>
	</thead>
	<tbody>
		{#each leaderboard as { id, displayname, points }}
			<tr class="item">
				<td class="column0">{displayname}</td>
				<td class="column2">{points}</td>
				<td class="column3">
					<button
						on:click={() => dispatch("chat", { id, displayname })}
					>
						<i class="fa-regular fa-comment"></i>
					</button>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	#table {
		position: relative;
		top: 65px;
		width: 100%;
	}

	/*.column0 {
	    width: calc(100% - 90px);
	}*/
	.column2 {
		width: 100px;
	}
	.column3 {
		width: 55px;
	}

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

	.sortable-header {
		cursor: default;
	}

	.sortable-header:hover {
		cursor: pointer;
	}
</style>
