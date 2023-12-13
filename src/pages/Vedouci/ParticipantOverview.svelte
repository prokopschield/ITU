<script lang="ts">
	import MoveButton from "../../lib/MoveButton.svelte";
	import Header from "../Header.svelte";
	import OverviewTable from "./OverviewTable.svelte";
</script>

<main id="main">
	<header id="header">
		<Header />
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
