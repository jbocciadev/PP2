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

| As a user I want to be able to |
| --- |
| Update the teams names |
| See the current scores |
| See each player's points tally |
| Update each player's number |
| Assign points by +1, +2 and +3 points |
| Use this scoreboard in different devices |
 

| As a developer I want to ensure that |
| --- |
| All items align correctly |
| Fonts, font sizes and colours are consistent throughout the page |
| The layout is clear and does not lead to confusion |
| Buttons are not actionable until the page is loaded completely |
| Tables are loaded correctly (12 players numbered from 1 to 12 with their respective points and buttons) |
| Buttons assign the correct amount of poiints to the correct team and player |
| 



<!-- Continue here -->

## Testing 
Based on the data presented by [Statcounter](https://gs.statcounter.com/browser-market-share), the browsers selected for testing are:
  - Chrome.
  - Safari.
  - Edge.
  - Firefox.
  - Chrome for mobile.
  - Safari for mobile.

### __Site elements:__
  - #### Favicon
    - Check that the favicon is displayed correctly in different web browsers:

  - #### Navigation links
    - Check that hyperlinks behind logo and navigation bar are fully functional.

  - #### Video
    - Check that YouTube video is working correctly.
 
  - #### Footer links
    - Check that hyperlinks in the foter work correctly:
      - The url is correct.
      - The link is opened in a new page.
    
  - #### Form fields
    - Check that form fields behave accordingly:
      - First Name, mandatory.
      - Last Name, mandatory.
      - Email, mandatory - Check that the user input is a valid email address.
      - Comment, optional.

### __Responsive design__
  - Check that the various elements on the site are displayed correctly and adapt based on the size of the screen they are viewed in:
    - Desktop.
      - Landing page.
      - Album.
      - Contact.
    - Tablet.
      - Landing page.
      - Album.
      - Contact.
    - Mobile.
      - Landing page.
      - Album.
      - Contact.

### __Code validation__
  - HTML validation ![](/assets/images/media/html_test.PNG)
    Warning message ignored as a design decision, beyond scope.

  - CSS validation ![](/assets/images/media/css_test.PNG)

### __Performance Tests (Lighthouse)__
  - Home page 
  
   ![Home page](/assets/images/media/lighthouse-home.PNG)

  - Album page 
  
  ![Album page](/assets/images/media/lighthouse-album.PNG)

  - Contact page 
  
  ![Contact page](/assets/images/media/lighthouse-contact.PNG)



## Git and Deployment

### Git Hub and Gitpod
The development process was carried out on the [Gitpod](https://www.gitpod.io/) platform and its repository is hosted in [Jbocciadev brick repository](https://github.com/jbocciadev/brick).

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

The live site can be found here - https://jbocciadev.github.io/brick/index.html 


## Credits 

In this section you need to reference where you got your content, media and extra help from. It is common practice to use code from other repositories and tutorials, however, it is important to be very specific about these sources to avoid plagiarism. 

You can break the credits section up into Content and Media, depending on what you have included in your project. 

### Inspiration
- I first started seeing building elements differently after checking out Bauhasaurus [@alejandrocsome](https://twitter.com/alejandrocsome) *content in Spanish

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
