<script lang="ts">
    let buttons = ["Akce", "Účastníci", "Vedoucí"]
    let participants: {name: String; points: Number; comment: String;}[] = [];
</script>
<main id="main">
    <header id="outer-header">
        {#each buttons as button (button)}
            <button>{button}</button>
        {/each}
        <img alt="UserIcon" id="user">
    </header>
    <div id="upper-div">
        <table id="settings">
            <tr>
                <td>Jméno:<input></td>
                <td>Datum/Čas:<input></td>
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
                <td>Maximum bodů:<input></td>
            </tr>
            <tr>
                <td colspan="3">
                    Popis:
                    <input>
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
                <th>Jméno</th>
                <th>Body</th>
                <th>Komentář</th>
            </thead>
            {#each participants as {name, points, comment}}
                <tr>
                    <td>{name}</td>
                    <td>{points}</td>
                    <td>{comment}</td>
                </tr>
            {/each}
        </table>
    </div>
</main>

<style>
    #outer-header
    {
        height: 30px;
        border: 1px solid black;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    #main
    {
        position: fixed;
        bottom: 0;
        top: 30;
        left: 0;
        right: 0;
        border: 1px solid black;
    }

    #upper-div
    {
        position: fixed;
        left: 0;
        right: 0;
        top: 30px;
        height: 150px;
        border: 1px solid black;
    }

    #lower-div
    {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 180px;
        border: 1px solid black;
    }

    #settings, #list
    {
        width: 100%;
        height: 100%;
    }

    #list thead
    {
        height: 30px;
    }

    input:not([type]), input[type='submit']
    {
        width: 100%;
        height: 30px;
    }
</style>