<script lang="ts">
	import MoveButton from "../../lib/MoveButton.svelte";
	import Leaderboard from "./leaderboard.svelte";
	import Events from "./events.svelte";
</script>

<main>
	
	<Leaderboard />
	
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
