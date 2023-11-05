<script lang="ts">
    let buttons = ["Akce", "Účastníci", "Vedoucí"]
    let tableItems: { name: string; team: string; points: number; }[] = [{name:"a", team:"b", points:5}, {name:"a", team:"b", points:5}];
</script>

<main id="main">
    <header id="header">
        <div>
            {#each buttons as button (button)}
                <button>{button}</button>
            {/each}
        </div>
        <img alt="UserIcon" id="user">
    </header>

    <main id="inner-main">
        <button>Rozdělení bodů</button>
        <table id="table">
            <thead>
                <th class="column0">
                    <span>Jméno</span>
                    <span><img alt="sorting option"></span>
                </th>
                <th class="column1">
                    <span>Tým</span>
                    <span><img alt="sorting option"></span>
                </th>
                <th class="column2">
                    <span>Body</span>
                    <span><img alt="sorting option"></span>
                </th>
                <th class="column3">
                    <img alt="sorting option">
                </th>
            </thead>
            {#each tableItems as {name, team, points}}
                <tr class="item">
                    <td class="column0">{name}</td>
                    <td class="column1">{team}</td>
                    <td class="column2">{points}</td>
                    <td class="column3">
                        <img alt="chat">
                        <img alt="upravit">
                        <img alt="vymazat">
                    </td>
                </tr>
            {/each}
        </table>
    </main>
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

    #inner-main
    {
        position: absolute;
        left: 0;
        right: 0;
        top: 40px;
        bottom: 0;
    }
    #inner-main button
    {
        position: absolute;
        top: 5px;
        left: 5px;
    }

    #table
    {
        position: relative;
        top: 65px;
        width: 100%;
    }

    .column0
    {
        width: 50%;
    }
    .column1, .column2, .column3
    {
        width: calc(50% / 3);
    }
</style>