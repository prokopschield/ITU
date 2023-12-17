<!--
	Tomáš Pařízek
-->
<script lang="ts">
	import type { real } from "@prokopschield/complex";
	import { page } from "../../lib/state";

	export let activityName = "Název akce";
	export let id: real;
	export let description: string;
	export let maxPoints: number;

	import { createEventDispatcher } from "svelte";
	import { state } from "@prokopschield/localstorage-state";
	const dispatch = createEventDispatcher();
</script>

<button
	class="activity-box"
	on:click={(event) => {
		event.stopPropagation();
		state.add_activity.value = false;
		state.selected_activity.value = {
			id: id,
			description: description,
			name: activityName,
			points: maxPoints,
		};
		page.set("VedouciEditActivity");
	}}
>
	<div id="icons">
		<button><i class="fa-solid fa-pen-to-square"></i></button>
		<button
			on:click={(event) => {
				event.stopPropagation();
				dispatch("remove", id);
			}}><i class="fa-solid fa-trash-can"></i></button
		>
	</div>
	<div class="activity-name">{activityName}</div>
</button>

<style>
	.activity-box {
		position: relative;
		border: 1px solid #ccc;
		padding: 10px;
		width: calc(100% - 20px); /* změna šířky na 100% */
		text-align: center;
		box-sizing: border-box; /* zajistí, že padding nebude zvyšovat celkovou šířku */
	}

	.activity-name {
		font-size: 18px;
		font-weight: bold;
		margin-bottom: 10px;
	}

	#icons {
		position: absolute;
		right: 0;
		top: 0;
	}
</style>
