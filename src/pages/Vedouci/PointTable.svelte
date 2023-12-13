<script lang="ts">
export let data : {name: string, points: number, comment: string}[] = [
    {name: "Jan Novák", points: 20, comment: "Pičo vole, to se povedlo"},
    {name: "Jan Novák", points: 20, comment: "toto už ne"},
];

function handleBodyChange(index: number, event: Event) {
    const target = event.currentTarget as HTMLInputElement;
    data[index].points = parseInt(target.value, 10);
}

function handleCommentChange(index: number, event: Event) {
    const target = event.currentTarget as HTMLInputElement;
    data[index].comment = target.value;
}
</script>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
        margin: 10px 0;
    }

    th {
        padding: 8px;
        background-color: light dark;
    }

    td {
        padding: 6px;
    }

    td input {
        width: 100%;
        margin: 0; /* Ostranění mezery kolem inputu */
        box-sizing: border-box; /* Zahrnutí okraje do celkové šířky */
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }

    tr:hover {
        background-color: rgb(46, 46, 46);
    }

    input {
        font-size: larger;
    }
</style>

<table>
    <thead>
        <tr>
        <th>Jméno</th>
        <th>Body</th>
        <th>Komentář</th>
        </tr>
    </thead>
    <tbody>
        {#each data as record, index}
        <tr>
            <td>{record.name}</td>
            <td><input type="number" bind:value={record.points} on:input={e => handleBodyChange(index, e)} /></td>
            <td><input bind:value={record.comment} on:input={e => handleCommentChange(index, e)} /></td>
        </tr>
        {/each}
    </tbody>
</table>
