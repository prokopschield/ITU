<script lang="ts">
	import MoveButton from "../../lib/MoveButton.svelte";
	let tableItems: { name: string; team: string; points: number }[] = [
		{ name: "a", team: "b", points: 5 },
		{ name: "a", team: "b", points: 5 },
	];
</script>

<main id="main">
	<header id="header">
		<div>
			<MoveButton destination="" text={"Akce"} />
			<MoveButton destination="ParticipantOverview" text={"Účastníci"} />
			<MoveButton destination="" text={"Vedoucí"} />
		</div>
		<img alt="UserIcon" id="user" />
	</header>

	<main id="inner-main">
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
				<th class="column3">
					<!--<img alt="sorting option" />-->
				</th>
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
	</main>
</main>

<style>
	#main {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	#main #header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}

	#main #header div {
		position: absolute;
		left: 5px;
	}

	#main #header img {
		position: absolute;
		right: 5px;
	}

	#inner-main {
		position: absolute;
		left: 0;
		right: 0;
		top: 40px;
		bottom: 0;
	}

	#table {
		position: relative;
		top: 45px;
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
