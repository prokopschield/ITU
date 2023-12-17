<!-- @author Jan Poledna <xpoled09> -->
<script lang="ts">
	import { clickOutside } from "./Chat/clickOutside";
	import LogoutButton from "./LogoutButton.svelte";
	import { state } from "../lib/state";
	import { functionsIn } from "lodash";

	let collapsed = true;

	function clickOut() {
		collapsed = true;
	}
	function clickIn() {
		collapsed = false;
	}
	function setLangEn() {
		state("lang").set("en");
	}
	function setLangCZ() {
		state("lang").set("cs");
	}
</script>

{#if collapsed}
	<button class="collapsed" on:click={clickIn}>
		<i class="fa-solid fa-bars"></i>
	</button>
{:else}
	<div class="extended" use:clickOutside on:click_outside={clickOut}>
		<button on:click={() => state("page").set("Home")}
			><i class="fa-solid fa-house"></i>
		</button>
		<LogoutButton /><br />
		<div>
			<button class="lang" on:click={setLangCZ}>🇨🇿</button>
			<button class="lang" on:click={setLangEn}>🇬🇧</button>
		</div>
	</div>
{/if}

<style>
	.collapsed {
		position: fixed;
		right: 20px;
		top: 5px;
		height: 50px;
		width: 50px;
		overflow: visible;
		background-color: #333333;
		border-radius: 100%;
		align-content: center;
		padding: 0px;
	}
	.extended {
		position: fixed;
		right: 20px;
		top: 5px;
		height: fit-content;
		width: fit-content;
		overflow: hidden;
		background-color: #333333;
		border: 2px solid #333333;
		border-radius: 15px;
	}
	.lang {
		background: local;
		height: 30px;
		width: 45%;
		padding: 0;
	}
</style>
