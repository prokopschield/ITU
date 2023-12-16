<script lang="ts">
    import MoveButton from "../lib/MoveButton.svelte";
</script>

<main>
    <div>
        <MoveButton destination="VedouciActions" text={"Akce"} />
        <MoveButton destination="VedouciParticipantOverview" text={"Účastníci"} />
        <MoveButton destination="VedouciHeadOverview" text={"Vedoucí"} />
    </div>
    <span><MoveButton destination={"Auth"} text="Odhlásit se" /></span>
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