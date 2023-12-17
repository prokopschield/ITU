<script lang="ts">
	import { onMount } from "svelte";
	import Header from "../Header.svelte";
	import PointTable from "./PointTable.svelte";
	import { state } from "@prokopschield/localstorage-state";

	let activity: { name: string; description: string; points: number } = {
		name: "",
		description: "",
		points: 0,
	};

	onMount(() => {
		if (!state.add_activity.value) {
			console.log("Volá se to");
			activity = state.selected_activity.value;
			console.log(activity);
		}
	});
</script>

<main id="main">
	<header id="header">
		<Header />
	</header>
	<div id="upper-div">
		<table id="settings">
			<tr>
				<td><input placeholder="Jméno" bind:value={activity.name} /></td
				>
				{#if !state.add_activity.value}
					<td>
						<input
							placeholder="Maximum bodů"
							type="number"
							min="0"
							bind:value={activity.points}
						/></td
					>
				{/if}
				{#if state.add_activity.value}
					<td>
						<input
							placeholder="Maximum bodů"
							type="number"
							min="0"
						/></td
					>
				{/if}
			</tr>
			<tr>
				<td>
					<input
						placeholder="Popis"
						bind:value={activity.description}
					/>
				</td>
				<td>
					<input type="submit" />
				</td>
			</tr>
		</table>
	</div>
	<div id="lower-div">
		<PointTable />
	</div>
</main>

<style>
	#main {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	#main #header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}

	#upper-div {
		position: absolute;
		left: 0;
		right: 0;
		top: 40px;
		bottom: calc(100% - 200px);
		margin: 0;
		margin-top: 10px;
	}

	#settings {
		position: absolute;
		width: 100%;
		padding: 8px;
		/*border: 1px solid #ddd;*/
	}

	#upper-div #settings {
		position: absolute;
		width: 100%;
	}

	#upper-div #settings input:not([type]),
	#upper-div #settings input[type="number"] {
		width: calc(100% - 16px);
		height: 100%;
		font-size: 25px;
	}

	#upper-div #settings input[type="submit"] {
		width: calc(100% - 8px);
		height: 100%;
		font-size: 25px;
	}

	#lower-div {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 160px;
		max-height: calc(100% - 160px);
		overflow-y: auto;
	}
</style>
