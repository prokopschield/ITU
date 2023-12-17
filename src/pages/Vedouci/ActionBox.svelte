<script lang="ts">
	import { page } from "../../lib/state";

    export let actionName = 'Název akce';
    export let dateTime : Date;
    export let id : number;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
</script>

<style>
.action-box {
    position: relative;
    border: 1px solid #ccc;
    padding: 10px;
    width: calc(100% - 20px); /* změna šířky na 100% */
    text-align: center;
    box-sizing: border-box; /* zajistí, že padding nebude zvyšovat celkovou šířku */
}

.action-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.date-time {
    font-size: 14px;
}

#icons {
    position: absolute;
    right: 0;
    top: 0;
}
</style>

<button class="action-box" on:click={() => page.set("VedouciEditAction")}>
    <div id="icons">
        <button on:click={(event) => {event.stopPropagation(); page.set("VedouciEditAction")}}><i class="fa-solid fa-pen-to-square"></i></button>
        <button on:click={(event) => {event.stopPropagation(); dispatch("remove", id);}}><i class="fa-solid fa-trash-can"></i></button>
    </div>
    <div class="action-name">{actionName}</div>
    <div class="date-time">{dateTime}</div>
</button>