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
        <header id="inner-header">
            <span id="column0">
                <span>Jméno</span>
                <span><img alt="sorting option"></span>
            </span>
            <span id="column1">
                <span>Tým</span>
                <span><img alt="sorting option"></span>
            </span>
            <span id="column2">
                <span>Body</span>
                <span><img alt="sorting option"></span>
            </span>
            <span id="column3">
                <img alt="sorting option">
            </span>
        </header>
        <table id="table">
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

    #inner-header
    {
        position: relative;
        top: 45px;
        left: 0;
        right: 0;
        height: 30px;
    }
    #table
    {
        position: relative;
        top: 65px;
        width: 100%;
    }
    .item
    {
        position: relative;
    }
    #column0
    {
        position: absolute;
        left: 0;
        right: 50%;
    }
    #column1
    {
        position: absolute;
        left: 50%;
        right: calc(50% - (50% / 3));
    }
    #column2
    {
        position: absolute;
        left: calc(50% + (50% / 3));
        right: calc(50% - (50% / 3) * 2);
    }
    #column3
    {
        position: absolute;
        left: calc(50% + (50% / 3) * 2);
        right: 0;
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