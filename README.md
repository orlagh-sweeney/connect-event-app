# Connect Bcn

<image src="" width="700px"></image>

Connect Bcn is an event planning React application. Users can carry out the following actions on the site:
1. Create an account and login.
2. View, search and filter events. 
3. Create, edit and delete events
4. Create, edit and delete comments.
6. Like/unlike comments.
7. Attend/unattend events. 
8. Edit their profile page. 

This project has been developed as my 5th Portfolio Project for my Diploma in Full Stack Software Development - Advanced Frontend with Code Institute. 

The project can be viewed here: [Connect Bcn]()

The back-end repository for this full stack application can be found here: [event-app-api](https://github.com/orlagh-sweeney/event-app-api)

## Table of Contents
1. [User Experience](#user-experience-ux)
    - [Project Goals](#project-goals)
    - [User Stories](#user-stories)
    - [Colour Scheme](#colour-scheme)
2. [Planning](#planning)
    - [Methodology](#methodology)
    - [Models](#models)
    - [Wireframes](#wireframes)
    - [Components](#components)
3. [Features](#features)
    - [NavBar](#navbar)
    - [Search Bar](#search-bar)
    - [Events Filter](#events-filter)
    - [Event Card](#event-card)
    - [Event Panel](#event-panel)
    - [Event Page](#event-page)
    - [Create Event Form](#create-event-form)
    - [Edit Event Form](#edit-event-form)
    - [Comments](#comments)
    - [Profile Page](#profile-page)
    - [Edit Profile Form](#edit-profile-form)
    - [Change Passowrd](#change-password)
    - [Change Username](#change-username)
    - [Sign up](#sign-up)
    - [Sign in](#sign-in)
4. [Technololgies Used](#technologies-used)
    - [Languages](#languages)
    - [Frameworks, Libraries and Programmes](#frameworks-libraries-and-programmes)
5. [Testing](#testing)
    - [Testing User Stories](#testing-user-stories)
    - [Code Validation](#code-validation)
    - [Accessibility](#accessibility)
    - [Device Testing](#device-testing)
    - [Browser Testing](#browser-testing)
    - [Automated Tests](#automated-tests)
    - [Feature Testing](#feature-testing)
    - [Bugs](#bugs)
6. [Deployment](#deployment)
7. [Credit](#credit)
    - [Content](#content)
    - [Media](#media)
    - [Code](#code)
8. [Acknowledgements](#acknowledgements)

## User Experience (UX)
### Project Goals
- Build a front end React application using reusbable components.
- Ensure the website is fully responsive. 
- Connect to a REST API.
- Implement full CRUD functionality so users can interact with the website and modify data.
- Build an intuative website that provides users with feedback when as they interact with the various features.
- Implement authentification layers to key pages so the site is robust. 

### User Stories
#### Navigation and Authentication
1. As a site user I can view a navbar from every page so that I can easily navigate between pages.
2. As a logged out user I can see sign in and sign up options so that I can sign in/sign up.
3. As a site user I can view a users avatar so that I can easily identify users of the application.
4. As a site user I can navigate through pages quickly so that I can view content seamlessly without page refresh.
5. As a site user I can register an account so that I can create and join events.
6. As a site user I can login so that I can use the features of the application.
7. As a site user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.

#### Create & Attend Events
8. As a logged in user I can create events so that people can join my event.
9. As a site user I can view event so that I can see more information about it.
10. As a logged in user I can choose to attend and event or not so that the organiser know how many people are going.

#### The EventsPage
11. As a site user I can view events in order of the closet start date so that I can see if anything is on soon.
12. As a site user I can search events by keyword so that I can find events I am interested in.
13. As a site user I can filters event by type so that I can narrow down search results.
14. As a site user I can continuously scroll through events so that I don't have to click on 'next page'.
15. As a logged in user I can see my upcoming so that I can find them easily.

#### The EventPage
16. As a event owner I can edit an event so that I can ensure it is up-to-date.
17. As a event owner I can delete an event so that it can be cancelled.
18. As a logged in user I can create, edit and delete comments so that I can interact events.
19. As a logged in user I can like and unlike comments so that I can show support for the conversation.
20. As a site user I can see similar events so that I can have increased choice of events to attend.

#### The ProfilePage
21. As a logged in use I can see other peoples profiles so that I can learn more about them.
22. As a logged in user I can see stats on a user profile so that I can learn more about them.
23. As a logged user I can see a list of events a user has organised so that I can attend more of their events.
24. As a profile owner I can edit my profile so that I can update my data.
25. As a profile owner I can see my upcoming events so that I can keep track of what I am attending.

#### Future User Stories 
The following user stories will be implemented in the next iteration:
1. As a logged in user I can save events so that I can decide later if I want to go.
2. As a profile owner I can see my saved events so that I can review them.
3. As a logged in user I can see suggested events based on my interests so that I can join them.
4. As a logged in user I can see suggested events based on my interests so that I can join them

### Colour Scheme
The website uses a clean, white look so information is easily disgestable. Blue and Orange were chosen as the main colours for buttons and headings etc. Orange gives the idea of creativity, happiness and positive energy, while blue gives the idea of loyalty, confidence and reliabilty. These are the charateristics behind the ConnectBcn application. 

The following colours are used in the project: 
- Organge Peel (#FF9F1C)
- Byzantine Blue (#1A54E6)
- Cobalt Blue (#184AB1)
- Rich Black (#0D1216)
- White (#FFFFFF)

<image src="src/assets/readme/coolors-palette.png" width="600px"></image>

## Planning
### Methodology
The project was planned and implemented following agile methodology principles. GitHub Projects was used to manage and document this process.

The GitHub project can be viewed here: [Connect Event App User Stories]()

EPICS were defined using GitHub milestones and each User Story was assigned to one of the following milestones:
- Navigation and Authentication
- Create & Attend Events
- The EventsPage
- The EventPage
- The ProfilePage

User Stories contained a list of Acceptance Criteria and Tasks to support the development of the project.
Following MoSCoW Priortisation principles, each User Story was assigned a tag from one of the following:
- Must Have
- Should Have
- Could Have
- Won't Have

### Models
Detail on the models used in this product can be found in the back-end repository: [event-app-api](https://github.com/orlagh-sweeney/event-app-api) 

### Wireframes
- [Balsamiq](https://balsamiq) was used to develop wireframes for mobile and desktop in the planning stage of the website. <br>

### Components
- The project was built using React and incorporates a series of reusbable react components including the following:
    - Avatar.js: 
        Displays user avatars in the Navbar.js and ProfilePage.js
    - Dropdown.js:
        Used to display a dropdown menu on Event.js and ProfilePage.js
    - Event.js:
        Display event informations on EventPage.js and EventsPage.js
    - EventsPanel.js:
        Displays upcoming events on EventsPage.js and ProfilePage.js
    - Asset.js:
        Used on in multiple components to display a loading spinner, images and messages.
    - Tag.js:
        Used on Event.js to show event type. Will be used in a future feature to show user interests on their profile page. 

## Features
### NavBar
- The website has a responsive navbar component. 
- The navbar conditionally renders navlink based on the user logged in status.
- Logged out users can see Home, Sign in and Sign up navlink.
- Logged in user can see Home, Create Event, Profile and Sign out navlinks. 

### Search Bar
- The home page has a search bar where user can type a query which is checked against event names and event owners. 

### Events Filter
- The home page has a filter menu which filters events based on event type. 

### Event Card
- Event details are displayed in a react bootstrap card: this is the Event component. 
- The level of detail differs depending on whether the card is being displayed on the EventPage or EventsPage. 

### Attending Button
- Each event contains an button for users to register whether they are attending an event or not. 

### Events Panel
- The EventsPanel component is only visible to logged in users.
- It displays 3 upcoming events that the user is attending.
- This panel is used on the EventsPage and ProfilePage.  

### Event Page
- The EventPage component loads event specific data based on event id.
- The EventPage displays the Comment, Event and SimilarEvents components. 

### Similar Events 
- Similar events are displayed using react bootstrap cards: this is the SimilarEvents component.m
- Up to 3 events will be shown. 
- The user can click on the event which will bring them to the relevant event page.

### Create Event Form
- This form allows users to create an event. 

### Edit Event Form
- This pre-populated form allows event owners to edit their event. 

### Comments
- The comment form allows users to add a comment underneath an event. 
- The edit comment form is a pre-populated form that allows comment owners to edit their comments. 

### Like Button
- Comments have a like button so users can like and unlike comments. 

### Profile Page
- Each user has a unique profile page. 
- The profile page diplays user information, user stats and events that the profile owner has organised. 
- The profile owner can also see the Events Panel display 3 upcoming events. 

### Edit Profile Form
- This form allows users to edit their profile. 

### Change password
- This form allows users to change their password. 

### Change username
- This form allows users to change their username. 

### Sign Up
- This form allows users to create an account. 

### Sign in 
- This form allows users to login to the application. 

## Technologies Used
### Languages
- JSX
- CSS

### Frameworks, Libraries and Programmes
- [Balsamiq](https://balsamiq.com/): this was used to create wireframes in the planning stage of the project. 
- [Font Awesome](https://fontawesome.com/): this was used to add social media icons to footer to enhance user experience. 
- [Fontpair](https://www.fontpair.co/): this was used to find fonts that compliment each other. 
- [Google Fonts](https://fonts.google.com/): this was used to import fonts into the website.
- [Coolers](https://coolors.co/): this was used to create a colour pallete for the website. 
- [Pexels](https://www.pexels.com/): . 
- [React](https://react.dev/): front-end end Javascript library to build a component based UI.
- [React Bootstrap 4](https://react-bootstrap-v4.netlify.app/): this was the CSS framework used to make the site responsive. 
- [react-router-dom](https://reactrouter.com/en/6.16.0/start/overview): this was used to handle url routing within the application.
- [axios](https://axios-http.com/): this was used to make requests to the API.
- [react-infinite-scroll](https://www.npmjs.com/package/react-infinite-scroll-component): this was used to add infinite scroll functionality.
- [Days.js](https://day.js.org/en/): This was used to re-format the date retrieved from the API to be used in the EventEditForm.
- [react-notifications](https://www.npmjs.com/package/react-notifications); this was used to provide user feedback on CRUD functionality. 
- [Cloudinary](https://cloudinary.com/): this was used to store static and media files.
- [Gitpod](https://www.gitpod.io/): this was used to write, commit and to push the code to Github. 
- [Github](https://github.com/): this was used for version control. 
- [Heroku](https://dashboard.heroku.com/login): this was used to host and deploy the finished project.
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/): this was used throughout the project to check responsiveness and debug. 
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): this was used to validate custom CSS code. 
- [JSHint](https://jshint.com/): this was used to validate Javascript code. 
- [Responsive Design Checker](https://www.responsivedesignchecker.com/): this was used to check responsiveness on various device sizes. 
- [Am I Respsonsive?](https://ui.dev/amiresponsive): this was used to create an image to show how the site looks on different device sizes for this README file. 

## Testing
### Testing User Stories
#### Navigation and Authentication
1. As a site user I can view a navbar from every page so that I can easily navigate between pages.
    - The navbar is accessible on each page.
    - The navbar is reponsive on mobile.
    - When a user clicks a navlink the mobile navbar closes.
2. As a logged out user I can see sign in and sign up options so that I can sign in/sign up.
    - Unauthenticated users can see the sign in and sign up navlinks.
    - Logged in users can see the sign out button. 
3. As a site user I can view a users avatar so that I can easily identify users of the application.
    - Users can upload as avatar when they sign up.
    - The profile avatar is visible for other site users. 
4. As a site user I can navigate through pages quickly so that I can view content seamlessly without page refresh.
    - When users click a navlink components seamlessly render without the entire webpage reloading. 
5. As a site user I can register an account so that I can create and join events.
    - Site users can access the sign in page.
    - The sign in form can be filled in. 
    - On submit an account is created and the user has access relevant features. 
6. As a site user I can login so that I can use the features of the application.
    - Site users can access the login page via the navbar. 
    - Site users can log in using the sign in form. 
    - Once logged in they can access features for logged in users.
7. As a site user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised.
    - Access tokens allow users to remain logged in. 

#### Create & Attend Events
8. As a logged in user I can create events so that people can join my event.
    - Logged in users can see the create event button in the navbar. 
    - When the create event button is clicked the user is brought to the create event form.
    - When a valid form is submitted the user is redirected to their new event page. 
9. As a site user I can view event so that I can see more information about it.
    - Site users can visit event an page and read futher information about it.
    - The correct event date loads when a user visits an event page. 
10. As a logged in user I can choose to attend and event or not so that the organiser know how many people are going.
    - Logged in users can click on the attending button to attend or unattend events.
    - Logged out users are prompted to sign in if they want to register for an event.

#### The EventsPage
11. As a site user I can view events in order of the closet start date so that I can see if anything is on soon.
    - Events are loaded so that the user see the events which are taking place at the nearest date first.  
12. As a site user I can search events by keyword so that I can find events I am interested in.
    - Site user can type in the search bar on the home page.
    - The search by searches against event names and evnet owners to display relevant results. 
13. As a site user I can filters event by type so that I can narrow down search results.
    - Site users can use the filter dropdowm menu and filter event by category.
    - The correct type of events load for each category. 
14. As a site user I can continuously scroll through events so that I don't have to click on 'next page'.
    - Events continously load from the API without the need to click next.
    - The user can continously scroll through events. 
15. As a logged in user I can see my upcoming so that I can find them easily.
    - Logged in users can see an event panel.
    - The event panel shows the 3 nearest events that they are attending. 

#### The EventPage
16. As a event owner I can edit an event so that I can ensure it is up-to-date.
    - Event owners can access the edit event button.
    - The edit event button loads a pre-populated form with the existing event data.
    - On submit the event data is updated correctly.
17. As a event owner I can delete an event so that it can be cancelled.
    - Event owner can access the delete event button.
    - The event is deleted from the databased.
18. As a logged in user I can create, edit and delete comments so that I can interact events.
    - Logged in user can access the create comment form. 
    - Comment owner can access comment edit and delete buttons.
19. As a logged in user I can like and unlike comments so that I can show support for the conversation.
    - Logged in user can use the like button to like and unlike comments.
    - Logged out users are prompted to sign in to like a comment. 
20. As a site user I can see similar events so that I can have increased choice of events to attend.
    - Site users can see a list of similar events. 
    - Correct event types are loaded in the similar events component. 

#### The ProfilePage
21. As a logged in use I can see other peoples profiles so that I can learn more about them.
    - Logged in users can access user profile pages.
    - The correct user profile data loads. 
22. As a logged in user I can see stats on a user profile so that I can learn more about them.
    - Logged in user can see stats for each profile. 
    - The total number of evnets organised and attended are displayed. 
23. As a logged user I can see a list of events a user has organised so that I can attend more of their events.
    - Logged in users can see all the events that a user has organised. 
    - Uses can choose to attend these events. 
24. As a profile owner I can edit my profile so that I can update my data.
    - Profile owners can access the profile drop down menu.
    - The edit password button brings the profile owner to the edit password form. 
    - The edit username button brings the profile owner to the edit username form.
    - The edit profile button brings the profile owner to the edit profile form.
25. As a profile owner I can see my upcoming events so that I can keep track of what I am attending.
    - Profile owner can see a list of events they are attending.
    - The event panel display the correct event for the profile owner. 

### Code Validation
### Accessibility
### Device Testing
### Browser Testing
### Automated Tests
### Feature Testing

#### NavBar: 
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Logo | When the logo is clicked, the user is brought to the home page | PASS
Authenticated user | If a user is logged in, the navigation menu displays Home, Create Event, Profile and Sign Out nav links | PASS
Unauthenticated user | If a user is not logged in, the navigation menu displays Home, Sign In and Sign Up nav links | PASS
Mobile menu | On mobile devices, a burger menu is used to display navlinks | PASS
Mobile menu close | When a user clicks a navlink on the mobile menu the menu closes | PASS
Home nav link | Brings the user to the home page | PASS
Sign Up nav link | Brings the user to the signup page | PASS
Sign In nav link | Brings the user to the login page | PASS
Sign Out nav link | Signs the user and returns the user to the home page | PASS
Profiel nav link | Brings the user to their own proile page | PASS 
Create Event nav link | Brings logged in users to the /events/create | PASS

#### Search Bar:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Search input | Users can type in the search bar | PASS
Results | As the user types, relevant search results are displayed | PASS
No results | If there are no matching results, a message is displayed to the user | PASS

#### Events Filter:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Dropdown menu visibility | When clicked, the list of filters are shown to the user | PASS
Results | When a user selects a filter, relevant results are displayed based on the filter | PASS
No results | If there are no matching results for a given filter, a message is displayed to the user | PASS

#### Event Card:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
#### Attending Button:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
#### Events Panel:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
#### Event Page:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
#### Similar Events:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
#### Create Event Form:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
#### Edit Event Form:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
#### Comments:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
#### Like Button:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
#### Profile Page:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
#### Edit Profile Form:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
#### Change password:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
#### Change username:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
#### Sign Up:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Redirect | Only logged out users can access the sign up page. Logged in users are redirected to the homepage | PASS
Form fields | The correct form fields are displayed | PASS
Unique username | If the user chooses a username that already exists in the database they are shown a warning | PASS
Short password | If their chosen password is too short/weak they are shown a warning | PASS
Confirm password | The user must confirm their password in order to sign up. The passwords must match. | PASS
Sign up button | A new user is created in the database and the user is redirected to the login page | PASS

#### Sign in:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Redirect | Only logged out users can access the sign up page. Logged in users are redirected to the homepage | PASS
Form fields | The correct form fields are displayed | PASS
Credentials | If the input credentials do not match,  the user is shown a warning that they were incorrect. | PASS
Sign in button | The user is signd in and redirected to the homepage | PASS

### Bugs
1. Filter and Search Query Bug:
2. Date Format Bug:
3. Event Create Form Bug: 

## Deployment
The program was developed in Gitpod. It was then commited and pushed to GitHub.
The finished project was deployed in Heroku. 
Deployment to Heroku was completed using the following steps: 
1. Open and login to [Heroku](https://id.heroku.com/login).
2. From the dashboard, click 'New', then click 'Create new app' from the dropdown menu. 
3. Enter the App name, choose a region, then click 'Create app'.
4. Navigate to the 'Deploy' tab. 
5. Within 'Deploy', navigate to 'Deployment method'. 
6. Click on 'GitHub'. Navigate to 'Connect to GitHub' and click 'Connect to GitHub' 
7. Within 'Connect to GitHub', use the search function to find the repository to be deployed. Click 'Connect'.
8. Navigate to either 'Automatic Deploys' or 'Manual Deploys' to choose which method to deploy the application.
9. Click on 'Enable Automatic Deploys' or 'Deploy Branch' respectively, depending on chosen method. 
10. Once the app is finished building, a message saying 'Your app was successfully deployed' will appear.
11. Click 'View' to see the deployed app. 

## Credit
### Media
Images were sourced from the following resources:
- [Pixabay](https://pixabay.com/):
    - Default user image is [blank-profile-picture-mystery-man-973460/](https://pixabay.com/vectors/blank-profile-picture-mystery-man-973460/) by [Stephaine Edwards](https://pixabay.com/users/wanderercreative-855399/)
- [Pexals](https://www.pexels.com/):
    - The hero image is [arc-de-triomf-gateway-in-barcelona-spain-7931932/](https://www.pexels.com/photo/arc-de-triomf-gateway-in-barcelona-spain-7931932/) by [Gintarė Kairaitytė](https://www.pexels.com/@gintare-kairaityte-11923111/)
- Canva:
    - Canva was used to create the a custom upload image icon.


### Code
The Code Institute 'Moments' walkthrough projects was used as inspiration for this project. Elements of the 'Moments' project were used and adapted to suit this project.

## Acknowledgements
- Thank you to my mentor Marcel for his feedback and suggestions at each stage of the project.
- Thank you to Code Institute for providing me with the tools and skills to complete this project. 