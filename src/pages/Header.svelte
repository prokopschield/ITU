<script lang="ts">
    import MoveButton from "../lib/MoveButton.svelte";
</script>

<main>
    <div>
        <MoveButton destination="" text={"Akce"} />
        <MoveButton destination="ParticipantOverview" text={"Účastníci"} />
        <MoveButton destination="" text={"Vedoucí"} />
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