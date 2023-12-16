<script lang="ts">
    import MoveButton from "../lib/MoveButton.svelte";
</script>

<main>
    <div>
        <MoveButton destination="VedouciActions" text={"Akce"} />
        <MoveButton destination="VedouciParticipantOverview" text={"Účastníci"} />
        <MoveButton destination="VedouciHeadOverview" text={"Vedoucí"} />
    </div>
    <img alt="UserIcon" id="user" />
</main>

<style>
    main div {
		position: absolute;
		left: 5px;
	}

	main img {
		position: absolute;
		right: 5px;
	}
</style>