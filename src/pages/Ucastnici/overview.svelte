<script lang="ts">
	import MoveButton from "../../lib/MoveButton.svelte";
	import Leaderboard from "./leaderboard.svelte";
	import Events from "./events.svelte";
	//replace for backend connection from here
	let content = [
		{ name: "Jan Poledna", points: 10 },
		{ name: "Tomas Parizek", points: 5 },
		{ name: "Prokop Schield", points: 6 },
		{ name: "Asmoranomardicadaistinaculdacar", points: 25},
		{ name: "Asmoranomardicadaistinacul", points: 25},
	];
	// to here
</script>

<main>
	{#key content}
		<Leaderboard {content} me={content[0]} />
	{/key}
	<h1>Ucastnici</h1>

	<Events />
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
</style>
