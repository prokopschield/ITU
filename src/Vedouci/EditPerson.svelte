<script lang="ts">
    let buttons = ["Akce", "Účastníci", "Vedoucí"]
</script>

<main>
    <header id="outer-header">
        {#each buttons as button (button)}
            <button>{button}</button>
        {/each}
        <img alt="UserIcon" id="user">
    </header>
    <div id="table">
        <table>
            <tr>
                <td>Jméno</td>
                <td>Datum narození</td>
            </tr>
            <tr>
                <td><input></td>
                <td><input></td>
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
    #table
    {
        position: fixed;
        top: 30px;
        left: 0;
        right: 0;
        bottom: 0;
    }
</style>