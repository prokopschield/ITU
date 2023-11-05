<script lang="ts">
	import Overview from "./Ucastnici/overview.svelte";
	import MoveButton from "./MoveButton.svelte";
	import Participant from "./Vedouci/ParticipantOverview.svelte";
	import EditAction from "./Vedouci/EditAction.svelte";
	import EditPerson from "./Vedouci/EditPerson.svelte";

	import * as state from "./lib/state";
	import Auth from "./pages/auth/Auth.svelte";

	let username = "";
	let displayname = "";

	state.username.subscribe((value) => (username = value));
	state.displayname.subscribe((value) => (displayname = value));

	const pkg = {
		destination: Overview,
		text: "Log Účastník",
	};
</script>

<main>
	<h1>IS CAMP</h1>
	{#if username}
		Vítej, {displayname}
		<MoveButton {...pkg} />
		<MoveButton destination={Participant} text={"Log Vedoucí"} />
		<MoveButton destination={EditAction} text={"Editace události"} />
		<MoveButton destination={EditPerson} text={"Editace osoby"} />
	{:else}
		<Auth />
	{/if}
</main>

<style>
</style>
