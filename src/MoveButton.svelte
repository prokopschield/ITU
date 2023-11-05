<script lang="ts">
	import * as state from "./lib/state";
	/**
	 * Spagheti code that creates a Button with @text that changes the screen to @destination.
	 */

	/**
	 * @type {Object}
	 */
	export let destination: Function | string;
	export let text = "";
	function foo() {
		if (typeof destination === "string") {
			state.page.set(destination);
		} else {
			state.page.set(destination.name.slice(6, -1));
		}
	}
</script>

<button on:click={foo}>{text}</button>
