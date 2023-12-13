<script lang="ts">
    export let actionName = 'Název akce';
    export let dateTime = '12. prosince 2023, 14:30';
</script>

<style>
.action-box {
    position: relative;
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%; /* změna šířky na 100% */
    text-align: center;
    box-sizing: border-box; /* zajistí, že padding nebude zvyšovat celkovou šířku */
}

.action-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
}

.date-time {
    font-size: 14px;
}

#icons {
    position: absolute;
    right: 0;
    top: 0;
}
</style>

<div class="action-box">
    <div id="icons">
        <img alt="change" />
        <img alt="delete" />
    </div>
    <div class="action-name">{actionName}</div>
    <div class="date-time">{dateTime}</div>
</div>