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

let teams = [homeTeam, guestTeam]; //Adding teams to array so it can be accessed dynamically

// Wait for document to load and assign event listeners and actions
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {

      let team = this.getAttribute("team");
      let points = parseInt(this.getAttribute("points"));
      let t = team[0];
      assignPoints(t, points);
      let tTeam = this.getAttribute("tTeam");
      let player = parseInt(this.getAttribute("player-index"));

      tTeam === "homeTeam" ? t = 0 : t = 1; //Team 0 is home, team 1 is away
      addPoints(t, player, points);

      // tTeam === "homeTeam" ? homeTeam.lineup[player][3].push(points) : guestTeam.lineup[player][3].push(points);
      // teams[0].lineup[player][4] === 'zero' ? teams[0].lineup[player][4] = points : teams[0].lineup[player][4] += points;


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
  //initScore is the player's initial score. It is a string token to circumvent the NaN issue of operating with value '0'
  let initScore = 0;
  for (let i = 0; i < 12; i++) {
    lineup.push([i, i + 1, "", [], initScore]);
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
 * Assigns points to each player and team
 * team = 0 is the home team, team = 1 is the guest team
 */
function addPoints(team, player, points) {

  //Accessing team's running points tally, testing for zero and adding new points scored.
  // teams[team].currentScore === 'zero' ? teams[team].currentScore = points : 
  teams[team].currentScore += points;

  //Adding points scored to the array of points scored by the player
  teams[team].lineup[player][3].push(points);

  //Accessing player's running tally and testing for zero. Adding new points scored.
  // teams[team].lineup[player][4] === 'zero' ? teams[team].lineup[player][4] = points :
   teams[team].lineup[player][4] += points;

  displayPoints();
}

/**
 * Displays teams total points and players running tally
 */
function displayPoints() {
  //Display teams running totals
  let homeScore = document.getElementById("hteam-points");
  homeScore.textContent = teams[0].currentScore;
  let guestScore = document.getElementById("gteam-points");
  guestScore.textContent = teams[1].currentScore;

  //Display players running totals
  for (let i=0; i<2; i++) {
    for (let j=0; j<13; j++) {      
      playerPoints = teams[0].lineup[j][4];
      let parent = 'player-' + i + '-' + j;
      let a = document.querySelector(`#${parent} :nth-child(3)`);
      a.textContent = playerPoints;
      console.log(a.textContent);
  }}


}

/**
* Displays team name on name change
*/

/**
* Displays player name on namechange
*/


//Add script to display modal(s)?


