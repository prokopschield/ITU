<script lang="ts">
	import { onMount } from "svelte";
	import { get } from "svelte/store";

	import { register } from "../../lib/backend";
	import { locale } from "../../lib/locale";
	import * as state from "../../lib/state";

	const {
		IS_CAMP,
		EMAIL,
		PASSWORD,
		DISPLAYNAME,
		LEGAL_NAME,
		LEGAL_GUARDIAN,
		LEGAL_GUARDIAN_CONTACT,
		IS_MINOR,
		SIGN_UP_FAIL,
		SIGN_UP_SUCCESS,
		SIGN_UP_CONFIRM,
		INVALID_EMAIL,
		DISPLAYNAME_TOO_LONG,
		DISPLAYNAME_TOO_SHORT,
		INVALID_INFO,
		USERNAME_TAKEN,
	} = locale;

	let email = String(state.state("email").value || "");
	let password = String(get(state.password) || "");
	let displayname = "";
	let legal_name = "";
	let legal_guardian = "";
	let legal_guardian_contact = "";

	let error = get(SIGN_UP_FAIL);
	let is_minor = false;
	let failure = false;
	let check_email = false;

	async function click() {
		try {
			error = get(SIGN_UP_FAIL);
			failure = false;

			if (!email.includes("@")) {
				error = get(INVALID_EMAIL);
				failure = true;

				return;
			}

			const response = await register({
				displayname,
				legal_name,
				legal_guardian,
				legal_guardian_contact,
				email,
				password,
				redirect: new URL("?page=/", location.href).href,
			});

			if ("error" in response) {
				if (response.error === "DISPLAYNAME_TOO_LONG") {
					error = get(DISPLAYNAME_TOO_LONG);
				} else if (response.error === "DISPLAYNAME_TOO_SHORT") {
					error = get(DISPLAYNAME_TOO_SHORT);
				} else if (response.error === "INVALID_INFO") {
					error = get(INVALID_INFO);
				} else if (response.error === "USERNAME_TAKEN") {
					error = get(USERNAME_TAKEN);
				} else {
					error = String(response.error);
				}

				return (failure = true);
			}

			if (response.status !== "EMAIL_SENT") {
				return (failure = true);
			}

			return (check_email = true);
		} catch {
			failure = true;
		}
	}

	let displayname_field: HTMLInputElement;

	onMount(() => {
		displayname_field.focus();

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
	<h1>{$SIGN_UP_SUCCESS}</h1>
{:else}
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
				<input type="email" bind:value={email} id="email" />
			</td>
		</tr>
		<tr>
			<td>
				<label for="displayname">{$DISPLAYNAME}</label>
			</td>
			<td>
				<input
					bind:this={displayname_field}
					type="text"
					bind:value={displayname}
					id="displayname"
				/>
			</td>
		</tr>
		<tr>
			<td>
				<label for="password">{$PASSWORD}</label>
			</td>
			<td>
				<input type="password" bind:value={password} id="password" />
			</td>
		</tr>

		<tr>
			<td>
				<label for="legal_name">{$LEGAL_NAME}</label>
			</td>
			<td>
				<input bind:value={legal_name} id="legal_name" />
			</td>
		</tr>

		<tr>
			<td>
				<label for="is_minor">{$IS_MINOR}</label>
			</td>
			<td>
				<input bind:checked={is_minor} type="checkbox" id="is_minor" />
			</td>
		</tr>

		{#if is_minor}
			<tr>
				<td>
					<label for="legal_guardian">{$LEGAL_GUARDIAN}</label>
				</td>
				<td>
					<input bind:value={legal_guardian} id="legal_guardian" />
				</td>
			</tr>
			<tr>
				<td>
					<label for="legal_guardian_contact"
						>{$LEGAL_GUARDIAN_CONTACT}</label
					>
				</td>
				<td>
					<input
						bind:value={legal_guardian_contact}
						id="legal_guardian_contact"
					/>
				</td>
			</tr>
		{/if}

		<tr>
			<td />
			<td class="lgnbtn">
				<button on:click={click}>{$SIGN_UP_CONFIRM}</button>
			</td>
		</tr>

		{#if failure}
			<tr>
				<td></td>
				<td>
					<h3>{error}</h3>
				</td>
			</tr>
		{/if}
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
</style>
