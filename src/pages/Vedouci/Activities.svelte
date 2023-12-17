<script lang="ts">
	import ActivityBox from "../../components/Vedouci/ActivityBox.svelte"; // Importuj komponentu ActivityBox
	import ActivityDeletePopUp from "../../components/Vedouci/ActivityDeletePopUp.svelte";
	import Header from "../Header.svelte";
	import { page, selected_camp } from "../../lib/state";
	import {
		delete_activity,
		get_activities,
		get_leader_points_table,
		leader_delete_activity,
	} from "../../lib/backend";
	import { state } from "@prokopschield/localstorage-state";

	// by Jan Poledna xpoled09
	//from here
	import Contacts from "../../components/Chat/contacts.svelte";
	import Chat from "../../components/Chat/chat.svelte";
	import type { User } from "../../lib/DMs";
	import { onMount } from "svelte";
	import type { real } from "@prokopschield/complex";
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
	//to here

	let popupOpened = false;
	let activityToDelete: number;

	export let activities: {
		id: real;
		name: string;
		description: string;
		points: number;
		attended: {
			score: number;
			attendee: {
				id: real;
				user: {
					displayname: string;
				};
			};
		}[];
	}[] = [];

	let searchQuery = "";

	onMount(async () => {
		activities = (await get_leader_points_table(state.selected_camp.value))
			.activities;
	});
</script>

<main id="main">
	<header id="header">
		<Header />
	</header>

	<main>
		<button
			id="plusButton"
			on:click={() => {
				state.add_activity.value = true;
				page.set("VedouciEditActivity");
			}}>+</button
		>
		<input bind:value={searchQuery} id="search" placeholder="Vyhledávání" />

		<div id="activity-list">
			{#each activities.filter((activity) => activity.name
					.toLowerCase()
					.includes(searchQuery.toLowerCase())) as filteredActivity}
				<ActivityBox
					activityName={filteredActivity.name}
					id={filteredActivity.id}
					description={filteredActivity.description}
					maxPoints={filteredActivity.points}
					on:remove={(event) => {
						leader_delete_activity(event.detail);
					}}
				/>
			{/each}
		</div>
		<Chat {currentChat} collapsed={collapsedChat} {enabled} />
		<div class="contact-wrap">
			<Contacts on:selected={openChat} />
		</div>
	</main>

	<ActivityDeletePopUp
		isOpen={popupOpened}
		onConfirm={() => {
			popupOpened = false;
			delete_activity(state.selected_camp.value, activityToDelete);
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
		top: 49px;
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

	#activity-list {
		overflow-y: auto;
		max-height: calc(100% - 40px);
		margin: 0 auto;
	}
</style>
