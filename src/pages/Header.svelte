<script lang="ts">
	import MoveButton from "../lib/MoveButton.svelte";
</script>

<main>
	<div>
		<MoveButton destination="VedouciActivities" text={"Akce"} />
		<MoveButton
			destination="VedouciParticipantOverview"
			text={"Účastníci"}
		/>
		<MoveButton
			destination="VedouciPointDistribution"
			text={"Rozdělení bodů"}
		/>
	</div>
</main>

<style>
	main div {
		position: absolute;
		left: 5px;
	}
</style>
