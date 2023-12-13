<script lang="ts">
    import MoveButton from "../../lib/MoveButton.svelte";
	import Header from "../Header.svelte";
	import MultiPointTable from "./MultiPointTable.svelte";
</script>

<main id="main">
	<header id="header">
		<Header />
	</header>
    <main>
        <MultiPointTable />
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

    #main main {
		position: absolute;
		left: 0;
		right: 0;
		top: 40px;
		bottom: calc(100% - 200px);
		margin: 0;
    }
</style>