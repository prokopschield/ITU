<script lang="ts">
	import { onMount } from "svelte";

    let tableItems: { name: string; points: number }[] = [
		{ name: "a", points: 5 },
        { name: "a", points: 5 },
        { name: "a", points: 5 },
        { name: "a", points: 13 },
        { name: "a", points: 12 },
        { name: "a", points: 5 },
        { name: "a", points: 5 },
        { name: "b", points: 5 },
        { name: "a", points: 15 },
        { name: "a", points: 5 },
        { name: "a", points: 5 },
        { name: "c", points: 5 },
        { name: "a", points: 5 },
        { name: "d", points: 5 },
        { name: "a", points: 10 },
        { name: "a", points: 5 },
        { name: "e", points: 5 },
        { name: "a", points: 5 },
        { name: "a", points: 5 },
        { name: "a", points: 10 },
        { name: "a", points: 5 },
        { name: "a", points: 5 },
        { name: "a", points: 5 },
        { name: "a", points: 5 },
        { name: "a", points: 5 },
        { name: "a", points: 5 },
        { name: "a", points: 5 },
        { name: "a", points: 5 },
        { name: "a", points: 5 },
        { name: "a", points: 5 },
	];

    let sortColumn: String | undefined = undefined;
    let sortDirection = true; // ascending

    function sortBy(column: String) {
        if (sortColumn === column) { // Otočení směru řazení
            sortDirection = !sortDirection;
        } else {
            sortColumn = column;
            sortDirection = true;
        }

        tableItems = tableItems.sort((a, b) => {
            const aValue = column === "name" ? a.name : a.points;
            const bValue = column === "name" ? b.name : b.points;

            if (sortDirection) {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });
    }

    onMount(() => {
        sortBy("name");
    })
</script>

<table id="table">
    <thead>
        <th class="column0" on:click={() => sortBy("name")}>
            <span>Jméno</span>
            <span><img alt="sorting option" /></span>
        </th>
        <th class="column2" on:click={() => sortBy("points")}>
            <span>Body</span>
            <span><img alt="sorting option" /></span>
        </th>
        <th class="column3"></th>
    </thead>
    <tbody>
        {#each tableItems as { name, points }}
            <tr class="item">
                <td class="column0">{name}</td>
                <td class="column2">{points}</td>
                <td class="column3">
                    <img alt="chat" />
                    <img alt="upravit" />
                    <img alt="vymazat" />
                </td>
            </tr>
        {/each}
    </tbody>
</table>

<style>
    #table {
		position: relative;
		top: 65px;
		width: 100%;
	}

	.column0 {
		width: 50%;
	}
	.column2,
	.column3 {
		width: 25%;
	}

	table {
		width: 100%;
		border-collapse: collapse;
		margin: 10px 0;
	}

	th, td {
		border: 1px solid #ddd;
		padding: 8px;
		text-align: left;
	}

	th {
		background-color: light dark;
	}

	tr:hover {
		background-color: rgb(46, 46, 46);
	}
</style>