<script lang="ts">
    export let sender = "Odesílatel";
    export let senderVisivle:Boolean = true;
    export let message = "Vítejte v chatu!";
    export let datetime:Date = new Date(2023,12,5,15,15,15,15);
    export let incoming:Boolean = false;

    let isHovered = false;
    function hover(){
        isHovered = true;
    }
    function notHover(){
        isHovered = false;
    }
    function reply(){
        console.log("reply");
    }
    function edit(){
        console.log("edit");
    }
</script>

<style>
.chat-frame {
    display:flex;
    flex-direction: column;
    max-width: 100%;
    width: 100%;
}
.message-frame{
    display:flex;
    flex-direction: row;
    max-width: 100%;
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
    align-self:flex-end;
    max-width: 70%;
    width: fit-content;
    padding: 10px;
    margin-right: 5px;
    background-color: #333333;
	border-radius: 40px;
    word-wrap: break-word;
    white-space: pre-wrap;
}

.sender{
    align-self: flex-start;
    color: black;
    margin-left: 15px;
    font-size: xx-small;
}
button{
    width: 30px;
    height: 30px;
    padding: 0px;
    border-radius: 100%;
    align-self: center;
    margin: 5px;
}
</style>

{#if incoming}
<div class="chat-frame" on:mouseover={hover} on:mouseout={notHover}
    on:focus={hover} on:blur={notHover} role="contentinfo">
    {#if senderVisivle}
    <div class="sender">{sender}</div>
    {/if}
    <div class="message-frame">
        <div title="{datetime.toDateString()} {datetime.toLocaleTimeString()}" class="message-sender">{message}</div>
        {#if isHovered}        
        <button on:mouseover={hover} on:mouseout={notHover}
        on:focus={hover} on:blur={notHover} on:click={reply}>R</button>
        {/if}
    </div>
</div>
{:else}
<div class="chat-frame" on:mouseover={hover} on:mouseout={notHover}
    on:focus={hover} on:blur={notHover} role="contentinfo">
    <div class="message-frame" style="flex-direction: row-reverse;">
        <div title="{datetime.toDateString()} {datetime.toLocaleTimeString()}" class="message-reciever">{message}</div>
        {#if isHovered}
        <button on:mouseover={hover} on:mouseout={notHover}
        on:focus={hover} on:blur={notHover} on:click={edit}>E</button>
        <button on:click={reply}>R</button>
        {/if}
    </div>
</div>
{/if}