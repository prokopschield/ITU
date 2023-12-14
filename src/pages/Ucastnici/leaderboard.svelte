<script lang="ts">
	import { backend } from "../../lib/backend";
	import { user } from "../../lib/state";
	/**
	 * @type {{name: string,points: number}[]}
	 */
	let content: { name: string; points: number }[] = [];
	content = [
		{ name: "Jan Poledna", points: 10 },
		{ name: "Tomas Parizek", points: 5 },
		{ name: "Prokop Schield", points: 6 },
		{ name: "Asmoranomardicadaistinaculdacar", points: 25},
		{ name: "Asmoranomardicadaistinacul", points: 25},
		{ name: "pepe", points: 4},
	];
	let me: { name: string; points: number } = { name: user.value.username, points: NaN};
	content.sort((a, b) => b.points - a.points);


	/*
	//content = backend.get_leaderboard(camp_id);
	async function loadLeaderBoard() {
		content = await backend.get_leaderboard(camp_id);
		content.sort((a, b) => b.points - a.points);
		me = await backend.get_my_score(my_id,camp_id);
	}
	loadLeaderBoard();
	*/
</script>

<div class="outside">
	<div class="Top">
		<b>Žebříček</b>
	</div>

	<div class="content-wraper">
		{#if content.length != 0}
			{#each content as { name, points }, i}
				<div
					class="content"
					style={name === me.name ? "background-color: #474747;" : ""}
				>
					<table>
						<td class="tableName">{i + 1}. {name}</td>
						<td class="tablePoints">{points}</td>
					</table>
				</div>
			{/each}
		{:else}
			No Data
		{/if}
	</div>
</div>

<style>
	.outside {
		position: fixed;
		bottom: 5px;
		top: 5px;
		left: 5px;
		width: 275px;
		border-radius: 25px;
		background-color: #5c5c5c;
	}
	.Top {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 50px;
		border-top-right-radius: 25px;
		border-top-left-radius: 25px;
		border: 3px solid #3f3f3f;
		background-color: #3f3f3f;
	}
	.content-wraper {
		position: absolute;
		top: 50px;
		left: 0;
		right: 0;
		bottom: 5px;
		overflow-y: auto;
		overflow-x:hidden;
		border-bottom-right-radius: 25px;
		border-bottom-left-radius: 25px;
	}
	.content {
		position: relative;
		top: 2px;
		left: 0;
		right: 0;
		height: 30px;
		text-align: center;
		border-bottom: 3px solid #3f3f3f;
	}
	b {
		font-size: 2.2em;
		text-align: center;
	}
	table {
		width: 275px;
		text-align: left;
		white-space: nowrap;
  		overflow: hidden;
  		text-overflow: clip;
	}
	.tableName{
		width:255px;
		height: 30px;
		white-space: nowrap;
  		overflow: hidden;
		text-overflow: clip;
	}
	.tablePoints{
		width:20px;
		height: 30px;
		text-align:right;
		white-space: nowrap;
  		overflow: hidden;
		text-overflow: clip;
	}
</style>
