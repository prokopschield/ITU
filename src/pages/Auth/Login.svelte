<script lang="ts">
	import { onMount } from "svelte";
	import { login } from "../../lib/backend";
	import { locale } from "../../lib/locale";
	import * as state from "../../lib/state";

	const { SIGN_UP } = locale;

	let username = String(state.username.value || "");
	let password = "";

	let failure = false;

	async function click() {
		try {
			failure = false;

			const response = await login(username, password);

			state.username.set(response.username);
			state.displayname.set(response.displayname);
			state.token.set(response.token);
		} catch {
			failure = true;
		}
	}

	let login_field: HTMLInputElement;
	let password_field: HTMLInputElement;

	onMount(() => {
		login_field.focus();

		for (const input of document.querySelectorAll("input")) {
			input.addEventListener("keydown", (e) => {
				if (e.key === "Enter") {
					e.preventDefault();
					click();
				}
			});
		}
	});
</script>

<div>
	<table>
		<tr>
			<td />
			<td>
				<h2>IS CAMP</h2>
			</td>
		</tr>
		<tr>
			<td>
				<label for="username">Username</label>
			</td>
			<td>
				<input
					bind:this={login_field}
					type="text"
					bind:value={username}
					name="username"
				/>
			</td>
		</tr>
		<tr>
			<td>
				<label for="password">Password</label>
			</td>
			<td>
				<input
					bind:this={password_field}
					type="password"
					bind:value={password}
					name="password"
				/>
			</td>
		</tr>

		<tr>
			<td />
			<td class="lgnbtn">
				<button on:click={click}>Přihlásit se</button>
			</td>
		</tr>

		<tr>
			<td />

			<td class="red">
				<div class="button-empty-placeholder">
					{#if failure}
						<button
							class="forgot_password_button"
							on:click={() => state.page.set("ForgotPassword")}
						>
							Zapomněl jsem heslo.
						</button>
					{/if}
				</div>
			</td>
		</tr>
	</table>

	<a target="_blank" href="?page=AuthRegister">{$SIGN_UP}</a>
</div>

<style>
	* {
		margin: 0.5em;
		font-size: 1.2em;
	}

	h2 {
		font-size: 3.5em;
	}

	.lgnbtn {
		text-align: center;
		padding-top: 0.3em;
	}

	.red {
		color: red;
	}

	.forgot_password_button {
		font-size: 0.7em;
	}

	.button-empty-placeholder {
		min-height: 2.7em;
	}
</style>
