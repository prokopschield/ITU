<script lang="ts">
    import MoveButton from "../../lib/MoveButton.svelte";
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
</style>