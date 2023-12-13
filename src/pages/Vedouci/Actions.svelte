<!--<script lang="ts">
import ActionBox from './ActionBox.svelte'; // Importuj komponentu ActionBox
import MoveButton from '../../lib/MoveButton.svelte';

let actions: { name: string; dateTime: string }[] = [
    { name: 'Akce 1', dateTime: '15. prosince 2023, 10:00' },
    { name: 'Akce 2', dateTime: '16. prosince 2023, 14:30' },
    { name: 'Akce 3', dateTime: '18. prosince 2023, 09:45' },
    // Přidej další akce dle potřeby
];

// Funkce pro přidání nové akce
function addNewAction() {
    // Implementuj přidání nové akce podle potřeby
}
</script>

<style>
/*#main {
    padding: 20px;
}*/

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

#main #header div {
    position: absolute;
    left: 5px;
}

#main #header img {
    position: absolute;
    right: 5px;
}

#header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

#search {
    width: 80%;
    margin-bottom: 20px;
}

/*#add-button {
    cursor: pointer;
    font-size: 24px;
    margin-left: 10px;
}*/

#actions-list {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}
</style>

<main id="main">
    <header id="header">
        <div>
        <MoveButton destination="" text={"Akce"} />
        <MoveButton destination="ParticipantOverview" text={"Účastníci"} />
        <MoveButton destination="" text={"Vedoucí"} />
        </div>
        <img alt="UserIcon" id="user" />
    </header>

    
    <input type="text" id="search" placeholder="Vyhledávání" />

    <div id="actions-list">
        {#each actions as action}
            <ActionBox dateTime={action.dateTime} actionName={action.name}/>
        {/each}
    </div>
    

    <div id="add-button" on:click={addNewAction}>+</div>
</main>
-->


<script lang="ts">
	import ActionBox from './ActionBox.svelte'; // Importuj komponentu ActionBox
    import MoveButton from '../../lib/MoveButton.svelte';

    let actions: { name: string; dateTime: string }[] = [
        { name: 'Akce 1', dateTime: '15. prosince 2023, 10:00' },
        { name: 'Akce 2', dateTime: '16. prosince 2023, 14:30' },
        { name: 'Akce 3', dateTime: '18. prosince 2023, 09:45' },
        // Přidej další akce dle potřeby
    ];

    // Funkce pro přidání nové akce
    function addNewAction() {
        // Implementuj přidání nové akce podle potřeby
    }
</script>

<main id="main">
	<header id="header">
		<div>
			<MoveButton destination="" text={"Akce"} />
			<MoveButton destination="ParticipantOverview" text={"Účastníci"} />
			<MoveButton destination="" text={"Vedoucí"} />
		</div>
		<img alt="UserIcon" id="user" />
	</header>

    <main>
        <input type="text" id="search" placeholder="Vyhledávání" />

        <div id="actions-list">
            {#each actions as action}
                <ActionBox dateTime={action.dateTime} actionName={action.name}/>
            {/each}
        </div>
    </main>
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

	#main #header div {
		position: absolute;
		left: 5px;
	}

	#main #header img {
		position: absolute;
		right: 5px;
	}

    #main main {
        position: absolute;
		left: 0;
		right: 0;
		top: 40px;
		bottom: 0;
    }
</style>
