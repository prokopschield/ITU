<script>
    export let receiver = "Příjemce";
    export let sender = "Odesílatel";
    export let message = "Vítejte v chatu!";
    export let datetime = "11. prosince 2023, 14:30"; // Přizpůsobte si podle potřeby
</script>

<style>
.chat-frame {
    border: 1px solid black;
    padding: 10px;
    display: flex;
    flex-direction: column;
    max-width: 400px; /* Přizpůsobte si podle potřeby */
}

.header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.message {
    flex: 1;
    padding: 10px;
    border: 1px solid black;
    margin-bottom: 10px;
}

.datetime {
    align-self: flex-end;
    color: black;
}
</style>

<div class="chat-frame">
    <div class="header">
        <div class="receiver">{receiver}</div>
        <div class="sender">{sender}</div>
    </div>
    <div class="message">{message}</div>
    <div class="datetime">{datetime}</div>
</div>