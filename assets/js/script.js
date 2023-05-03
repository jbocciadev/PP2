
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

let teams = [homeTeam, guestTeam]; //Adding teams to array so they can be accessed dynamically

// Wait for document to load and assign event listeners and actions
//Update team names based on input at top of page
document.addEventListener("DOMContentLoaded", function () {
  // Update team name on table based on name at top of page
  let names = document.getElementsByClassName("team-name");
  for (let name of names) {
    name.addEventListener("change", function () {
      let team = this.getAttribute("data-team");
      let newName = this.value;
      if (team === "home") {
        document.getElementById("htable-header").textContent = newName;
        teams[0].name = newName;
      } else {
        document.getElementById("gtable-header").textContent = newName;
        teams[1].name = newName;
      }
    });
  }

  //Insert table rows

  loadTables();

  //Add event listeners to add points as buttons are clicked
  let buttons = document.getElementsByTagName("button");
  for (let button of buttons) {
    button.addEventListener("click", function () {
      let teamIndex = this.getAttribute("data-ti");
      let points = parseInt(this.getAttribute("points"));
      let player = parseInt(this.getAttribute("player-index"));
      addPoints(teamIndex, player, points);
    });
  }

  //On Player number change, check for validity and update object
  let playerNumbers = document.getElementsByName("player-no");
  for (let pn of playerNumbers) {
    pn.addEventListener("change", function () {
      let n = this.value;
      let teamIndex = parseInt(this.getAttribute("t"));
      let playerIndex = parseInt(this.getAttribute("pi"));
      if (checkPlayerNo(n) === 1) {//If the check fails, it returns 1. If 1, access attay and don't assign a new number, else access player number in object and update
        this.value = teams[teamIndex].lineup[playerIndex][1]; 
      } else {
        teams[teamIndex].lineup[playerIndex][1] = parseInt(n);
      }
    });
  }

  //On player name change, update name in player's array
  let playerNames = document.getElementsByName("player-name");
  for (let pName of playerNames) {
    pName.addEventListener("change", function () {
      let newName = this.value;
      let teamIndex = parseInt(this.getAttribute("team-index"));
      let playerIndex = parseInt(this.getAttribute("player-index"));
      teams[teamIndex].lineup[playerIndex][2] = newName;
    });
  }

  //Remove translucid white div after page has loaded
  let loadingContainer = document.getElementById("loading-container");
  loadingContainer.remove();

});


// Custom functions

/**
 *Creates a nested array of 12 players with [player index, player *number, player name, [points scored] and running tally
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
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 12; j++) {
      let playerPoints = teams[i].lineup[j][4];
      let parent = "player-" + i + "-" + j;
      let a = document.querySelector(`#${parent} :nth-child(3)`);
      a.innerHTML = playerPoints;
    }
  }
}

function checkPlayerNo(number) {
  if (isNaN(number)) {
    //check for non-number values
    alert("Please input a number between 0 and 99");
    return 1;
  } else {
    if (number < 0 || number > 99) {
      //check for valid numeric value
      alert("Please input a number between 0 and 99");
      return 1;
    }
  }
}

/**
 * Displays team name on name change
 */

/**
 * Displays player name on namechange
 */

//Add script to display modal(s)?

/**
 * Loads tables on stats
 */
function loadTables() {
  let tbodies = document.getElementsByClassName("team-table");
  for (let tb of tbodies) {
    let team = 0;
    tb.getAttribute("id") === "home-team" ? (team = 0) : (team = 1);
    let contents = "";
    //Iterate through 12 players to create the rows for the tables
    for (let i = 0; i < 12; i++) {
      let row = `<tr id="player-${team}-${i}">
        <td><input class="player-no" t="${team}" pi="${i}" name="player-no" type="text" pattern="[0-9]" maxlength="2" value="${
        i + 1
      }"></td>
        <td><input class="player-name" type="text" team-index="${team}" player-index="${i}" name="player-name" maxlength="20" placeholder="Name" value="Name"></td>
        <td>0</td>
        <td id="btn-container">
            <div class="buttons-div">
            <button tTeam="homeTeam" team="home" data-ti="${team}" points="1" player-index="${i}" class="btn-1p">
                +1
            </button>
            <button tTeam="homeTeam" team="home" data-ti="${team}" points="2" player-index="${i}" class="btn-2p">
                +2
            </button>
            <button tTeam="homeTeam" team="home" data-ti="${team}" points="3" player-index="${i}" class="btn-3p">
                +3
            </button>
            </div>
        </td>
        </tr>
        `;
      contents += row;
    }
    tb.innerHTML = contents;
  }
}
