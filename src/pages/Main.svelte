<script>
	import MoveButton from "../lib/MoveButton.svelte";
	import { displayname } from "../lib/state";
</script>

<main>
	Vítej, {$displayname}
	<MoveButton destination="UcastniciOverview" text="Log Účastník" />
	<MoveButton destination="VedouciParticipantOverview" text="Log Vedoucí" />
	<MoveButton destination="VedouciEditActivity" text="Editace události" />
	<MoveButton destination="VedouciEditPerson" text="Editace osoby" />
</main>
