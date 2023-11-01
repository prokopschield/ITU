<script lang="ts">
	import App from "../App.svelte";
    import MoveButton from "../MoveButton.svelte";
    import Leaderboard from "./leaderboard.svelte";
    let content = [
        {name: "Jan Poledna", team:"rocnik.2", points: 10 },
        {name: "Tomas Parizek", team:"rocnik.2", points: 5 },
        {name: "Prokop Schield", team:"rocnik.3", points: 6 },
    ];
</script>

<main>
    <Leaderboard content={content} me={content[0]}/>
    <h1>Ucastnici</h1>
    <MoveButton destination = {App} text = 'Log out'/>
</main>

<style>
</style>