<script lang="ts">
	import { locale } from "../lib/locale";
	import { logout } from "../lib/state";

	const { LOG_OUT } = locale;
</script>

<button on:click={logout}> {$LOG_OUT} </button>
