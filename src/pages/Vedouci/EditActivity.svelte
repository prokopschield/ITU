<script lang="ts">
	import { onMount } from "svelte";
	import Header from "../Header.svelte";
	import PointTable from "./PointTable.svelte";
	import { state, store } from "@prokopschield/localstorage-state";
	import { backend } from "../../lib/backend";
	import { selected_camp } from "../../lib/state";

	type Activity = {
		id: number;
		name: string;
		description: string;
		points: number;
	};

	let activity: Activity = {
		id: 0,
		name: "",
		description: "",
		points: 0,
	};

	let new_activity_points: string | number = "";

	const add_activity = store<boolean>("add_activity");
	const selected_activity = store<Activity>("selected_activity");

	selected_activity.subscribe((new_activity) => (activity = new_activity));

	add_activity.subscribe((new_value) => {
		if (new_value) {
			activity = {
				id: 0,
				name: "",
				description: "",
				points: 0,
			};
		} else {
			activity = selected_activity.value;
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
				{#if !$add_activity}
					<td>
						<input
							placeholder="Maximum bodů"
							type="number"
							min="0"
							bind:value={activity.points}
						/></td
					>
				{/if}
				{#if $add_activity}
					<td>
						<input
							placeholder="Maximum bodů"
							type="number"
							min="0"
							bind:value={new_activity_points}
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
					<input
						type="submit"
						on:click={async () => {
							if (add_activity.value) {
								Object.assign(
									activity,
									await backend.leader_create_activity(
										Number(state.selected_camp.value),
										String(activity.name),
										String(activity.description),
										Number(new_activity_points),
									),
								);
							} else {
								Object.assign(
									activity,
									await backend.leader_edit_activity(
										Number(activity.id),
										String(activity.name),
										String(activity.description),
										Number(activity.points),
									),
								);
							}

							selected_activity.set(activity);
							add_activity.set(false);
						}}
					/>
				</td>
			</tr>
		</table>
	</div>
	<div id="lower-div">
		<PointTable activityId={activity.id} />
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
