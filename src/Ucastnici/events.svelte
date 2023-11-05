<script lang="ts">
    /**
	 * @type {{name: string,date: Date,description:string,points:number,pointsMax:number}[]}
	 */
    export let events: { name: string; date: Date; description: string; points: number; pointsMax: number; }[] = [];
    events.sort((a,b)=>a.date.getDate()-b.date.getDate());
    let past:boolean = false;
    /**
	 * @type {Date[]}
	 */
    let usedDates = [];
    /**
	 * @param {Date} _date
	 */
    function separator(_date: Date){
        
        return false;
    }
</script>

<div class="border">
    <div class="top">
        <input type="search" placeholder="Search..">
        <span><i class="fa fa-search"></i></span>
        <div class="history" style="background-color: {!past?"#1a1a1a":"#5c5c5c"}">
            <b>Historie</b>
            <input type="checkbox" bind:checked={past} />
        </div>
        
    </div>
    <div class="events">
        {#each events as {name,date,description,points,pointsMax} }
            {#if date>=new Date(new Date().setHours(0,0,0,0)) || past}
            {#if separator(date)}
                True
            {/if}
            <div class="event">
                <b>{name}</b>
                <span class="points">
                    <b>
                    {isNaN(points)?"-":points}
                    / {pointsMax}
                    </b>
                </span>
                <br>
                {date.toLocaleDateString()} {date.toLocaleTimeString()}<br>
                Popis akce:<br>
                {description}
            </div>
            {/if}
        {/each}
    </div>
</div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
    input[type=search] {
        position: fixed;
        border: none;
        font-size: 17px;
        border-radius: 10px;
        width: 500px;
        height: 35px;
        left:300px;
        top:10px;
        text-align: center;
    }
    .border{
        position: absolute;
        left:300px;
        right:200px;
        top:0;
        bottom: 0;
    }
    .top span{
        position: fixed;
        left:305px;
        top:15px;
        visibility: visible;
    }
    .history{
        position:fixed;
        margin: 10px;
        right: 200px;
        height: 35px;
        padding: 2px;
        align-content: center;
        border-radius: 10px;
    }
    .events{
        position: absolute;
        top:50px;
        bottom: 50px;
        right: 0;
        left: 0;
        overflow-y:auto;
        font-size: 12px;
    }
    .event{
        position: relative;
        margin: 5px;
        background-color: #5c5c5c;
        border-radius: 10px;
        text-align: left;
        padding: 10px;
        line-height: 1;
    }
    b{
        font-size: 20px;
    }
    .points{
        position:absolute;
        right: 5px;
        top:5px;
        text-align: right;
    }
</style>