<script lang="ts">
    import MoveButton from "../lib/MoveButton.svelte";
    let participants: {name: String; points: Number; comment: String;}[] = [{name: "a", points: 5, comment: "ahoj"}, {name: "a", points: 5, comment: "ahoj"}];
</script>

<main id="main">
    <header id="header">
        <div>
            <MoveButton destination="" text={"Akce"}></MoveButton>
            <MoveButton destination="ParticipantOverview" text={"Účastníci"}></MoveButton>
            <MoveButton destination="" text={"Vedoucí"}></MoveButton>
        </div>
        <img alt="UserIcon" id="user">
    </header>
    <div id="upper-div">
        <table id="settings">
            <tr>
                <td><input placeholder="Jméno"></td>
                <td><input placeholder="Datum / Čas" type="date"></td>
                <td>
                    <table>
                        <tr>
                            <td>Týmová</td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td>Opakující se</td>
                            <td><input type="checkbox"></td>
                        </tr>
                        <tr>
                            <td>Volitelná</td>
                            <td><input type="checkbox"></td>
                        </tr>
                    </table>
                </td>
                <td><input placeholder="Maximum bodů"></td>
            </tr>
            <tr>
                <td colspan="3">
                    <input placeholder="Popis">
                </td>
                <td>
                    <input type="submit">
                </td>
            </tr>
        </table>
    </div>
    <div id="lower-div">
        <table id="list">
            <thead>
                <th class="column0">Jméno</th>
                <th class="column1">Body</th>
                <th class="column2">Komentář</th>
            </thead>
            {#each participants as {name, points, comment}}
                <tr>
                    <td class="column0">{name}</td>
                    <td class="column1">{points}</td>
                    <td class="column2">{comment}</td>
                </tr>
            {/each}
        </table>
    </div>
</main>

<style>
    #main
    {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }

    #main #header
    {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }

    #main #header div
    {
        position: absolute;
        left: 5px;
    }

    #main #header img
    {
        position: absolute;
        right: 5px;
    }

    #upper-div
    {
        position: absolute;
        left: 0;
        right: 0;
        top: 40px;
        border: 1px solid black;
        bottom: calc(100% - 200px);
    }

    #upper-div #settings
    {
        position: absolute;
        width: 100%;
    }

    #upper-div #settings input:not([type]), #upper-div #settings input[type="date"]
    {
        width: calc(100% - 28px);
        height: 100%;
        font-size: 25px;
    }

    #upper-div #settings input[type='submit']
    {
        width: calc(100% - 20px);
        height: 100%;
        font-size: 25px;
    }

    #lower-div
    {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 200px;
        border: 1px solid black;
    }

    #lower-div #list
    {
        width: 100%;
    }
    
    .column0
    {
        width: 10%;
    }
    .column1
    {
        width: 10%;
    }
    .column2
    {
        width: 80%;
    }
</style>