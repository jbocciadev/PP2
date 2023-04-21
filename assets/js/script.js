// Create homeTeam and guestTeam as objects
let homeTeam = {
  name: "Home",
  currentScore: 0,
};

let guestTeam = {
  name: "Guest",
  currentScore: 0,
};
// Add template lineups to home and guest teams
homeTeam.lineup = createLineup();
guestTeam.lineup = createLineup();

// Wait for document to load and assigns event listeners and actions
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      let team = this.getAttribute("team");
      let points = parseInt(this.getAttribute("points"));
      let t = team[0];
      assignPoints(t, points);
    });
  }
});

// Update team name on table based on name at top of page
document.addEventListener("DOMContentLoaded", function () {
  let names = document.getElementsByClassName("team-name");
  for (let name of names) {
    name.addEventListener("change", function () {
      let team = this.getAttribute("team");
      let newName = this.value;
      if (team === "home") {
        let hTableHeader = document.getElementById("htable-header");
        hTableHeader.textContent = newName;
      } else {
        let vTableHeader = document.getElementById("vtable-header");
        vTableHeader.textContent = newName;
      }
    });
  }
});

// Custom functions

/**
 *Creates a nested array of 12 players with [player index, player *number, player name and [points scored]
 */
function createLineup() {
  let lineup = [];
  for (let i = 0; i < 12; i++) {
    lineup.push([i, i + 1, "", []]);
  }
  return lineup;
}

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

/**
 * Assigns points to each player
 */
function addPoints(team, player, points) {
  team.lineup[player][3].push(points);
}
