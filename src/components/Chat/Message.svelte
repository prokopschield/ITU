<script lang="ts">
	// by Jan Poledna xpoled09
	import { isEmpty } from "lodash";
	import { deleteMessage, editMessage } from "../../lib/DMs";

	export let message_id: number = 0;
	export let sender: String = "Odesílatel";
	export let message = "Vítejte v chatu!";
	export let datetime: Date = new Date(2023, 12, 5, 15, 15, 15, 15);
	export let incoming: Boolean = false;

	let edit = false;
	let isHovered = false;
	function hover() {
		isHovered = true;
	}
	function notHover() {
		isHovered = false;
	}
	function deleteMessageTrigger() {
		//volani backendove funkce na mazani zprav
		deleteMessage(message_id);
	}
	function startEditing() {
		edit = true;
	}
	function init(el: any) {
		el.focus();
	}
	function updateMessage() {
		let text = message;
		//volani backendove funkce na upravu zprav
		editMessage(message_id, { text });
		edit = false;
	}
</script>

{#if !isEmpty(message)}
	{#if incoming}
		<div
			class="chat-frame"
			on:mouseover={hover}
			on:mouseout={notHover}
			on:focus={hover}
			on:blur={notHover}
			role="contentinfo"
		>
			<div class="sender">{sender}</div>
			<div class="message-frame">
				<div
					title="{datetime.toDateString()} {datetime.toLocaleTimeString()}"
					class="message-sender"
				>
					{message}
				</div>
			</div>
		</div>
	{:else}
		<div
			class="chat-frame"
			on:mouseover={hover}
			on:mouseout={notHover}
			on:focus={hover}
			on:blur={notHover}
			role="contentinfo"
		>
			<div class="message-frame" style="flex-direction: row-reverse;">
				<div
					title="{datetime.toDateString()} {datetime.toLocaleTimeString()}"
					class="message-reciever"
				>
					{#if !edit}
						{message}
					{:else}
						<form on:submit|preventDefault={updateMessage}>
							<input
								type="text"
								bind:value={message}
								use:init
								on:blur={() => (edit = false)}
							/>
						</form>
					{/if}
				</div>
				<button
					style="visibility: {isHovered ? 'visible' : 'hidden'};"
					on:click={startEditing}
				>
					<i class="fa-regular fa-pen-to-square fa-xs"></i></button
				>
				<button
					style="visibility: {isHovered ? 'visible' : 'hidden'};"
					on:click={deleteMessageTrigger}
				>
					<i class="fa-regular fa-trash-can fa-xs"></i>
				</button>
			</div>
		</div>
	{/if}
{/if}

<style>
	.chat-frame {
		display: flex;
		flex-direction: column;
		max-width: 100%;
		width: 100%;
		padding-top: 1px;
	}
	.message-frame {
		display: flex;
		flex-direction: row;
		max-width: 100%;
	}
	input[type="text"] {
		font-size: 17px;
	}

	.message-sender {
		max-width: 70%;
		width: fit-content;
		padding: 10px;
		margin-left: 5px;
		background-color: #333333;
		border-radius: 40px;
		word-wrap: break-word;
		white-space: pre-wrap;
	}

	.message-reciever {
		align-self: flex-end;
		max-width: 70%;
		width: fit-content;
		padding: 10px;
		margin-right: 5px;
		background-color: #333333;
		border-radius: 40px;
		word-wrap: break-word;
		white-space: pre-wrap;
	}

	.sender {
		align-self: flex-start;
		color: black;
		margin-left: 15px;
		font-size: xx-small;
	}
	button {
		width: 30px;
		height: 30px;
		padding: 0px;
		border-radius: 100%;
		align-self: center;
		margin: 0px;
		background: local;
		color: #333333;
	}
</style>
