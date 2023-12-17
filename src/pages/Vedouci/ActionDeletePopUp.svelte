<script lang="ts">
export let isOpen: boolean;
export let onConfirm: () => void;
export let onCancel: () => void;

function handleConfirm() {
    onConfirm();
}

function handleCancel() {
    onCancel();
}
</script>

{#if isOpen}
<div class="overlay">
    <div class="popup">
    <p>Opravdu si přejete smazat akci?</p>
    <div class="buttons">
        <button on:click={handleConfirm}>Ano</button>
        <button on:click={handleCancel}>Ne</button>
    </div>
    </div>
</div>
{/if}

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .popup {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        text-align: center;
    }

    .buttons {
        margin-top: 10px;
    }

    button {
        margin: 0 5px;
        padding: 5px 10px;
        cursor: pointer;
    }
</style>  