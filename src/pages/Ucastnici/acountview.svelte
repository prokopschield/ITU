<script lang="ts">
	// by Jan Poledna xpoled09
	import MoveButton from "../../lib/MoveButton.svelte";
	import * as state from "../../lib/state";
	//let me = { name: "Jan", team: "rocnik 2", points: 10 };
	let newme = { name: "" };
	state.username.subscribe;
	function send() {
		//console.log(newme.name);
	}
</script>

<div class="back">
	<MoveButton destination={"Overview"} text="Back" />
</div>
<div class="logout">
	<MoveButton destination={"Auth"} text="Odhlásit se" />
</div>
<div class="wrap">
	<div class="top">
		<span class="name"> <b>{state.username}<b /></b></span>
		<span class="points">
			<b>Body: 0</b>
		</span>
	</div>
	<div class="left">
		<br />
		<br />
	</div>
	<div class="window">
		<div class="send">
			<button on:click={send}>Uložit</button>
		</div>
		Jmeno:
		<input
			type="text"
			bind:value={newme.name}
			placeholder="enter your name"
		/><br />
	</div>
</div>

<style>
	.back {
		position: absolute;
		left: 15px;
		top: 15px;
	}
	.logout {
		position: absolute;
		right: 15px;
		top: 15px;
	}
	.wrap {
		position: absolute;
		top: 70px;
		left: 50px;
		right: 50px;
		bottom: 50px;
		border-radius: 25px;
		background-color: #5c5c5c;
	}
	.top {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 50px;
		border-top-right-radius: 25px;
		border-top-left-radius: 25px;
		border: 3px solid #3f3f3f;
		background-color: #3f3f3f;
		padding-left: 20px;
		padding-right: 20px;
	}
	.left {
		position: absolute;
		top: 54px;
		left: 0;
		width: 200px;
		bottom: 0;
		border-bottom-left-radius: 25px;
		background-color: #464646;
		padding-left: 20px;
		padding-right: 20px;
	}
	.name {
		position: absolute;
		left: 20px;
		right: 50%;
		top: 0;
		bottom: 0px;
		text-align: left;
		font-size: 35px;
	}
	.points {
		position: absolute;
		left: 50%;
		right: 20px;
		top: 0;
		bottom: 0px;
		text-align: right;
		font-size: 35px;
	}
	.window {
		position: absolute;
		top: 54px;
		right: 0;
		left: 250px;
		bottom: 0;
		padding: 10px;
		text-align: left;
		font-size: 35px;
	}
	.window input {
		height: 35px;
		border-radius: 10px;
		border: none;
		font-size: inherit;
	}
	.send {
		position: absolute;
		right: 20px;
		bottom: 20px;
		font-size: 35px;
	}
</style>
