<script lang="ts">
	import { backend } from "../../lib/backend";
	import { user } from "../../lib/state";
	/**
	 * @type {{name: string,points: number}[]}
	 */
	/*let content: Promise<{ id: number | string; name: string; points: number }[]> = [];
	async function loadLeaderBoard() {
		content = backend.get_leaderboard(1);
	}
	setInterval(loadLeaderBoard,300000);
	*/
	let content:{ name: string; points: number }[] = [];
	content = [
		{ name: "Jan Poledna", points: 10 },
		{ name: "Tomas Parizek", points: 5 },
		{ name: "Prokop Schield", points: 6 },
		{ name: "Asmoranomardicadaistinaculdacar", points: 25},
		{ name: "Asmoranomardicadaistinacul", points: 25},
		{ name: "pepe", points: 4},
	];
	let me: { name: string; points: number } = { name: user.value.username, points: NaN};


</script>

<div class="outside">
	<div class="Top">
		<b>Žebříček</b>
	</div>

	<div class="content-wraper">
		<!--{#await content}
		<i class="fa-solid fa-arrows-rotate fa-spin"></i>   
		{:then content} -->
		{#if content.length != 0}
			{#each content.sort((a, b) => b.points - a.points) as { name, points }, i}
				<div
					class="content"
					style={name === me.name ? "background-color: #474747;" : ""}
				>
					<table>
						<td title="{name}" class="tableName">{i + 1}. {name}</td>
						<td class="tablePoints">{points}</td>
					</table>
				</div>
			{/each}
		{:else}
			No Data
		{/if}
		<!--{:catch error}
		<p style="color: red">{error.message}</p>
		{/await}-->
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
		max-width: 240px;
		height: 30px;
		white-space: nowrap;
  		overflow: hidden;
		text-overflow: ellipsis;
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
