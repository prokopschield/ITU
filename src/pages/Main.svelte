<script>
	import MoveButton from "../lib/MoveButton.svelte";
	import { displayname } from "../lib/state";
</script>

<main>
	Vítej, {$displayname}
	<MoveButton destination="Overview" text="Log Účastník" />
	<MoveButton destination="ParticipantOverview" text="Log Vedoucí" />
	<MoveButton destination="EditAction" text="Editace události" />
	<MoveButton destination="EditPerson" text="Editace osoby" />
</main>
