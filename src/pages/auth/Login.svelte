<script>
	import { login } from "../../lib/backend";
	import * as state from "../../lib/state";

	let username = "";
	let password = "";

	async function click() {
		try {
			const response = await login(username, password);

			state.username.set(response.username);
			state.displayname.set(response.displayname);
			state.token.set(response.token);
		} catch {
			alert("Nesprávné údaje!");
		}
	}
</script>

<div>
	<label for="username">Username</label><input
		type="text"
		bind:value={username}
		name="username"
	/>
	<br />
	<label for="password">Password</label><input
		type="password"
		bind:value={password}
		name="password"
	/>
	<br />
	<button on:click={click}>Přihlásit se</button>
</div>

<style>
	* {
		margin: 0.3em;
	}
</style>
