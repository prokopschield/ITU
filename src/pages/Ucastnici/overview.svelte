<script lang="ts">
	// by Jan Poledna xpoled09
	import MoveButton from "../../lib/MoveButton.svelte";
	import Leaderboard from "./leaderboard.svelte";
	import Events from "./events.svelte";
	import Chat from "../Chat/chat.svelte";
	import Contacts from "../Chat/contacts.svelte";
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
</script>

<main>
	<Leaderboard on:selected={openChatFromLeaderboard} />

	<h1>Ucastnici</h1>

	<Events />
	<Chat {currentChat} collapsed={collapsedChat} {enabled} />
	<div class="contact-wrap">
		<Contacts on:selected={openChat} />
	</div>
	<div class="logout">
		<!--<MoveButton destination={"Acountview"} text="Detail Účtu" /><br />-->
		<MoveButton destination={"Auth"} text="Odhlásit se" /><br />
	</div>
</main>

<style>
	.logout {
		position: absolute;
		right: 20px;
		top: 10px;
	}
	.contact-wrap {
		position: absolute;
		right: 0px;
		top: 60px;
		height: 800px;
		width: 200px;
	}
</style>
