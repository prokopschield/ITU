<script lang="ts">
	import { onMount } from "svelte";

    export let tableItems: { name: string; points: number }[] = [];

    let sortColumn: String | undefined = undefined;
    let sortDirection = false; // descending

    function sortBy(column: String) {
        if (sortColumn === column) { // Otočení směru řazení
            sortDirection = !sortDirection;
        } else {
            sortColumn = column;
            sortDirection = false;
        }
        
        let icon = sortDirection ? "fa-solid fa-sort-down" : "fa-solid fa-sort-up";
        if (sortColumn === "name") {
            document.getElementById("nameIcon")!.className = icon;
            document.getElementById("pointsIcon")!.className = "fa-solid fa-sort";
        } else {
            document.getElementById("nameIcon")!.className = "fa-solid fa-sort";
            document.getElementById("pointsIcon")!.className = icon;
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
        <th class="column0 sortable-header" on:click={() => sortBy("name")}>
            <span>Jméno</span>
            <span><i class="fa-solid fa-sort" id="nameIcon"></i></span>
        </th>
        <th class="column2 sortable-header" on:click={() => sortBy("points")}>
            <span>Body</span>
            <span><i class="fa-solid fa-sort" id="pointsIcon"></i></span>
        </th>
        <th class="column3"></th>
    </thead>
    <tbody>
        {#each tableItems as { name, points }}
            <tr class="item">
                <td class="column0">{name}</td>
                <td class="column2">{points}</td>
                <td class="column3">
                    <i class="fa-regular fa-comment"></i>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash-can"></i>
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

	/*.column0 {
	    width: calc(100% - 90px);
	}*/
	.column2 {
        width: 100px;
    }
	.column3 {
		width: 60px;
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

    .sortable-header {
        cursor: default;
    }

    .sortable-header:hover {
        cursor: pointer;
    }
</style>