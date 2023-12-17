<script lang="ts">
	// by Jan Poledna xpoled09
	import { isEmpty, values } from "lodash";
	import { backend } from "../../lib/backend";
	import { user, selected_camp } from "../../lib/state";
	import { createEventDispatcher } from "svelte";
	const dispatch = createEventDispatcher();
	let content: Promise<
		{ id: number | string; displayname: string; points: number }[]
	>;
	async function loadLeaderBoard() {
		const { attendees } = await backend.get_leaderboard(
			selected_camp.value,
		);
		content = attendees;
	}
	loadLeaderBoard();
	setInterval(loadLeaderBoard, 300000);
</script>

<div class="outside">
	<div class="Top">
		<b>Žebříček</b>
	</div>

	<div class="content-wraper">
		{#await content}
			<i class="fa-solid fa-arrows-rotate fa-spin"></i>
		{:then content}
			{#if !isEmpty(content)}
				{#each content.sort((a, b) => b.points - a.points) as { id, displayname, points }, i}
					<div
						class="content"
						style={id == user.value.id
							? "background-color: #474747;"
							: ""}
					>
						<table>
							<td title={displayname} class="tableName">
								<button
									class="tableName-chat"
									on:click={() =>
										dispatch("selected", {
											id,
											displayname,
										})}
								>
									{i + 1}. {displayname}
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
		{:catch error}
			Nepodařilo se načíst žebříček.
		{/await}
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
		overflow-x: hidden;
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
	.tableName {
		max-width: 240px;
		height: 30px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.tableName-chat {
		max-width: 100%;
		height: 100%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		background: local;
		margin: 0;
		padding: 0;
	}
	.tablePoints {
		width: 20px;
		height: 30px;
		text-align: right;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: clip;
	}
</style>
