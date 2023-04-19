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
            let team = this.getAttribute("team");
            let points = parseInt(this.getAttribute("points"));
            let t = team[0];
            assignPoints(t,points);
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