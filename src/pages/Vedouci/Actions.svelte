<script lang="ts">
	import ActionBox from "../../components/Vedouci/ActionBox.svelte"; // Importuj komponentu ActionBox
	import ActionDeletePopUp from "../../components/Vedouci/ActionDeletePopUp.svelte";
	import Header from "../Header.svelte";
	import { page, selected_camp } from "../../lib/state";
	import { delete_action } from "../../lib/backend";
	import { state } from "@prokopschield/localstorage-state";

	// by Jan Poledna xpoled09
	//from here
	import Contacts from "../../components/Chat/contacts.svelte";
	import Chat from "../../components/Chat/chat.svelte";
	import type { User } from "../../lib/DMs";
	let currentChat: User;
	let collapsedChat: boolean = false;
	let enabled = false;
	function openChat(event: Event) {
		collapsedChat = false;
		collapsedChat = true;
		enabled = true;
		//detail tam existuje lže to xd
		currentChat = event.detail;
	}
	function openChatFromLeaderboard(event: Event) {
		collapsedChat = false;
		collapsedChat = true;
		enabled = true;
		//console.log(event);
		currentChat = {
			id: event.detail.id,
			username: "",
			displayname: event.detail.displayname,
			legal_name: "",
			legal_guardian: "",
			legal_guardian_contact: "",
			email: "",
		};
	}
	//to here

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
			>+</button
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
		<Chat {currentChat} collapsed={collapsedChat} {enabled} />
		<div class="contact-wrap">
			<Contacts on:selected={openChat} />
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
	.contact-wrap {
		position: fixed;
		right: 0px;
		top: 60px;
		height: 800px;
		width: 200px;
	}
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
		right: 200px;
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
