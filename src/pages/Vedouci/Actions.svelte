<script lang="ts">
	import ActionBox from './ActionBox.svelte'; // Importuj komponentu ActionBox
    import ActionDeletePopUp from './ActionDeletePopUp.svelte';
	import Header from '../Header.svelte';
	import { page } from '../../lib/state';
	import { delete_action } from '../../lib/backend';

    let popupOpened = true;
    let actionToDelete : number;

    export let actions: { id: number, name: string; dateTime: Date }[] = [
        {id: 1, name: "Akce", dateTime: new Date(2023, 12, 31)},
    ];

    let searchQuery = '';

    function setActionToDelete (event : Event) {
        actionToDelete = event.detail;
    }
</script>

<main id="main">
	<header id="header">
		<Header />
	</header>

    <main>
        <button id="plusButton" on:click={() => page.set("VedouciEditAction")}><img alt="+"/></button>
        <input bind:value={searchQuery} type="text" id="search" placeholder="Vyhledávání" />

        <div id="action-list">
            {#each actions.filter(action => action.name.toLowerCase().includes(searchQuery.toLowerCase())) as filteredAction}
                <ActionBox dateTime={filteredAction.dateTime} actionName={filteredAction.name} id={filteredAction.id} on:remove={setActionToDelete}/>
            {/each}
        </div>
    </main>

    <ActionDeletePopUp isOpen={popupOpened} onConfirm={() => {popupOpened = false; delete_action(0, actionToDelete)}} onCancel={() => {popupOpened = false;}}/>
</main>

<style>
	#main {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}

	#main #header {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
	}

    #main main {
        position: absolute;
		left: 0;
		right: 0;
		top: 40px;
		bottom: 0;
    }

    #search {
        margin: 8px;
        width: calc(100% - 70px);
        position: relative;
        left: 25px;
        font-size: 25px;
    }

    #plusButton {
        position: absolute;
        left: 5px;
        top: 4px;
    }

    #action-list {
        overflow-y: auto;
        max-height: calc(100% - 40px);
        margin: 0 auto;
    }
</style>
