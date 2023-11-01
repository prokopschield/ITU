<script lang="ts">
    /**
     * Spagheti code that creates a Button with @text that changes the screen to @destination.
     */
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