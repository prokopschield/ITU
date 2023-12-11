<script lang="ts">
	import MoveButton from "./lib/MoveButton.svelte";
	import Auth from "./pages/auth/Auth.svelte";
	import Acountview from "./pages/Ucastnici/acountview.svelte";
	import Overview from "./pages/Ucastnici/overview.svelte";
	import EditAction from "./pages/Vedouci/EditAction.svelte";
	import EditPerson from "./pages/Vedouci/EditPerson.svelte";
	import ParticipantOverview from "./pages/Vedouci/ParticipantOverview.svelte";

	import { displayname, page } from "./lib/state";

	const pkg = {
		destination: Overview,
		text: "Log Účastník",
	};
</script>

{#if $page === "Auth"}
	<Auth />
{:else if $page === "EditAction"}
	<EditAction />
{:else if $page === "EditPerson"}
	<EditPerson />
{:else if $page === "Overview"}
	<Overview />
{:else if $page === "Acountview"}
	<Acountview />
{:else if $page === "ParticipantOverview"}
	<ParticipantOverview />
{:else}
	<main>
		Vítej, {$displayname}
		<MoveButton {...pkg} />
		<MoveButton destination={ParticipantOverview} text={"Log Vedoucí"} />
		<MoveButton destination={EditAction} text={"Editace události"} />
		<MoveButton destination={EditPerson} text={"Editace osoby"} />
	</main>
{/if}

<style>
</style>
