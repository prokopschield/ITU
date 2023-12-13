<script lang="ts">
let children: string[] = ["Child 1", "Child 2", "Child 3", "Child 4", "Child 5"];
let actions: string[] = ["Action 1", "Action 2", "Action 3"];
let tableData: { name: string; points: number[] }[] = initializeTableData();

function initializeTableData(): { name: string; points: number[] }[] {
    return children.map((child) => ({
        name: child,
        points: actions.map(() => 0), // Počáteční body pro každou akci jsou 0
    }));
}

function updatePoints(childIndex: number, actionIndex: number, value: number) {
    tableData[childIndex].points[actionIndex] = value;
}

function calculateRowTotal(points: number[]): number {
    return points.reduce((acc, val) => acc + val, 0);
}

function calculateColumnTotal(actionIndex: number): number {
    return tableData.reduce((acc, child) => acc + child.points[actionIndex], 0);
}
</script>

<style>
/* Styly pro tabulku, můžete upravit podle potřeby */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 10px 0;
}

th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: light dark;
}

tr:hover {
    background-color: rgb(46, 46, 46);
}
</style>

<table>
    <thead>
        <tr>
            <th>Name</th>
            {#each actions as action}
                <th>{action}</th>
            {/each}
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        {#each tableData as { name, points }, childIndex}
            <tr>
                <td>{name}</td>
                {#each points as point, actionIndex}
                    <td>
                        <input type="number" bind:value={point} on:input={() => updatePoints(childIndex, actionIndex, +point)} />
                    </td>
                {/each}
                <td>{calculateRowTotal(points)}</td>
            </tr>
        {/each}
    </tbody>
</table>