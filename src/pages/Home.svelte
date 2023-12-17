<!-- This file was borrowed from IIS projekt -->
<!-- @author Prokop Schield <xschie03> -->

<script lang="ts">
	import { onMount } from "svelte";

	import { backend } from "../lib/backend";
	import { page, displayname } from "../lib/state";

	let attendee = false;
	let leader = false;
	let organizer = false;

	onMount(async () => {
		const { data } = await backend.load_roles();

		if (data.attendee.length) {
			attendee = true;
		}

		if (data.leader.length) {
			leader = true;
		}

		if (data.camp.length) {
			organizer = true;
		}

		if (!attendee && !organizer && !leader) {
			organizer = true;
		}
	});
</script>

<h3>Vítej, {$displayname}</h3>

{#if attendee}
	<button on:click={() => page.set("/ucastnici/my_camps")}>
		Moje tábory
	</button>
{/if}

{#if leader}
	<button on:click={() => page.set("/vedouci/my_camps")}>
		Moje tábory (vedoucí)
	</button>
{/if}

{#if organizer}
	<button on:click={() => page.set("/organizer/my_camps")}>
		Moje tábory (organizátor)
	</button>
{/if}
