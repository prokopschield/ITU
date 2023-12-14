<script lang="ts">
	import Login from "./Login.svelte";
	import Register from "./Register.svelte";

	import { store } from "@prokopschield/localstorage-state";

	const page = store<string>("page");
</script>

{#if $page === "AuthLogin"}
	<Login />
{:else if $page === "AuthRegister"}
	<Register />
{:else if $page === "AuthForgotPassword"}
	<h1>TODO</h1>
{:else}
	{page.set("AuthLogin")}
{/if}
