<script lang="ts">
    let tableItems: { name: string; team: string; points: number }[] = [
		{ name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
        { name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
	];
</script>

<table id="table">
    <thead>
        <th class="column0">
            <span>Jméno</span>
            <span><img alt="sorting option" /></span>
        </th>
        <th class="column1">
            <span>Tým</span>
            <span><img alt="sorting option" /></span>
        </th>
        <th class="column2">
            <span>Body</span>
            <span><img alt="sorting option" /></span>
        </th>
        <th class="column3"></th>
    </thead>
    <tbody>
        {#each tableItems as { name, team, points }}
            <tr class="item">
                <td class="column0">{name}</td>
                <td class="column1">{team}</td>
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
	.column1,
	.column2,
	.column3 {
		width: calc(50% / 3);
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