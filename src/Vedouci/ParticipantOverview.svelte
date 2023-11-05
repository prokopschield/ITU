<script lang="ts">
    let buttons = ["Akce", "Účastníci", "Vedoucí"]
    let tableItems: { name: string; team: string; points: number; }[] = [];
</script>

<main>
    <header id="outer-header">
        {#each buttons as button (button)}
            <button>{button}</button>
        {/each}
        <img alt="UserIcon" id="user">
    </header>
    <main id="outer-main">
        <button>
            Rozdělení bodů
        </button>
        <main id="inner-main">
            <header id="inner-header">
                <span id="column0">
                    <span id="column0">Jméno</span>
                    <span><img alt="sorting option"></span>
                </span>
                <span id="column1">
                    <span id="column1">Tým</span>
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
            <main>
                {#each tableItems as {name, team, points}}
                    <div>
                        <span>{name}</span>
                        <span>{team}</span>
                        <span>{points}</span>
                        <span>
                            <img alt="chat">
                            <img alt="upravit">
                            <img alt="vymazat">
                        </span>
                    </div>
                {/each}
            </main>
        </main>
    </main>
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

    #outer-main
    {
        position: fixed;
        bottom: 0;
        top: 30;
        left: 0;
        right: 0;
        border: 1px solid black;
    }

    #inner-main
    {
        position: fixed;
        bottom: 30px;
        top: 80px;
        left: 20px;
        right: 20px;
        border: 1px solid black;
    }

    #inner-header
    {
        position: relative;
        top: 0;
        left: 0;
        right: 0;
        height: 30px;
        border: 1px solid black;
    }

    #column0
    {
        width: 50%;
    }
    
    #column1, #column2, #column3
    {
        width: calc(50% / 3);
    }

    #user
    {
        position: absolute;
        right: 5px;
    }
</style>