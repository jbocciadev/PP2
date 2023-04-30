# [Score!](https://jbocciadev.github.io/PP2_score/)

Score! is a client-based web application that aims at resolving a real-world problem: supplying a simple-yet-useful scoreboard for basketball games where there is no scoreboard available.

![Responsive Mockup](/assets/media/score-amiresponsive.PNG)

Brick is a fully-responsive website that follows the same structure throughout for ease of navigation and a better user experience. Since the topic at hand is such a visually evoking object, the rectangular shape is maintained and repeated in multiple elements of the site.

## Features

- ### __Title Tab__

  - Repeated throughout the site, the tite tab displays an icon with the image of a red brick in white background as a friendly reminder for the user.

![Title tab with favicon](/assets/media/title_with_favicon.PNG)

- ### __Navigation Bar__

  - Maintained in the same position in all three pages, the simplistic navbar helps the user navigate effortlessly around the page with ease. 

![Nav Bar](/assets/images/media/navbar.PNG)

- ### __The landing page introduction__

  - As a hero image, a picture of an aged red brick wall was chosen. This image aims at bringing the user's attention to the brick itself, and connect with their lifetime memories of brick walls.
  - The intrductory text, short and clear, invites the user to reflect on the many times they may have seen and felt red bricks used in many of its forms.

![Landing Page](/assets/images/media/landing_page_hero.PNG)

- ### __Factory Video Section__

  - The video section informs and instructs the user on the modern fabrication of clay bricks. 
  - The aim of this section is toanswer some questions the user may have, maybe give way to new questions and, hopefully, awaken the user's interest for the topic at hand. 

![Factory Video](/assets/images/media/factory_video.PNG)

- ### __Infocards Section__

  - Here, the user is presented with three cards that provide additional information in the form of fun-facts.  

![Fun Facts](/assets/images/media/facts.PNG)

- ### __The Footer__ 

  - The footer section includes links to the relevant social media sites for Brick. The links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media

![Footer]( /assets/images/media/footer.PNG)

- ### __Album__

  - Resembling an analogue photo album, the Album section presents images in a retro format similar to that of instant photographs. 
  - This section will allow the user to see the different uses bricks can have, especially where they are used for decorative purposes. 

![Album](/assets/images/media/album.PNG)

- ### __Contact Page__

  - This page will allow the user to contact the site owner by means of a contact form which includes a free-text field inviting the user to share their thoughts.
  - Along with the form, the Contact page displays the address and a map to Queen's University, Belfast, twhere the organization behind the site can be found.

![Contact](/assets/images/media/contact.PNG)

### __Features Left to Implement__

- Events calendar
  - In a future version, an events calendar can be developed, with both virtual and in-person events.
- Contributions to the Album
  - With a functioning backend, visitors to the site could potentially upload their own images with captions to the Album.

## Design Principles
Having such a familiar object as the sole focus for the site, it becomes apparent that this is to be the main source for inspiration. The brick is a parallelepiped - a prism consisting of six parallelograms. Therefore, all shapes in the site are to respect the rectangle as a basis.

### Site structure
  #### Landing page
  ![Home_Wireframe](/assets/images/media/home_wireframe.PNG)

  #### Album
  ![Album_Wireframe](/assets/images/media/album_wireframe.PNG)

  #### Contact page
  ![Contact_Wireframe](/assets/images/media/contact_wireframe.PNG)

### Hero image
The hero image chosen depicts an aged brick wall, from where the colour pallette is extracted:
  #### Hero image
  ![Hero_Image](/assets/images/media/hero-image.webp)

  #### Colour palette
  ![Colour palette](/assets/images/media/palette-final.PNG)

### Elements
As mentioned, the elements on the site try to resemble the shape of the red clay brick:
  #### Navigation links (when hovered-over)
  ![Nav_links](/assets/images/media/nav_links.PNG)

  #### Introductory text
  ![Intro-text](/assets/images/media/intro-text.PNG)

  #### Information cards
  ![Infocards](/assets/images/media/facts.PNG)

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
- The colour pallette was extracted using [Coolors](https://coolors.co).
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
