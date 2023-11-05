<script lang="ts">
    let buttons = ["Akce", "Účastníci", "Vedoucí"]
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
    <div>
        <table id="table">
            <tr>
                <td>Jméno</td>
                <td>Datum narození</td>
            </tr>
            <tr>
                <td><input></td>
                <td><input type="datetime"></td>
            </tr>
            <tr>
                <td>Tým</td>
                <td>Pohlaví</td>
            </tr>
            <tr>
                <td><input></td>
                <td><input></td>
            </tr>

            <tr><td>Heslo</td></tr>
            <tr><td><input></td></tr>

            <tr><td>Email</td></tr>
            <tr><td><input></td></tr>

            <tr>
                <td>Telefon rodiče</td>
            </tr>
            <tr>
                <td><input></td>
                <td>
                    <input type="submit">
                </td>
            </tr>
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

    #table
    {
        position: absolute;
        top: 40px;
        width: 100%;
    }

    input:not([type])
    {
        width: calc(100% - 28px);
        height: 30px;
        font-size: 25px;
    }

    input[type='submit']
    {
        width: calc(100% - 20px);
        height: 30px;
    }
</style>