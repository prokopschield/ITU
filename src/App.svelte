<script lang="ts">
	import Overview from "./Ucastnici/overview.svelte";
	import MoveButton from "./MoveButton.svelte";
	import ParticipantOverview from "./Vedouci/ParticipantOverview.svelte";
	import EditAction from "./Vedouci/EditAction.svelte";
	import EditPerson from "./Vedouci/EditPerson.svelte";

	import * as state from "./lib/state";
	import Auth from "./pages/auth/Auth.svelte";

	let username = "";
	let displayname = "";

	state.username.subscribe((value) => (username = value));
	state.displayname.subscribe((value) => (displayname = value));

	let page = "";

	state.page.subscribe((value) => (page = value));

	const pkg = {
		destination: Overview,
		text: "Log Účastník",
	};
</script>

{page}

{#if page === "Auth"}
	<Auth />
{:else if page === "EditAction"}
	<EditAction />
{:else if page === "EditPerson"}
	<EditPerson />
{:else if page === "Overview"}
	<Overview />
{:else if page === "ParticipantOverview"}
	<ParticipantOverview />
{:else}
	<main>
		<h1>IS CAMP</h1>
		{#if username}
			Vítej, {displayname}
			<MoveButton {...pkg} />
			<MoveButton
				destination={ParticipantOverview}
				text={"Log Vedoucí"}
			/>
			<MoveButton destination={EditAction} text={"Editace události"} />
			<MoveButton destination={EditPerson} text={"Editace osoby"} />
		{:else}
			<Auth />
		{/if}
	</main>
{/if}

<style>
</style>
