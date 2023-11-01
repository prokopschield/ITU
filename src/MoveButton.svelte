<script lang="ts">

    export let destination;
    export let text;
    function foo() {
            document.getElementById("app").innerHTML = '';
             new destination({
             target: document.getElementById("app"),
        })
    }
</script>
<button on:click={foo}>{text}</button>