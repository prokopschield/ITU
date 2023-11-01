<script>
    export let content = [
        {name: "Jan Poledna", team:"2", points: 10 },
        {name: "Tomas Parizek", team:"2", points: 5 },
        {name: "Prokop Schield", team:"3", points: 5 },
    ];
    let choice = true;

    function jedno(){
        choice = true;
    }
    let teamSum = [];
    function team(){
        choice = false;
        let proc = {};
        teamSum = [];
        for (let index = 0; index < content.length; index++) {
            proc[content[index].team] = 0;
        }
        for (let index = 0; index < content.length; index++) {
            proc[content[index].team] += content[index].points;
        }
        for(var key in proc) {
            var value = proc[key];
            teamSum.push({team: key,points: value})
        }
        
    }
</script>

<div class="outside">
    <div class="Top">
       <b>Žebříček</b> 
    </div>
    <div class="switch">
        <button on:click={jedno}>Jednotlivci</button>
        <button on:click={team}>Týmy</button>

    </div>

    <div class="content-wraper">
        {#if choice }
        {#each content as {name, points}}
            <div class="content">
                {name} {points}
            </div>
        {/each}
        {:else}
        {#each teamSum as {team, points} }
            <div class="content">
                {team}  {points}
            </div>
        {/each}
        {/if}

    </div>
</div>

<style>
    .outside {
        position: fixed;
        bottom: 5px;
        top: 5px;
        left: 5px;
        width: 15%;
        border-radius: 25px;
        background-color: #5c5c5c;
        
    }
    .Top{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 7%;
        border-top-right-radius:  25px;
        border-top-left-radius:  25px;
        border: 3px solid #3f3f3f;
        background-color: #3f3f3f;
    }
    .switch{
        position: absolute;
        top: 8%;
        left: 0;
        right: 0;
        height: 5%;
        border-bottom: 3px solid #3f3f3f;
    }
    .content-wraper{
        position: absolute;
        top: 13%;
        left: 0;
        right: 0;
        bottom: 5px;
        overflow-y:auto;
        border-bottom-right-radius:  25px;
        border-bottom-left-radius:  25px;
    }
    .content{
        position: relative;
        top: 2px;
        left: 0;
        right: 0;
        height: 30px;
        text-align: center;
        border-bottom: 3px solid #3f3f3f;
    }
    b{
        font-size: 2.2em;
        text-align: center;
    }
</style>