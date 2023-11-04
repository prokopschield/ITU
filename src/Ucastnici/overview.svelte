<script lang="ts">
	import App from "../App.svelte";
    import MoveButton from "../MoveButton.svelte";
    import Leaderboard from "./leaderboard.svelte";
    import Events from "./events.svelte";
    let content = [
        {name: "Jan Poledna", team:"rocnik.2", points: 10 },
        {name: "Tomas Parizek", team:"rocnik.2", points: 5 },
        {name: "Prokop Schield", team:"rocnik.3", points: 6 },
    ];
    let events=[
        {name: "Beh",date: new Date(45549889),description: "Minulost",points: 1,pointsMax: 2},
        {name: "Beh2",date: new Date(Date.now()),description: "Pritomnost",points: NaN,pointsMax: 3},
        {name: "Beh3",date: new Date(Date.now()+1000000000),description: "Budoucnost",points: NaN,pointsMax: 3}
    ];

    function Add(){
        content.length = content.push({name: "New", team:"New", points: 6});
        events.length = events.push({name: "New",date: new Date(Date.now()+100000000),description: "New",points: NaN,pointsMax: 3})
    }
</script>

<main>
    {#key content}
    <Leaderboard content={content} me={content[0]}/>
    {/key}
    <h1>Ucastnici</h1>
    
    {#key events}
    <Events events={events}/>        
    {/key}
    <div class="logout">
    <MoveButton destination = {App} text = 'Log out'/>
    <button on:click={Add}>Add</button>
    </div>
    
</main>

<style>
    .logout{
        position: absolute;
        right: 20px;
        top: 10px;
    }
</style>