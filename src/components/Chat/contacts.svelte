<script lang="ts">
	// by Jan Poledna xpoled09
	import { isEmpty } from "lodash";
	import { interlocutors } from "../../lib/DMs";
	import type { User } from "../../lib/DMs";
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();

	let searchQuery: string = "";
	let contacts: User[] = [];
	interlocutors.subscribe((newContacts) => {
		contacts = newContacts;
		/*contacts = [
			{
				id: 1,
				username: "",
				displayname: "Parez",
				legal_name: "",
				legal_guardian: "",
				legal_guardian_contact: "",
				email: "",
			},
			{
				id: 2,
				username: "",
				displayname: "Prokop",
				legal_name: "",
				legal_guardian: "",
				legal_guardian_contact: "",
				email: "",
			},
			{
				id: 3,
				username: "",
				displayname: "Azmond",
				legal_name: "",
				legal_guardian: "",
				legal_guardian_contact: "",
				email: "",
			},
			{
				id: 4,
				username: "",
				displayname: "pepe",
				legal_name: "",
				legal_guardian: "",
				legal_guardian_contact: "",
				email: "",
			},
		];*/
	});
</script>

<div class="wrap">
	Kontakty
	<button
		on:click={() => {
			console.log(contacts);
			console.log(interlocutors);
		}}
	></button>
	<div class="fake-input">
		<div class="img">
			<i class="fa fa-search" />
		</div>
		<input type="search" placeholder="Hledat.." bind:value={searchQuery} />
	</div>

	{#if !isEmpty(contacts) && contacts.length != 1 && !isEmpty(contacts[0].displayname)}
		{#each contacts.filter((contact) => contact.displayname
				.toLowerCase()
				.includes(searchQuery.toLowerCase())) as contact}
			<button
				class="contact"
				on:click={() => dispatch("selected", contact)}
			>
				{contact.displayname}
			</button>
		{/each}
	{:else}
		Nepodařilo se načíst kontakty
	{/if}
</div>

<style>
	.wrap {
		overflow-x: hidden;
		background-color: #3f3f3f;
		border-radius: 15px;
		width: 100%;
		height: 100%;
	}
	input[type="search"] {
		border: none;
		font-size: 17px;
		border-radius: 10px;
		height: fit-content;
		text-align: center;
		background-color: #222222;
		display: block;
		width: 100%;
		box-sizing: border-box;
		word-wrap: break-word;
		white-space: pre-wrap;
	}
	.img {
		position: absolute;
		align-self: left;
		left: 5px;
	}
	.fake-input {
		top: 5px;
		position: relative;
		width: 90%;
		padding-bottom: 5px;
		left: 5%;
	}
	.contact {
		width: 100%;
		word-wrap: break-word;
		white-space: pre-wrap;
		border-bottom: 1px solid #222222;
		background-color: #3f3f3f;
		margin: 0px;
		position: relative;
		top: 1px;
		border-radius: 0px;
	}
</style>
