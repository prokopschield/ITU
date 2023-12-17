<script lang="ts">
	import LogoutButton from "../components/LogoutButton.svelte";
	import MoveButton from "../lib/MoveButton.svelte";
</script>

<main>
	<div>
		<MoveButton destination="VedouciActivitys" text={"Akce"} />
		<MoveButton
			destination="VedouciParticipantOverview"
			text={"Účastníci"}
		/>
		<MoveButton
			destination="VedouciPointDistribution"
			text={"Rozdělení bodů"}
		/>
	</div>
	<span><LogoutButton /></span>
</main>

<style>
	main div {
		position: absolute;
		left: 5px;
	}

	main span {
		position: absolute;
		right: 5px;
	}
</style>
