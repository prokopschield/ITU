<script lang="ts">
	/**
	 * @type {{name: string,team:string,points: number}[]}
	 */
	export let content: { name: string; team: string; points: number }[] = [];
	content.sort((a, b) => b.points - a.points);
	export let me = { name: "", team: "", points: 0 };

	let choice: boolean = true;
	/**
	 * @type {{team:string,points: number}[]}
	 */
	let teamSum: { team: string; points: number }[] = [];

	function jedno() {
		content.sort((a, b) => b.points - a.points);
		choice = true;
	}
	function team() {
		/**
		 * @type {number[string]}
		 */
		let proc: { [key: string]: number } = {};
		teamSum = [];
		for (let index = 0; index < content.length; index++) {
			if (content[index].team == "") {
				teamSum = [];
				return;
			}

			proc[content[index].team] = 0;
		}
		for (let index = 0; index < content.length; index++) {
			proc[content[index].team] += content[index].points;
		}
		for (var key in proc) {
			var value = proc[key];
			teamSum.push({ team: key, points: value });
		}
		teamSum.sort((a, b) => b.points - a.points);
		choice = false;
	}
</script>

<div class="outside">
	<div class="Top">
		<b>Žebříček</b>
	</div>
	<div class="switch">
		<button
			on:click={jedno}
			style="background-color: {choice ? '#1a1a1a' : '#5c5c5c'}"
			>Jednotlivci</button
		>
		<button
			on:click={team}
			style="background-color: {!choice ? '#1a1a1a' : '#5c5c5c'}"
			>Týmy</button
		>
	</div>

	<div class="content-wraper">
		{#if choice && !(content.length === 0)}
			{#each content as { name, points }, i}
				<div
					class="content"
					style={name === me.name ? "background-color: #3f3f3f;" : ""}
				>
					<table>
						<td style="width:70%">{i + 1}. {name}</td>
						<td style="width:30%;text-align:right">{points}</td>
					</table>
				</div>
			{/each}
		{:else if !choice && !(teamSum.length === 0)}
			{#each teamSum as { team, points }, i}
				<div
					class="content"
					style={team === me.team ? "background-color: #3f3f3f;" : ""}
				>
					<table>
						<td style="width:70%">{i + 1}. {team}</td>
						<td style="width:30%;text-align:right">{points}</td>
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
	.switch {
		position: absolute;
		top: 60px;
		left: 0;
		right: 0;
		height: 50px;
		border-bottom: 3px solid #3f3f3f;
	}
	.content-wraper {
		position: absolute;
		top: 110px;
		left: 0;
		right: 0;
		bottom: 5px;
		overflow-y: auto;
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
		width: 100%;
		text-align: left;
	}
	button {
		width: 45%;
		border: 2px solid #3f3f3f;
	}
</style>
