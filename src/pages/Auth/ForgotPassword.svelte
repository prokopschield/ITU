<script lang="ts">
	import { onMount } from "svelte";

	import { backend } from "../../lib/backend";
	import { locale } from "../../lib/locale";
	import * as state from "../../lib/state";

	const {
		IS_CAMP,
		RESET_PASSWORD_CONFIRM,
		RESET_PASSWORD_SUCCESS,
		EMAIL,
		PASSWORD,
	} = locale;

	let loading = false;

	let email = "";
	let password = "";

	let error = "";

	let check_email = false;

	const redirect = new URL(location.href).href;

	let email_field: HTMLInputElement;
	let password_field: HTMLInputElement;

	async function click() {
		if (!email) {
			return email_field.focus();
		} else if (!password) {
			return password_field.focus();
		}

		let loading = true;

		try {
			const { user } = await backend.reset_password({
				email,
				password,
				redirect,
			});

			if (user) {
				check_email = true;
			}
		} catch (caught) {
			if (caught === "EMAIL_NOT_REGISTERED") {
				state.state("email").set(email);
				state.password.set(password);
				state.page.set("AuthRegister");
			} else if (caught === "INVALID_PASSWORD") {
				password = "";
				password_field.focus();
			} else {
				error = String(caught);
			}
		}

		loading = false;
	}

	onMount(() => {
		email_field.focus();

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

{#if check_email}
	<span class="red">{$RESET_PASSWORD_SUCCESS}></span>
{:else if loading}
	... <!-- TODO spinner animation -->
{:else}
	{#if error}
		{error}
	{/if}
	<table>
		<tr>
			<td />
			<td>
				<h2>{$IS_CAMP}</h2>
			</td>
		</tr>
		<tr>
			<td>
				<label for="email">{$EMAIL}</label>
			</td>
			<td>
				<input
					bind:this={email_field}
					type="text"
					bind:value={email}
					name="email"
				/>
			</td>
		</tr>
		<tr>
			<td>
				<label for="password">{$PASSWORD}</label>
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
				<button on:click={click}>{$RESET_PASSWORD_CONFIRM}</button>
			</td>
		</tr>
	</table>
{/if}

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
</style>
