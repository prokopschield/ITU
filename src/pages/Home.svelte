<!-- @author Prokop Schield <xschie03> -->
<!-- @co-author Jan Poledna <xpoled09> -->
<script lang="ts">
	import { onMount } from "svelte";

	import { backend } from "../lib/backend";
	import { state } from "../lib/state";
	import { locale } from "../lib/locale";
	import { displayname } from "../lib/state";

	const { WELCOME_COMMA, YOU_ARE_LEADER_OF, YOU_ARE_ORGANIZER_OF } = locale;

	let attendee = false;
	let leader = false;
	let organizer = false;

	let AtendeeCamps = new Array<any>();
	let LeaderCamps = new Array<any>();
	let OrginezerCamps = new Array<any>();
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
		const resultA = await backend.attendee_my_camps();
		const resultL = await backend.leader_my_camps();
		const resultO = await backend.organizer_my_camps();

		AtendeeCamps = resultA.camps;
		LeaderCamps = resultL.camps;
		OrginezerCamps = resultO.camps;
	});

	function openCampA(camp_id: number) {
		state("selected_camp").set(camp_id);
		state("page").set("/ucastnici/overview");
	}
	function openCampL(camp_id: number) {
		state("selected_camp").set(camp_id);
		state("page").set("/vedouci/activities");
	}
	function openCampO(camp_id: number) {
		state("selected_camp").set(camp_id);
		state("page").set("/organizer/camp");
	}
</script>

<div class="wrap">
	<h1>{$WELCOME_COMMA} {$displayname}</h1>
	{#if attendee}
		{#each AtendeeCamps as camp}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<button class="background" on:click={() => openCampA(camp.id)}>
				<div class="Name"><h3>{camp.name}</h3></div>
				<div class="vedouci">
					<b>Vedoucí:</b>

					{#each camp.leader as leader}
						<span class="leaderNames"
							>{leader.user.legal_name},
						</span>
					{/each}
				</div>
			</button>
		{/each}
	{/if}
	{#if leader}
		<h2>{$YOU_ARE_LEADER_OF}</h2>
		{#each LeaderCamps as camp}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<button class="background" on:click={() => openCampL(camp.id)}>
				<div class="Name"><h3>{camp.name}</h3></div>
				<div class="vedouci">
					<b>Vedoucí:</b>

					{#each camp.leader as leader}
						<span class="leaderNames"
							>{leader.user.legal_name},
						</span>
					{/each}
				</div>
			</button>
		{/each}
	{/if}
	{#if organizer}
		<h2>{$YOU_ARE_ORGANIZER_OF}</h2>
		{#each OrginezerCamps as camp}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<button class="background" on:click={() => openCampO(camp.id)}>
				<div class="Name"><h3>{camp.name}</h3></div>
				<div class="vedouci">
					<b>Vedoucí:</b>

					{#each camp.leader as leader}
						<span class="leaderNames"
							>{leader.user.legal_name},
						</span>
					{/each}
				</div>
			</button>
		{/each}
		<button
			class="newCamp"
			on:click={() => state("page").set("/organizer/new_camp")}
		>
			Zaregistrovat nový tábor
		</button>
	{/if}
</div>

<style>
	.wrap {
		display: flex;
		width: 1256px;
		height: 916px;
		flex-direction: column;
		align-items: flex-start;
		gap: 5px;
		flex-shrink: 0;
		position: absolute;
		left: 50px;
		top: 50px;
	}
	.background {
		width: 1256px;
		height: 245px;
		left: 0px;
		top: 5px;
		position: relative;
		border-radius: 20px;
		background-color: #5c5c5c;
	}
	.Name {
		width: 100%;
		height: 80px;
		left: 10px;
		top: 5px;
		margin: 10px;
		margin-bottom: 0px;
		font-size: 30px;
		text-align: left;
	}
	.vedouci {
		font-size: 20px;
		text-align: left;
		margin: 10px;
	}
	.newCamp {
		position: fixed;
		right: 50px;
		bottom: 50px;
	}
	.leaderNames {
		font-style: oblique;
	}
</style>
