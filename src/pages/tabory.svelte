<script lang="ts">
	let tabory: { name: string; web: string }[] = [];
	tabory = [
		{ name: "Tabor", web: "URL" },
		{ name: "Tabor", web: "URL" },
		{ name: "Tabor", web: "URL" },
	];
</script>

<div class="wrap">
	{#each tabory as { name, web }}
		<div class="background">
			<div class="Name">
				{name}
			</div>
			<div class="URL">
				{web}
			</div>
		</div>
	{/each}
</div>

<style>
	.wrap {
		display: flex;
		width: 1256px;
		height: 916px;
		flex-direction: column;
		align-items: flex-start;
		gap: 5px;
		flex-shrink: 0;
		position: absolute;
		left: 50px;
		top: 50px;
	}
	.background {
		width: 1256px;
		height: 245px;
		left: 0px;
		top: 5px;
		position: relative;
		border-radius: 20px;
		background-color: #5c5c5c;
	}
	.Name {
		width: 500px;
		height: 80px;
		left: 10px;
		top: 0px;

		font-size: 40px;
		font-weight: 700;
		text-align: left;
	}
	.URL {
		font-size: 20px;
		font-weight: 200;
		text-align: left;
	}
</style>
