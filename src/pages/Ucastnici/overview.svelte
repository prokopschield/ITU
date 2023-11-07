<script lang="ts">
	import MoveButton from "../../lib/MoveButton.svelte";
	import Leaderboard from "./leaderboard.svelte";
	import Events from "./events.svelte";
	import { backend } from "../../lib/backend";
	//replace for backend connection from here
	let content = [
		{ name: "Jan Poledna", team: "rocnik.2", points: 10 },
		{ name: "Tomas Parizek", team: "rocnik.2", points: 5 },
		{ name: "Prokop Schield", team: "rocnik.3", points: 6 },
	];
	// to here
	let events: {
		name: string;
		date: Date;
		description: string;
		points: number;
		pointsMax: number;
	}[] = [];
	async function test() {
		console.log(await backend.attendee_my_activities());
		let { activities } = await backend.attendee_my_activities();
		events = activities.map(
			(
				element: {
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
				}
			) => {
				return {
					name: element.name,
					date: new Date(element.timestamp),
					description: element.description,
					points: NaN,
					pointsMax: element.points,
				};
			}
		);
	}
	test();
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
		<button on:click={test}>Obnov Aktivity</button>
	</div>
</main>

<style>
	.logout {
		position: absolute;
		right: 20px;
		top: 10px;
	}
</style>
