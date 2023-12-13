<script lang="ts">
	import MoveButton from "../../lib/MoveButton.svelte";
	import Header from "../Header.svelte";
	import PointTable from "./PointTable.svelte";
</script>

<main id="main">
	<header id="header">
		<Header />
	</header>
	<div id="upper-div">
		<table id="settings">
			<tr>
				<td colspan="2"><input placeholder="Jméno"/></td>
				<td><input placeholder="Datum / Čas" type="date" /></td>
				<td><input placeholder="Maximum bodů" /></td>
			</tr>
			<tr>
				<td colspan="3">
					<input placeholder="Popis" />
				</td>
				<td>
					<input type="submit" />
				</td>
			</tr>
		</table>
	</div>
	<div id="lower-div">
		<PointTable />
	</div>
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

	#upper-div {
		position: absolute;
		left: 0;
		right: 0;
		top: 40px;
		bottom: calc(100% - 200px);
		margin: 0;
		margin-top: 10px;
	}

	#settings {
		position: absolute;
		width: 100%;
		padding: 8px;
		border: 1px solid #ddd;
	}

	#upper-div #settings {
		position: absolute;
		width: 100%;
	}

	#upper-div #settings input:not([type]),
	#upper-div #settings input[type="date"] {
		width: calc(100% - 16px);
		height: 100%;
		font-size: 25px;
	}

	#upper-div #settings input[type="submit"] {
		width: calc(100% - 8px);
		height: 100%;
		font-size: 25px;
	}

	#lower-div {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		top: 200px;
	}
</style>
