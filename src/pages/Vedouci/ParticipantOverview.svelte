<script lang="ts">
	import { page } from "../../lib/state";
	import Header from "../Header.svelte";
	import OverviewTable from "./OverviewTable.svelte";
	import { state } from "@prokopschield/localstorage-state";

	// by Jan Poledna xpoled09
	//from here
	import type { User } from "../../lib/DMs";
	import Chat from "../Chat/chat.svelte";
	import { delete_participant } from "../../lib/backend";
	let currentChat: User;
	let collapsedChat: boolean = false;
	let enabled = false;
	function openChat(event: Event) {
		collapsedChat = false;
		collapsedChat = true;
		enabled = true;
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
</script>

<main id="main">
	<main id="inner-main">
		<OverviewTable on:chat={openChat} />
		<Chat {currentChat} collapsed={collapsedChat} {enabled} />
	</main>

	<header id="header">
		<Header />
	</header>
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

	#inner-main {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		overflow-y: auto;
	}
</style>
