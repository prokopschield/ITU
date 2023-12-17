<script lang="ts">
	import ActionBox from './ActionBox.svelte'; // Importuj komponentu ActionBox
    import ActionDeletePopUp from './ActionDeletePopUp.svelte';
	import Header from '../Header.svelte';
	import { page } from '../../lib/state';

    let popupOpened = true;

    let actions: { name: string; dateTime: string }[] = [
        { name: 'Akce 1', dateTime: '15. prosince 2023, 10:00' },
        { name: 'Akce 2', dateTime: '16. prosince 2023, 14:30' },
        { name: 'Akce 3', dateTime: '18. prosince 2023, 09:45' },
        { name: 'Akce 1', dateTime: '15. prosince 2023, 10:00' },
        { name: 'Akce 2', dateTime: '16. prosince 2023, 14:30' },
        { name: 'Akce 3', dateTime: '18. prosince 2023, 09:45' },
        { name: 'Akce 1', dateTime: '15. prosince 2023, 10:00' },
        { name: 'Akce 2', dateTime: '16. prosince 2023, 14:30' },
        { name: 'Akce 3', dateTime: '18. prosince 2023, 09:45' },
        { name: 'Akce 1', dateTime: '15. prosince 2023, 10:00' },
        { name: 'Akce 2', dateTime: '16. prosince 2023, 14:30' },
        { name: 'Akce 3', dateTime: '18. prosince 2023, 09:45' },
        { name: 'Akce 1', dateTime: '15. prosince 2023, 10:00' },
        { name: 'Akce 2', dateTime: '16. prosince 2023, 14:30' },
        { name: 'Akce 3', dateTime: '18. prosince 2023, 09:45' },
        { name: 'Akce 1', dateTime: '15. prosince 2023, 10:00' },
        { name: 'Akce 2', dateTime: '16. prosince 2023, 14:30' },
        { name: 'Akce 3', dateTime: '18. prosince 2023, 09:45' },
        // Přidej další akce dle potřeby
    ];

    let searchQuery = '';

    // Funkce pro přidání nové akce
    function addNewAction() {
        // Implementuj přidání nové akce podle potřeby
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
                <ActionBox dateTime={filteredAction.dateTime} actionName={filteredAction.name}/>
            {/each}
        </div>
    </main>

    <ActionDeletePopUp isOpen={popupOpened} onConfirm={() => {popupOpened = false;}} onCancel={() => {}}/>
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
