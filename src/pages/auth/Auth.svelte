<script lang="ts">
	import Login from "./Login.svelte";
	import Register from "./Register.svelte";

	let page: "register" | "login" = "login";
</script>

{#if page === "login"}
	<Login />
{:else}
	<Register />
{/if}
