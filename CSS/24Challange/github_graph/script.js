function generateRandomContributionState() {
    const contributions = [];
    const levels = [0, 0, 0, 2, 6, 8];
    for (let i = 0; i < 52; i++) {

        const week = [];

        for (let j = 0; j < 7; j++) {
            week.push(levels[Math.floor(Math.random() * levels.length)]);
        }
        contributions.push(week);
    }
    return contributions;
}
function makeGraph() {
    const graph = document.querySelector(".graph");

    if (!graph) {
        console.error("Graph element not found in the DOM");
        return;
    }

    const contributions = generateRandomContributionState();

    contributions.forEach((week, weekIndex) => {

        // create an li for each week and  add to graph ul
        const graphWeek = document.createElement("ul");
        graphWeek.classList.add(`week-${weekIndex + 1}`, "week");

        week.forEach(level => {
            const square = document.createElement("li");
            square.classList.add("square");
            square.dataset.value = level;
            graphWeek.appendChild(square); // Append square to graphWeek
        });

        graph.appendChild(graphWeek);

    });

    //create a square for each contribution array and assign a value
    // Append graphWeek to the main graph
}
// Ensure DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    makeGraph();
});
