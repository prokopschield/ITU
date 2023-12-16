<script lang="ts">
	import MoveButton from "../../lib/MoveButton.svelte";
	import Leaderboard from "./leaderboard.svelte";
	import Events from "./events.svelte";
	import Chat from "../Chat/chat.svelte";
	import Contacts from "../Chat/contacts.svelte";
	import type { User } from "../../lib/DMs";

	let currentChat:User;
	let collapsedChat:boolean = false;
	let enabled = false;
	function openChat(event:Event){
		collapsedChat = false;
		collapsedChat = true;
		enabled = true;
		//detail tam existuje lže to xd
		currentChat = event.detail;
	}
</script>

<main>
	
	<Leaderboard />
	
	<h1>Ucastnici</h1>

	<Events />
	<Chat currentChat = {currentChat} collapsed = {collapsedChat} enabled = {enabled}/>
	<div class="contact-wrap">
		<Contacts on:selected = {openChat}/>
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
	.contact-wrap{
        position: absolute;
		right: 0px;
		top: 60px;
		height: 800px;
		width: 200px;
    }
</style>
