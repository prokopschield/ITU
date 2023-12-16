<script lang="ts">
    import { getInterlocutors } from "../../lib/DMs";
    import { getDMs } from "../../lib/DMs";
    import { user } from "../../lib/state";
    import Message from "./Message.svelte";
    import {clickOutside} from './clickOutside.js';
	import Contacts from "./contacts.svelte";
	let collapsed = false;
/*
getInterlocutors() -> Promise<number[]> // získej seznam chatů
sendDM(interlocutor, message) -> Promise // pošli zprávu, kde zpráva je objekt s libovolnými vlastnostmi
getDMs(interlocutor, min_count) -> Promise<DM[]> // získej zprávy z konkrétního chatu, min_count je počet zpráv, které chceš dostat
registerInterlocutorCallback(interlocutor, callback) -> void // nastaví callback funkci pro přichozí zprávy pro daný chat
interface DM {
    id: number;
    sender_id: number;
    recipient_id: number;
    data: { // objekt, který jsi poslal v sendDM()//  }
}
*/
    function toggle() {
		collapsed = !collapsed;
	}
    function clickOut(){
        collapsed = false;
    }
    let chats: {id:number, name:String}[];
    /*
    async function getChats(){
        let chatIds = await getInterlocutors();
        console.log(chatIds);
        for(let i = 0;i<chatIds.length;i++)
        {
            //chats.push(getDMs(chatIds[i],20));
            console.log(await getDMs(chatIds[i],20));
        }
    }
    getChats();
    */
    //let chats = "Chats"
</script>
<!--Intelisence se to neliby ale jede to.-->
<span use:clickOutside on:click_outside={clickOut}>
{#if collapsed}
    <div class="extended">
        ChatName
        <button class="X" on:click={toggle}>
            X
        </button>
        <div class="messages-wrap">
            <Message senderVisivle = {true} incoming = {true}
            message = "asdvyudafyutfdsytfayfdytdftyatrdsatuadrstudytrscatyrdcaytcdrtysacdytrcsaytrcsddytrcaytrcfdytarcydtrcaytrsdytrascdytrsacdtyrcdytarcytrcdsaytrasc"
            />
            <Message senderVisivle = {false} incoming = {false}/>
             <Message senderVisivle = {true} incoming = {true}/>
             
             
        </div>
    </div>
{:else}
    <button class="collapsed" on:click={toggle}>
        <i class="fa-regular fa-comment-dots fa-flip-horizontal fa-xl" style="color: #FFFFFF;"></i>
    </button>
{/if}

<div class="contact-wrap">
    <Contacts contacts={chats}/>
</div>
</span>

<link
	rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>

<style>
    .contact-wrap{
        position: absolute;
		right: 0px;
		top: 60px;
		height: 800px;
		width: 200px;
    }
    .collapsed{
		position: absolute;
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
	.extended{
		position: absolute;
		right: 205px;
		top: 60px;
		height: 800px;
		width: 850px;
		overflow: hidden;
        background-color: #3f3f3f;
        border-radius: 15px;
	}
    .X{
        position: relative;
        right: 5px;
        top: 5px;
        width: 30px;
        height: 30px;
        float: right;
        border-radius: 100%;
        align-content: center;
        padding: 0px;
    }
    .messages-wrap{
        position:relative;
        top: 15px;
        left: 0px;
        width: 100%;
        height: 720px;
        background-color: #555555;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>