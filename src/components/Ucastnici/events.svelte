<script lang="ts">
	// by Jan Poledna xpoled09
	import { backend } from "../../lib/backend";
	/**
	 * @type {{name: string,date: Date,description:string,points:number,pointsMax:number}[]}
	 */
	let events: {
		id: string;
		name: string;
		description: string;
		points: number;
		pointsMax: number;
	}[] = [];
	let past: boolean = false;
	function toggle() {
		past = !past;
	}
	let searchQuery: string = "";
	async function loadActivities() {
		//console.log(await backend.attendee_my_activities());
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
				},
			) => {
				return {
					id: element.id,
					name: element.name,
					description: element.description,
					points: element.attended[0].score,
					pointsMax: element.points,
				};
			},
		);
		events.sort((a, b) => Number(a.id) - Number(b.id));
	}
	loadActivities();
	setInterval(loadActivities, 300000);
</script>

<div class="border">
	<div class="top">
		<input type="search" placeholder="Hledat.." bind:value={searchQuery} />
		<span><i class="fa fa-search" /></span>
		<button
			class="history"
			on:click={toggle}
			style="background-color: {!past ? '#1a1a1a' : '#5c5c5c'}"
		>
			Zobrazit proběhlé aktivity?
			<input type="checkbox" bind:checked={past} />
		</button>
		<button class="refresh" on:click={loadActivities}
			><i class="fa fa-refresh" aria-hidden="true"></i></button
		>
	</div>
	<div class="events">
		{#each events.filter((event) => event.name
					.toLowerCase()
					.includes(searchQuery.toLowerCase()) || event.description
					.toLowerCase()
					.includes(searchQuery.toLowerCase())) as { name, description, points, pointsMax }}
			{#if past || isNaN(points)}
				<div class="event">
					<b>{name}</b>
					<span class="points">
						<b>
							{isNaN(points) ? "-" : points}
							/ {pointsMax}
						</b>
					</span>
					<br />
					Popis akce:<br />
					{description}
				</div>
			{/if}
		{/each}
	</div>
</div>
<link
	rel="stylesheet"
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

<style>
	input[type="search"] {
		position: fixed;
		border: none;
		font-size: 17px;
		border-radius: 10px;
		width: 500px;
		height: 35px;
		left: 300px;
		top: 10px;
		text-align: center;
	}
	.border {
		position: absolute;
		left: 300px;
		right: 200px;
		top: 0;
		bottom: 0;
	}
	.top span {
		position: fixed;
		left: 305px;
		top: 15px;
		visibility: visible;
	}
	.history {
		position: fixed;
		top: 10px;
		right: 250px;
		height: 35px;
		padding: 2px;
		width: 250px;
		align-content: center;
		border-radius: 10px;
	}
	.events {
		position: absolute;
		top: 50px;
		bottom: 50px;
		right: 0;
		left: 0;
		overflow-y: auto;
		font-size: 12px;
	}
	.event {
		position: relative;
		margin: 5px;
		background-color: #5c5c5c;
		border-radius: 10px;
		text-align: left;
		padding: 10px;
		line-height: 1;
	}
	b {
		font-size: 20px;
	}
	.points {
		position: absolute;
		right: 5px;
		top: 5px;
		text-align: right;
	}
	.refresh {
		position: fixed;
		top: 10px;
		right: 200px;
		height: 35px;
		width: 40px;
		padding: 2px;
		align-content: center;
	}
</style>
