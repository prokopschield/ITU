<script lang="ts">
	// by Jan Poledna xpoled09
	import { isEmpty } from "lodash";
	import { sendDM, getDMs } from "../../lib/DMs";
	import { registerInterlocutorCallback } from "../../lib/DMs";
	import type { DM, User } from "../../lib/DMs";
	import { user } from "../../lib/state";
	import Message from "./Message.svelte";
	import { clickOutside } from "./clickOutside.js";

	export let enabled = false;
	export let collapsed = false;
	export let currentChat: User;
	let text: string = "";
	let promise: Promise<any[]>;
	let chatArray: DM<any>[] = [];
	function toggle() {
		collapsed = !collapsed;
	}
	function clickOut() {
		collapsed = false;
	}
	async function recieveNewMes(dm: DM<any>) {
		loadMessages();
	}
	function send() {
		if (isEmpty(text)) {
			return;
		}
		sendDM(currentChat.id, { text });
		text = "";
	}
	async function loadMessages() {
		chatArray = [];
		promise = getDMs(currentChat.id, 20);
		registerInterlocutorCallback(currentChat.id, recieveNewMes);
	}
	$: if (collapsed == true) {
		loadMessages();
	}
</script>

<!--Intelisence se to neliby ale jede to.-->
<span use:clickOutside on:click_outside={clickOut}>
	{#if enabled}
		{#if collapsed}
			<div class="extended">
				{currentChat.displayname}
				<button class="X" on:click={toggle}> X </button>
				<div class="messages-wrap">
					{#await promise}
						<i class="fa-solid fa-arrows-rotate fa-spin"></i>
					{:then messages}
						<!--
                        {console.log(messages)}
                        -->
						{#each messages.reverse() as message}
							<Message
								incoming={message.sender_id != user.value.id}
								sender={currentChat.displayname}
								message={message.data.text}
								message_id={message.id}
								datetime={new Date(message.data.timestamp)}
							/>
						{/each}
					{:catch error}
						<p style="color: red">{error.message}</p>
					{/await}

					{#each chatArray as message}
						<Message
							incoming={message.sender_id == currentChat.id}
							sender={currentChat.displayname}
							message={message.data}
							message_id={message.id}
						/>
					{/each}
				</div>
				<div class="writebox">
					<form on:submit|preventDefault={send}>
						<input type="text" bind:value={text} />
						<button class="send">
							<i class="fa-regular fa-paper-plane"></i>
						</button>
					</form>
				</div>
			</div>
		{:else}
			<button class="collapsed" on:click={toggle}>
				<i
					class="fa-regular fa-comment-dots fa-flip-horizontal fa-xl"
					style="color: #FFFFFF;"
				></i>
			</button>
		{/if}
	{/if}
</span>

<style>
	input[type="text"] {
		border: none;
		font-size: 20px;
		border-radius: 10px;
		height: 100%;
		text-align: center;
		background-color: #222222;
		width: 95%;
		word-wrap: break-word;
		white-space: pre-wrap;
		margin: 0;
	}
	.send {
		height: 30px;
		width: 30px;
		border-radius: 10px;
		padding: 0;
		margin: 0;
		align-content: center;
	}
	.writebox {
		width: 100%;
		position: relative;
		top: 5px;
		width: 100%;
		bottom: 1px;
		background-color: #3f3f3f;
	}
	.collapsed {
		position: fixed;
		right: 205px;
		top: 810px;
		height: 50px;
		width: 50px;
		overflow: hidden;
		background-color: #3f3f3f;
		border-radius: 100%;
		align-content: center;
		padding: 0px;
	}
	.extended {
		position: fixed;
		right: 205px;
		top: 60px;
		height: 800px;
		width: 850px;
		overflow: hidden;
		background-color: #3f3f3f;
		border-radius: 15px;
	}
	.X {
		position: relative;
		right: 2px;
		top: 2px;
		width: 25px;
		height: 25px;
		float: right;
		border-radius: 100%;
		align-content: center;
		padding: 0px;
	}
	.messages-wrap {
		position: relative;
		top: 5px;
		left: 0px;
		width: 100%;
		height: 740px;
		background-color: #555555;
		overflow-x: hidden;
		overflow-y: auto;
	}
</style>
