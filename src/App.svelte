<script lang="ts">
	import Overview from "./Ucastnici/overview.svelte";
	import MoveButton from "./MoveButton.svelte";
	import Participant from "./Vedouci/ParticipantOverview.svelte";
	const pkg = {
		destination: Overview,
		text:'Log Účastník'
	}
</script>

<main>
	<h1>IS CAMP</h1>
	<MoveButton {...pkg}/>
	<MoveButton destination = {Participant} text = {"Log Vedoucí"} />
</main>

<style>
</style>
