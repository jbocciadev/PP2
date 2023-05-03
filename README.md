# [Score!](https://jbocciadev.github.io/PP2_score/)

Score! is a client-based web application that aims at resolving a real-world problem: supplying a simple-yet-useful scoreboard for basketball games where there is no scoreboard available.

![Responsive Mockup](/assets/media/score_amiresponsive.PNG)

Score! is a fully-responsive website that is easy to use and follow instinctively. It resembles a sports hall scoreboard and maintains the aesthetics throughout for ease of navigation and a better user experience.

## Features

- ### __Title Tab__

  - The tite tab displays an icon with the image of a  red letter S in a black background, resembling the scoreboard's points display in the site.

![Title tab with favicon](/assets/media/title_with_favicon.PNG)

- ### __Loading Banner__

  - In order to ensure a better user experience and to avoid issues with users triggering event listeners at an early stage, a "Loading..." banner has been implemented.

![Loading Banner](/assets/media/loading_banner.PNG)

- ### __The scores Area__

  - As the first thing the user sees when opening the page, the "scores" area displays both the home and the guest teams' names, which were implemented as imputs so the user can update these to suit their needs, and their respective numeric scores.
  - The teams names in yellow, and the scores in red were designed to maintain the page's theme.

![Scores Area](/assets/media/score_area.PNG)

- ### __The Stats Area__

  - The "Stats" area carries out a double function. First, it acts as a dislay where each player's running tally of points can be clearly seen. Second, it contains the +1, +2 and +3 points buttons that will increment the player's tally and the team's score by that many points.
  - In order to provide a better user experience, the player's number and name were implemented as input fields, allowing the user to customize the contents with information that is relevant at the moment of using the page.
  - As an additional feature, the positioning of the buttons has been done altering the normal sequence (ie, 1, 2, 3) in favour of a more functional (3, 1, 2) arrangement, thus placing the +2 button on the outer part of the table, and the +1 and +3 buttons to its left, according to the frequency they'd be used in a basketball match (+2 is expected to be the most frequently used, followed by +1 and +3 in that order).

![Stats Area](/assets/media/stats_area.PNG)

- ### __The Footer__ 

  - The footer section includes the page's logo and links to the relevant social media sites for Score!. The links will open to a new tab to allow easy navigation for the user. 
  - There is also a footnote with the author's details and links to his gitHub profile and Code Institute's main site.
  - The footer is valuable to the user as it encourages them to keep connected via social media.

![Footer]( /assets/media/footer.PNG)

### __Future development opportunities__

- Timer
  - In a future version, an adjustable timer with a start/stop function would be a good asset.
- Quarters counter
  - Along with the timer, a custom quarter counter would also provide relevant information to the user.
- Fouls counters
  - Another interesting feature to include would be adding a foults counter for the players. This way, the user can clearly see if the limit has been breached and act accordingly.
- Game/Player stats report
  - The manner in which the points are stored in easily accessible variables would allow for the implementation of player/team stats reports to be presented to the user with a simple click.
- Step-back button
   - An additional array can be created that stores the buttons pressed and an "undo last" button can be implemented where the last item of that array can be accessed and undo any mistakes without needing to refresh the whole page.


## Design Principles
Since the aim of this site is to provide a solution to a real-world problem, the page needed to be clearly identifiable. Basing design decisions on a physical scoreboard seemed the most reasonable approach.

### Inspiration
  ![Inspiration](/assets/media/inspiration_img.jpeg)

### Site structure
  #### Single-page site
  ![Score_Wireframe](/assets/media/score_wireframe.PNG)

### Colour palette
  ![Colour palette](/assets/media/score_palette.PNG)

## Requirements
   - User

| As a user I want to be able to |
| --- |
| Update the teams names |
| See the current scores |
| See each player's points tally |
| Update each player's number |
| Assign points by +1, +2 and +3 points |
| Use this scoreboard in different devices |
 
   - Developer

| As a developer I want to ensure that |
| --- |
| All items align correctly |
| Fonts, font sizes and colours are consistent throughout the page |
| The layout is clear and does not lead to confusion |
| Buttons are not actionable until the page is loaded completely |
| Tables are loaded correctly (12 players numbered from 1 to 12 with their respective points and buttons) |
| Buttons assign the correct amount of points to the correct team and player |


## Testing 
Based on the data presented by [Statcounter](https://gs.statcounter.cm/browser-market-share), the browsers selected for testing are:
  - Chrome.
  - Safari.
  - Edge.
  - Firefox.
  - Chrome for mobile.
  - Safari for mobile.

### __Site elements:__
  - #### Favicon
    - Check that the favicon is displayed correctly in different web browsers.
  
  - #### Loading banner
    - Check that the loading banner is presented and removed as designed in different devices and browsers.

  - #### Scores area
    - Check that fonts and colours are displayed correctly and consistently.
    - Check that inputs (team names) are functioning correctly and updating the tables headers as per design.
    - Check that scores are correct and accurate to each team.

  - #### Stats area
    - Check that player numbers are displayed correctly, can be updated and that validation is triggered (only numbers 0-99 are allowed).
    - Check that players names are displayed correctly and can be updated.
    - Check that player points tallies are displayed correctly and that their values are accurate.
    - Check that +3, +1 and +2 buttons are displayed correctly and that they assign the correct amount of points to both the player and team.
    - Check that player name, number, list of points scored and running tally are stored correctly in their respective arrays and are accessible by their player-index value.

  - #### Footer links
    - Check that hyperlinks in the foter work correctly:
      - The url is correct.
      - The link is opened in a new page.

   - #### Requirements:
     - User

| As a user I want to be able to |
| --- |
| Update the teams names - OK |
| See the current scores - OK |
| See each player's points tally - OK |
| Update each player's number - OK |
| Assign points by +1, +2 and +3 points - OK |
| Use this scoreboard in different devices - OK |
 
 - Developer:

| As a developer I want to ensure that |
| --- |
| All items align correctly - OK |
| Fonts, font sizes and colours are consistent throughout the page - OK |
| The layout is clear and does not lead to confusion - OK |
| Buttons are not actionable until the page is loaded completely - OK |
| Tables are loaded correctly (12 players numbered from 1 to 12 with their respective points and buttons) - OK |
| Buttons assign the correct amount of points to the correct team and player - OK |

    

### __Responsive design__
  - Check that the various elements on the site are displayed correctly and adapt based on the size of the screen they are viewed in:
    - Desktop.
    - Tablet.
    - Mobile.


### __Code validation__

No errors were found. All warning messages presented by the validators were reviewed and the code is working as expected.

  #### HTML validation 
  ![](/assets/media/html_validation.PNG)
   - No errors found.

  #### CSS validation 
  ![](/assets/media/css_validation.PNG)
  - One warning found relating to border and background colours being the same in an input field. This was a design decision and done intentionally.

  #### JS validation 
  ![](/assets/media/js_validation.PNG)
  - Five warnings found. Four of these are down to functions being defined inside loops (adding event listeners to multiple similar items). The fifth warning can be ignored as the validator expected something different to what was passed, a ternary expression.


### __Performance Tests (Lighthouse)__
  - Desktop page 
  
   ![Desktop page](/assets/media/score_lighthouse_test_desktop.JPG)

  - Mobile page 
  
  ![Mobile page](/assets/media/score_lighthouse_test.JPG)

  - Issues:
      - Performance 83% (desktop):
    This issue is due to "Page prevented back/forward cache restoration". Additionally, this error does not appear when testing for mobile. It is the developer's view that this issue does not apply to the expected use of the page and it is outside the scope of this assignment.

    - Accessibility 89%:
    As with any scoreboard, Score! is a visual reference. Adding labels to the input elements would only hinder the standard user experience without improving the experience to users of page readers. It is the developer's view that, since the page is a visual aid for users without visual impairment, this would be outside the scope for this site.



## Git and Deployment

### Git Hub, Gitpod and Code Anywhere
The development process was carried out on the [Code Anywhere](https://app.codeanywhere.com) platform, with occasional use of the [Gitpod](https://www.gitpod.io/) platform where the former was unavailable. The repository for Score! is hosted in [Jbocciadev score repository](https://github.com/jbocciadev/pp2_score).

Throughout development, the below commands were utilised to capture and store changes:
```
git add .
git commit -m "Message in quotation marks."
git push
```

### Deployment
The site has been deployed in GitHub Pages. The steps taken were:

1. On the Git Hub repository's main page, click on the "Settings" button.
 
2. From the left-hand side menu, in the "Code and automation" section, click on "Pages".

3. Within the Build and deployment area, select the below options:
    > Source ⟶ "Deploy from a branch" 

    > Branch ⟶ "main" | "/(root)"

    > Click on the "Save" button
4. After a few moments, a new box is displayed with the legend "Your sirte is live at..." and a green check mark can be seen beside the latest commit message.

The live site can be found here - https://jbocciadev.github.io/PP2_score/


## Credits 

### Inspiration
- The first time I thought of building a web solution like Score! when, during an u-11 basketball match, the scoreboard was not working correctly and the audience had to keep track of the score by ourselves.

<!-- Continue here -->



### Content 
- The information that populates the page was extracted from [Vandersanden](https://vandersanden.com) and [Hablakilns](https://hablakilns.com).

### Media
- The Youtube video on the landing page is from [Insider](https://www.youtube.com/@Insider)'s Youtube site.
- The images thatpopulate the site are from [Pexels](https://pexels.com) and [Unsplash](https://unsplash.com). They were optimised for the web with [Birme](https://birme.net).
- The colour pallete was extracted using [Coolors](https://coolors.co).
- The favicon was created using [Favicon](https://favicon.io).
- The icons used for social media links and in the cards were sourced from [Fontawesome](https://fontawesome.com).

### Code
- [freeCodeCamp](https://www.freecodecamp.org/) were a huge help in understanding responsive design, relative dimensions, and were my first camp years ago.
- [Digitalocean](https://www.digitalocean.com/community/tutorials/css-css-grid-layout-intro) for grid css.
- [W3Schools](https://www.w3schools.com/) were constantly open on my browser. My go-to HTML and CSS site.
- I cannot talk code without thanking Prof. David Malan and all the crew at HarvardX's [CS50X](https://cs50.harvard.edu/x/2023/)
- [stack __overflow__](https://stackoverflow.com/) if you code, you know ;-)

### Other
- A masive thank you to my mentor, Spencer and his [5pence](https://5pence.net/) site.
- Thank you, thank you, thank you to the staff and colleagues at [Code Institute](https://codeinstitute.net). Course content, Tutoring sessions and (especially) Slack channels.
