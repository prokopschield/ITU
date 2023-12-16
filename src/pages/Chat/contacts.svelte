<script lang="ts">
    export let contacts:{id:number, name:String}[];
</script>


<div class="wrap">
    {contacts}
</div>
<style>
    .wrap{
        overflow-x: hidden;
        background-color: #3f3f3f;
        border-radius: 15px;
        width: 100%;
        height: 100%;
    }
</style>