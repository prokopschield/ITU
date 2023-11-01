<script lang="ts">
	import App from "../App.svelte";
    import MoveButton from "../MoveButton.svelte";
    const pkg = {
		destination: App,
		text:'Log out'
	}
    import Leaderboard from "./leaderboard.svelte";
</script>

<main>
    <Leaderboard/>
    <h1>Ucastnici</h1>
    <MoveButton {...pkg}/>
</main>

<style>
</style>