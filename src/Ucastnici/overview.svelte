<script lang="ts">
	import MoveButton from "../MoveButton.svelte";
	import Leaderboard from "./leaderboard.svelte";
	import Events from "./events.svelte";
	import { backend } from "../lib/backend";
	//replace for backend connection from here
	let content = [
		{ name: "Jan Poledna", team: "rocnik.2", points: 10 },
		{ name: "Tomas Parizek", team: "rocnik.2", points: 5 },
		{ name: "Prokop Schield", team: "rocnik.3", points: 6 },
	];
	let events: {name:string,date: Date,description:string,points:number,pointsMax:number}[] = [];
    let activities:({
            attended: {
                id: string;
                activity_id: bigint;
                attendee_id: number;
                score: number;
                timestamp: Date;
            }[];
        } & {
            id: string;
            name: string;
            camp_id: bigint;
            leader_id: bigint;
            description: string;
            points: number;
            timestamp: Date;
        })[];

	function Add() {
		content.length = content.push({ name: "New", team: "New", points: 6 });
		events.length = events.push({
			name: "New",
			date: new Date(Date.now() + 100000000),
			description: "New",
			points: NaN,
			pointsMax: 3,
		});
	}
	// to here
	async function test() {
		console.log(await backend.attendee_my_activities());
		activities = await backend.attendee_my_activities();
		/*events = activities.map((element) => {
			events.length = events.push({
				name: element.name,
				date: new Date(element.timestamp),
				description: element.description,
				points: NaN,
				pointsMax: element.points,
			});
		});*/
	}
    
</script>

<main>
	{#key content}
		<Leaderboard {content} me={content[0]} />
	{/key}
	<h1>Ucastnici</h1>

	{#key events}
		<Events {events} />
	{/key}
	<div class="logout">
		<MoveButton destination={"Acountview"} text="Detail Účtu" /><br />
		<MoveButton destination={"Auth"} text="Odhlásit se" /><br />
		<button on:click={test}>Test Add</button>
	</div>
</main>

<style>
	.logout {
		position: absolute;
		right: 20px;
		top: 10px;
	}
</style>
