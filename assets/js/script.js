/*
1 Wait for doc load and add event listeners to buttons
2 Create different workflows per button clicked (try use switch)
 - Pull current score and add the points (colour change?) MVP
 - Open popup to select player. add points to player
 - 
*/

/**
 * Waits for document to load and assigns event listeners and actions
 */
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
for (let button of buttons) {
    button.addEventListener("click", function() {
        switch (this.getAttribute("data-type")) {
            case "h1":
                assignPoints("h", 1);
                break;
            case "h2":
                assignPoints("h", 2);
                break;
            case "h3":
                assignPoints("h", 3);
                break;
            case "v1":
                assignPoints("v", 1);
                break;
            case "v2":
                assignPoints("v", 2);
                break;
            case "v3":
                assignPoints("v", 3);
        }
    })
}
})


/**
 * Retrieves current score and adds points accordingly
 */
function assignPoints(team, points) {
    let elementId = team + "team-points";
    let score = document.getElementById(elementId);
    let scorepoints = parseInt(score.textContent);
    let newScore = scorepoints + points;
    score.textContent = newScore;
}