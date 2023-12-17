<script lang="ts">
	import ActionBox from "../../components/Vedouci/ActionBox.svelte"; // Importuj komponentu ActionBox
	import ActionDeletePopUp from "../../components/Vedouci/ActionDeletePopUp.svelte";
	import Header from "../Header.svelte";
	import { page, selected_camp } from "../../lib/state";
	import { delete_action } from "../../lib/backend";
	import { state } from "@prokopschield/localstorage-state";

	let popupOpened = false;
	let actionToDelete: number;

	export let actions: { id: number; name: string; dateTime: Date }[] = [
		{ id: 1, name: "Akce", dateTime: new Date(2023, 12, 31) },
	];

	let searchQuery = "";
</script>

<main id="main">
	<header id="header">
		<Header />
	</header>

	<main>
		<button id="plusButton" on:click={() => page.set("VedouciEditAction")}
			><img alt="+" /></button
		>
		<input bind:value={searchQuery} id="search" placeholder="Vyhledávání" />

		<div id="action-list">
			{#each actions.filter((action) => action.name
					.toLowerCase()
					.includes(searchQuery.toLowerCase())) as filteredAction}
				<ActionBox
					dateTime={filteredAction.dateTime}
					actionName={filteredAction.name}
					id={filteredAction.id}
					on:remove={(event) => {
						actionToDelete = event.detail;
					}}
				/>
			{/each}
		</div>
	</main>

	<ActionDeletePopUp
		isOpen={popupOpened}
		onConfirm={() => {
			popupOpened = false;
			delete_action(state.selected_camp.value, actionToDelete);
		}}
		onCancel={() => {
			popupOpened = false;
		}}
	/>
</main>

<style>
	#search {
		margin: 8px;
		width: calc(100% - 70px);
		position: relative;
		left: 25px;
		font-size: 25px;
		border-radius: 10px;
		border: none;
		text-align: center;
	}

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

	#main main {
		position: absolute;
		left: 0;
		right: 0;
		top: 40px;
		bottom: 0;
	}

	#plusButton {
		position: absolute;
		left: 5px;
		top: 4px;
	}

	#action-list {
		overflow-y: auto;
		max-height: calc(100% - 40px);
		margin: 0 auto;
	}
</style>
