<script lang="ts">
	import * as state from "./state";

	export let destination: string;
	export let text = "";

	function foo() {
		state.page.set(destination);
	}
</script>

<button on:click={foo}>{text}</button>
