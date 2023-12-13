<script lang="ts">
	import MoveButton from "../../lib/MoveButton.svelte";
	import OverviewTable from "./OverviewTable.svelte";
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
		<button>Rozdělení bodů</button>
		<OverviewTable />
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
	#inner-main button {
		position: absolute;
		top: 5px;
		left: 5px;
	}
</style>
