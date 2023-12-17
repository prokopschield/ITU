<script lang="ts">
	// by Jan Poledna xpoled09
	import { isEmpty } from "lodash";
import { backend } from "../../lib/backend";
	import { user } from "../../lib/state";
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
	/*let content: Promise<{ id: number | string; name: string; points: number }[]> = [];
	async function loadLeaderBoard() {
		content = backend.get_leaderboard(1);
	}
	loadLeaderBoard();
	setInterval(loadLeaderBoard,300000);
	*/
	let content:{id: bigint | number | string; name: string; points: number }[] = [];
	content = [
		{ id:0, name: "Jan Poledna", points: 10 },
		{ id:1, name: "Tomas Parizek", points: 5 },
		{ id:2, name: "Prokop Schield", points: 6 },
		{ id:3, name: "Asmoranomardicadaistinaculdacar", points: 25},
		{ id:4, name: "Asmoranomardicadaistinacul", points: 25},
		{ id:5, name: "pepe", points: 4},
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
		{#if !isEmpty(content)}
			{#each content.sort((a, b) => b.points - a.points) as { id, name, points }, i}
				<div
					class="content"
					style={name === me.name ? "background-color: #474747;" : ""}
				>
					<table>
						<td title="{name}" class="tableName">
							<button class="tableName-chat" on:click={() => dispatch('selected',{id,name})}>
								{i + 1}. {name}
								<i class="fa-regular fa-comments fa-xs"></i>
							</button>
						</td>
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
	.tableName-chat{
		max-width: 100%;
		height: 100%;
		white-space: nowrap;
  		overflow: hidden;
		text-overflow: ellipsis;
		background: local;
		margin: 0;
		padding: 0;
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
