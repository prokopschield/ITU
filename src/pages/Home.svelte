<!-- This file was borrowed from IIS projekt -->
<!-- @author Prokop Schield <xschie03> -->

<script lang="ts">
	import { onMount } from "svelte";

	import { backend } from "../lib/backend";
	import { locale } from "../lib/locale";
	import { displayname } from "../lib/state";

	import UcastniciCamps from "./Ucastnici/MyCamps.svelte";
	import VedouciCamps from "./Vedouci/MyCamps.svelte";
	import OrganizatorCamps from "./Organizer/MyCamps.svelte";

	const { WELCOME_COMMA, YOU_ARE_LEADER_OF, YOU_ARE_ORGANIZER_OF } = locale;

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

<h3>{$WELCOME_COMMA} {$displayname}</h3>

{#if attendee}
	<UcastniciCamps />
{/if}

{#if leader}
	<h3>{$YOU_ARE_LEADER_OF}</h3>
	<VedouciCamps />
{/if}

{#if organizer}
	<h3>{$YOU_ARE_ORGANIZER_OF}</h3>
	<OrganizatorCamps />
{/if}
