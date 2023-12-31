# Connect Bcn

<image src="src/assets/readme/readme-image.png" width="700px"></image>

Connect Bcn is an event planning React application. Users can carry out the following CRUD actions on the site:
1. Create an account and login.
2. View, search and filter events. 
3. Create, edit and delete events
4. View,reate, edit and delete comments.
6. Like/unlike comments.
7. Attend/unattend events. 
8. Edit their profile page. 

This project has been developed as my 5th Portfolio Project for my Diploma in Full Stack Software Development - Advanced Frontend with Code Institute. 

The deployed project can be viewed here: [Connect Bcn](https://connect-event-app-ce7fadd5fd4c.herokuapp.com/)

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
    - [Components](#react-components)
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
21. As a logged in user I can see other peoples profiles so that I can learn more about them.
22. As a logged in user I can see stats on a user profile so that I can learn more about them.
23. As a logged user I can see a list of events a user has organised so that I can attend more of their events.
24. As a profile owner I can edit my profile so that I can update my data.
25. As a profile owner I can see my upcoming events so that I can keep track of what I am attending.

#### Future User Stories 
The following user stories will be implemented in the next iteration:
1. As a logged in user I can save events so that I can decide later if I want to go.
2. As a profile owner I can see my saved events so that I can review them.
3. As a profile owner I can add interests to my profile so that I can have a customised experience.
4. As a logged in user I can see suggested events based on my interests so that I can join them.

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

The GitHub project can be viewed here: [Connect Event App User Stories](https://github.com/users/orlagh-sweeney/projects/6)

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
Details on the models used in this project can be found in the back-end repository: [event-app-api](https://github.com/orlagh-sweeney/event-app-api) 

### Wireframes
- [Balsamiq](https://balsamiq) was used to develop wireframes for mobile and desktop in the planning stage of the website. <br>
    - Home Page: <br> <image src="src/assets/readme/wireframe-home-desk.png" width="600px"></image> <br> <image src="src/assets/readme/wireframe-home-mob.png" width="300px"></image>
    - Event Detail Page: <br> <image src="src/assets/readme/wireframe-event-desk.png" width="600px"></image> <br> <image src="src/assets/readme/wireframe-event-mob.png" width="300px"></image>
    - Event Create Form Page: <br> <image src="src/assets/readme/wireframe-create-desk.png" width="600px"></image> <br> <image src="src/assets/readme/wireframe-create-mob.png" width="300px"></image>
    - Profile Page: <br> <image src="src/assets/readme/wireframe-profile-desk.png" width="600px"></image> <br> <image src="src/assets/readme/wireframe-profile-mob.png" width="300px"></image>

### React Components
- The project was built using React and incorporates a series of reusbable react components including the following:
    - Avatar.js: 
        Displays user avatars in the Navbar.js and ProfilePage.js
    - Dropdown.js:
        Used to display a dropdown menu on Event.js, Comment.js and ProfilePage.js
    - Event.js:
        Displays event information on EventPage.js, EventsPage.js and ProfilePage.js
    - EventsPanel.js:
        Displays upcoming events on EventsPage.js and ProfilePage.js
    - Asset.js:
        Used on in multiple components to display a loading spinner, images and messages.
    - Tag.js:
        Used on Event.js to show event type. Will be used in a future feature to show user interests on their profile page. 

## Features
### NavBar
- The website has a responsive navbar component. 
- The navbar conditionally renders navlinks based on the users logged in status.
- Logged out users can see Home, About, Sign in and Sign up navlinks.
- Logged in users can see Home, About, Create Event, Profile and Sign out navlinks. <br>
<br><image src="src/assets/readme/navbar.png" width="600px"></image>

### Home
- The home page displays all events
<br><image src="src/assets/readme/home.png" width="600px"></image>

### Search Bar
- The home page has a search bar where user can type a query which is checked against event names and event owners.
<br><image src="src/assets/readme/search.png" width="600px"></image> 

### Events Filter
- The home page has a filter menu which filters events based on event type. 
<br><image src="src/assets/readme/filter.png" width="600px"></image> 

### Event Card
- Event details are displayed in a react bootstrap card: this is the Event component. 
- The level of detail differs depending on whether the card is being displayed on the EventPage, ProfilePage or EventsPage.
<br><image src="src/assets/readme/eventcard.png" width="600px"></image>  

### Attending Button
- Each event contains an button for users to register whether they are attending an event or not. 
<br><image src="src/assets/readme/attendingbutton.png" width="100px"></image> 

### Events Panel
- The EventsPanel component is only visible to logged in users.
- It displays 3 upcoming events that the user is attending.
- This panel is used on the EventsPage and ProfilePage.  
<br><image src="src/assets/readme/eventspanel.png" width="300px"></image> 

### Event Detail Page
- The EventPage component loads event specific data based on event id.
- The EventPage displays the Comment, Event and SimilarEvents components. 
<br><image src="src/assets/readme/eventdetail.png" width="600px"></image> 

### Similar Events 
- Similar events are displayed using react bootstrap cards: this is the SimilarEvents component.
- Up to 3 events will be shown. 
- The user can click on the event which will bring them to the relevant event page.
<br><image src="src/assets/readme/similarevents.png" width="600px"></image> 

### Create Event Form
- This form allows users to create an event. 
<br><image src="src/assets/readme/createevent.png" width="600px"></image> 
<image src="src/assets/readme/createevent2.png" width="600px"></image> 

### Edit Event Form
- This pre-populated form allows event owners to edit their event. 
<br><image src="src/assets/readme/editevent.png" width="600px"></image> 

### Comments
- The comment form allows users to add a comment underneath an event. 
<br><image src="src/assets/readme/comments.png" width="600px"></image> 
- The edit comment form is a pre-populated form that allows comment owners to edit their comments. 
<br><image src="src/assets/readme/commentedit.png" width="600px"></image> 

### Like Button
- Comments have a like button so users can like and unlike comments. 
<br><image src="src/assets/readme/likebutton.png" width="100px"></image> 

### Profile Page
- Each user has a unique profile page. 
- The profile page diplays user information, user stats and events that the profile owner has organised. 
- The profile owner can also see the Events Panel displaying 3 upcoming events. 
<br><image src="src/assets/readme/profilepage.png" width="600px"></image> 

### Edit Profile Form
- This form allows users to edit their profile. 
<br><image src="src/assets/readme/editprofile.png" width="600px"></image> 

### Change password
- This form allows users to change their password. 
<br><image src="src/assets/readme/changepassword.png" width="600px"></image> 

### Change username
- This form allows users to change their username. 
<br><image src="src/assets/readme/changeusername.png" width="600px"></image> 

### Sign Up
- This form allows users to create an account. 
<br><image src="src/assets/readme/signup.png" width="600px"></image> 

### Sign in 
- This form allows users to login to the application. 
<br><image src="src/assets/readme/signin.png" width="600px"></image> 

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
- [ESLint](https://eslint.org/): this was used to validate JSX code. 
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
    - The correct event data loads when a user visits an event page. 
10. As a logged in user I can choose to attend an event or not so that the organiser know how many people are going.
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
15. As a logged in user I can see my upcoming events so that I can find them easily.
    - Logged in users can see the EventPanel.
    - The event panel shows the 3 nearest events that they are attending. 

#### The EventPage
16. As a event owner I can edit an event so that I can ensure it is up-to-date.
    - Event owners can access the edit event button.
    - The edit event button loads a pre-populated form with the existing event data.
    - On submit the event data is updated correctly.
17. As a event owner I can delete an event so that it can be cancelled.
    - Event owners can access the delete event button.
    - The event is deleted from the databased.
18. As a logged in user I can create, edit and delete comments so that I can interact events.
    - Logged in users can access the create comment form. 
    - Comment owner can access comment edit and delete buttons.
19. As a logged in user I can like and unlike comments so that I can show support for the conversation.
    - Logged in users can use the like button to like and unlike comments.
    - Logged out users are prompted to sign in to like a comment. 
20. As a site user I can see similar events so that I can have increased choice of events to attend.
    - Site users can see a list of similar events. 
    - Correct event types are loaded in the similar events component. 

#### The ProfilePage
21. As a logged in user I can see other peoples profiles so that I can learn more about them.
    - Logged in users can access user profile pages.
    - The correct user profile data loads. 
22. As a logged in user I can see stats on a user profile so that I can learn more about them.
    - Logged in user can see stats for each profile. 
    - The total number of events organised and attended are displayed. 
23. As a logged user I can see a list of events a user has organised so that I can attend more of their events.
    - Logged in users can see all the events that a user has organised. 
    - Users can choose to attend these events. 
24. As a profile owner I can edit my profile so that I can update my data.
    - Profile owners can access the profile dropdown menu.
    - The edit password button brings the profile owner to the edit password form. 
    - The edit username button brings the profile owner to the edit username form.
    - The edit profile button brings the profile owner to the edit profile form.
25. As a profile owner I can see my upcoming events so that I can keep track of what I am attending.
    - Profile owners can see a list of events they are attending.
    - The EventPanel displays the correct events for the profile owner. 

### Code Validation
The following validators were used to test the code:<br>
- Custom CSS Validation:
    - [W3C CSS Validator](https://jigsaw.w3.org/css-validator/): No errors were reported when passing the final CSS code through the validator. <br>
- JSX Validation:
    - [ESLint](https://jshint.com/): No errors were reported when passing the final JavaScript code through the validator. <br>

### Accessibility
[Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) was used to check the accessibility of the site and to see if there were issues. 

Accessibility comments:<br>
According to Lighthouse, both the Create Event and and Edit Event page lost accessibility marks due to lack of form labels, however the forms do use react-bootstrap form labels. Further investigation is needed to understand why lighthouse is not registering these labels.

Performance comments:<br>
Further investigation into improving page performance will be carried out.<br>

Lighthouse Reports:<br>
Home Page: <br> <image src="src/assets/readme/lighthouse-home.png" width="600px"></image><br>
About Page: <br> <image src="src/assets/readme/lighthouse-about.png" width="600px"></image></image><br>
Sign In Page: <br> <image src="src/assets/readme/lighthouse-signin.png" width="600px"></image></image><br>
Sign Up Page: <br> <image src="src/assets/readme/lighthouse-signup.png" width="600px"></image></image><br>
Create Event Page: <br> <image src="src/assets/readme/lighthouse-eventcreate.png" width="600px"></image></image><br>
Edit Event Page: <br> <image src="src/assets/readme/lighthouse-eventedit.png" width="600px"></image></image><br>
Profile Page: <br> <image src="src/assets/readme/lighthouse-profile.png" width="600px"></image></image><br>

### Device Testing
The website was manually tested on the following devices with no issues:
- Samsung Galaxy S10+
- MacBook Pro 13"
- Samsung 27" Desktop Monitor (s27a600uuu)

### Browser Testing
The website was tested on the following browsers with no issues:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

### Feature Testing
#### NavBar: 
Relevant component: NavBar.js
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Logo | When the logo is clicked, the user is brought to the home page | PASS
Authenticated user | If a user is logged in, the navigation menu displays Home, About, Create Event, Profile and Sign Out nav links | PASS
Unauthenticated user | If a user is not logged in, the navigation menu displays Home, About, Sign In and Sign Up nav links | PASS
Mobile menu | On mobile devices, a burger menu is used to display navlinks | PASS
Mobile menu close | When a user clicks a navlink on the mobile menu the menu closes | PASS
Home nav link | Brings the user to the home page | PASS
About nav link | Brings the user to the about page | PASS
Sign Up nav link | Brings the user to the signup page | PASS
Sign In nav link | Brings the user to the login page | PASS
Sign Out nav link | Signs the user and returns the user to the home page | PASS
Profile nav link | Brings the user to their own proile page | PASS 
Create Event nav link | Brings logged in users to /events/create | PASS
Logout success message | The user is shown a message that they have signed out | PASS

#### Home:
Relevant component: EventsPage
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Search bar | The search bar renders on the home page | PASS
Events Filter | The filter menu render on the home page | PASS
Events load | A list of all upcoming events are displayed | PASS
Spinner | A spinner is displayed while events are fetched from the API | PASS  
EventsPanel | Logged in users can see the EventsPanel | PASS
Infinite Scroll | Events continously load as the users scrolls so the user does not have to click a button to load more events | PASS

#### Search Bar:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Search input | Users can type in the search bar | PASS
Results | As the user types, relevant search results are displayed | PASS
No results | If there are no matching results, a message is displayed to the user | PASS

#### Events Filter:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Filters are visible | When the filter dropdown menu is clicked, a list of filters are shown to the user | PASS
Results | When a user selects a filter, relevant results are displayed based on the filter | PASS
No results | If there are no matching results for a given filter, a message is displayed to the user | PASS

#### Event Card: 
Relevent component: Event
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Card renders | The event card renders on the home page(EventsPage), EventPage, and user ProfilePage | PASS
Event data | The correct event data is displayed on the event card | PASS

#### Attending Button:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Logged out user - button text | The button text says 'Register' | PASS
Logged out user - button colour | Blue | PASS
Logged out user - message overlay | The message reads 'Log in to attend this event' | PASS
Logged in user (not registered) - button text | If a user has not registered for an event the button says 'Register' | PASS
Logged in user (not registered) - button colour | Blue | PASS
Logged in user (not registered) - message overlay | The message reads 'Click to register' | PASS
Logged in user (registered) - button text | If a user is already registered for an event the button says 'Going' | PASS
Logged in user (registered) - button colour | Orange | PASS
Logged in user (registered) - message overlay | The message reads 'Click to unregister' | PASS
Event Owner - buttn text | The button text says 'Going' | PASS
Event Owner - button colour | Orange | PASS
Event Owner - message overlay | 'You cannot un-register from your own event | PASS
User registers | When a person clicks the button to register, the attending count increases by 1.  | PASS
User unregisters | When a person unregisters, the attending count decreases by 1 | PASS

#### Events Panel:
Relevant component: EventsPanel
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Logged out users | Logged out users cannot see the EventsPanel | PASS
Logged in users | Logged in users can see the EventsPanel | PASS
Events the user is attending | The EventsPanel displays 3 upcoming events that the user is attending | PASS
Order of events | The events are displayed in order of which event has the nearest starting date | PASS
No events | If the user has not registered for any events the EventsPanel displays the message, "You have no upcoming evnets" | PASS

#### Event Detail Page:
Relevant component: EventPage
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Unique url | Each event detail page has a unique url using the event id | PASS
Correct data laods | The event page loads the correct event data | PASS
Comments Component | The event page renders the Comments component | PASS
Similar Events Component | The event page renders the SimilarEvents component | PASS
DropdownMenu component | If the current user is the event owner, the DropdownMenu component renders. This component displays the edit and delete event buttons | PASS 
Edit Event Button | Brings the event owner to the Edit Event Form | PASS
Delete Event Button | Displays a modal asking the event owner to confirm they want to delete the event | PASS
Delete Success Message | The user is shown a message that their event has been deleted | PASS
Event Owner Confirms Deletion | If the owner confirms that they want to delete the event, the event is deleted and the user is redirected to the home page | PASS

#### Similar Events:
Relevant component: SimilarEvents
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Displays similar events | The SimilarEvent components displays up to 3 similar Events based on the event type | PASS
Filter out current event | The component filters out the current event from the events being displayed | FAIL

#### Create Event Form:
Relevant component: EventCreateForm
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Loggged in user | If the user is logged in, the create event page laods | PASS
Logged out user | If the user is not logged in, they are redirected to the home page | PASS
Create event form | The form loads with the correct form fields | PASS
Required fields | If the user does not complete a required field they are shown a message that it needs to be completed | PASS 
Errors | Appropriate errors relating to the input and image upload fields are displayed to the user | PASS
Create Event Button | Adds the event to the database and redirects the user to the new event page | PASS
Cancel Button | Returns the user back to the page that they were previously on | PASS
Success message | The user is shown a message that their event has been created | PASS

#### Edit Event Form:
Relevant componet: EventEditForm
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Event owner | If the user is the event owner, the edit event page loads | PASS
Unauthenticated user | If the user is not logged in and/or is not the event owner, the user is redirected to the home page | PASS
Pre-populated form fields | The form loads and is pre-populated with the correct data from the database | PASS 
Update Button | Updates the event data in the database and redirects the owner back to the newly updated event page | PASS
Success message | The owner is shown a message that their event has been updated | PASS

#### Comments:
Relevant components: Comment, CreateCommentForm, EditCommentForm
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Component Diplay | The comment component loads within the EventPage | PASS
Correct comments load | The component displays the correct comments relating to the event | PASS
Ordering | Comments are displayed with the newest comments at the top | PASS
No Comments | If there are no comments, a message displayed to the user | PASS
Like Button | Each comment displays a like button | PASS
Likes Count | Each comment display the numner of likes that it has | PASS
CreateCommentForm | The form is only displayed to logged in users. When the user clicks the 'post' button the comment is added to the database and the comment is displayed in the component | PASS
DropdownMenu component | If the current user is the comment owner, the DropdownMenu component renders. This component displays the edit and delete comment buttons | PASS 
Edit Comment Button | Reveals the CommentEditForm | PASS
CommentEditForm | Loads the existing comment for the user to edit. The 'update' button sends the updated comment to the API and udpates the component to display the comment. The 'cancel' button closes the CommentEditForm | PASS
Delete Comment Button | Displays a modal asking the comment owner to confirm they want to delete the comment | PASS
Confirm Delete | If the users confirms deletion, the comment is removed from the database and the comment component updates to reflect this | PASS
Delete Success Message | The user is shown a message that their comment has been deleted | PASS
Updated Success Message | The user is shown a message that their comment has been updated | PASS
Create Success Message | The user is shown a message that their comment has been created | PASS

#### Like Button:
Relevant component: Comment
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Display | Both logged in and logged out users can see the like button and like count | PASS
Logged out users | Logged out users are shown a prompt to login if they want to like comments | PASS
Logged in users | Logged in users can click the like button | PASS
On click | When a user likes comment the heart changes to a solid heart icon. When a user unlikes a comment the heart changes back to a hollow heart icon | PASS
Like count | When a comment is liked, the likes count increases by 1. When a comment is unliked, the comment count decreases by 1. 
Comment owners | Comment owners cannot like their own comment. A message is displayed to tell them. | PASS

#### Profile Page:
Relevant component: ProfilePage
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Logged out users | Logged out users cannot view a profile page. They are prompted to sign in to access this page. | PASS
Logged in users | Logged in users can view a profile page. | PASS
Profile owner | If the current user is the profile owner, the DropdownMenu component renders. This component displays the edit profile, change password and change username buttons. Each button brings the profile owner to the relevant form. | PASS
Profile Owner | If the current user is the profile owner the EventsPanel renders displaying their upcoming evnets. | PASS
Profile Details | The correct profile details are loaded including name, member since and bio content | PASS
Profile Stats | User stats are displayed including 
Events Organised | The events organised by the profile owner are loaded | PASS

#### Edit Profile Form:
Relevant component: ProfileEditForm
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Profile owner | If the user is the profile owner they can access the edit profile form | PASS
Unauthenticated user | If the user is not logged in and/or is not the profile owner, the user is redirected to the home page | PASS
Pre-populated form fields | The form loads and is pre-populated with the correct data from the database | PASS 
Update Button | Updates the profile data in the database and redirects the owner back to their newly updated profile page | PASS
Success message | The owner is shown a message that their profile has been updated | PASS

#### Change Password:
Relevant component: PasswordForm
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Profile owner | If the user is the profile owner they can access the edit profile form | PASS
Unauthenticated user | If the user is not logged in and/or is not the profile owner, the user is redirected to the home page | PASS
UserPasswordForm | The form loads with the correct form fields | PASS 
Confirm password | The profile owner must confirm their new password | PASS 
Save Button | Updates the password in the database and redirects the owner back to their profile page | PASS
Success message | The owner is shown a message that their password has been updated | PASS

#### Change Username:
Relevant component: UsernameForm
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Profile owner | If the user is the profile owner they can access the edit profile form | PASS
Unauthenticated user | If the user is not logged in and/or is not the profile owner, the user is redirected to the home page | PASS
UserPasswordForm | The form loads and is pre-populated with their current username | PASS 
Save Button | Updates the username in the database and redirects the owner back to their profile page | PASS
Success message | The owner is shown a message that their username has been updated | PASS

#### Sign Up:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Redirect | Only logged out users can access the sign up page. Logged in users are redirected to the homepage | PASS
Form fields | The correct form fields are displayed | PASS
Unique username | If the user chooses a username that already exists in the database they are shown a warning | PASS
Short password | If their chosen password is too short/weak they are shown a warning | PASS
Confirm password | The user must confirm their password in order to sign up. The passwords must match. | PASS
Sign up button | A new user is created in the database and the user is redirected to the login page | PASS
Success message | The user is shown a message that they have signed up | PASS

#### Sign In:
TEST       | DESIRED RESULT          | PASS/FAIL |
---------- | ----------------------- | --------- |
Redirect | Only logged out users can access the sign up page. Logged in users are redirected to the homepage | PASS
Form fields | The correct form fields are displayed | PASS
Credentials | If the input credentials do not match,  the user is shown a warning that they were incorrect. | PASS
Sign in button | The user is signd in and redirected to the homepage | PASS
Success message | The user is shown a message that they have signed in | PASS

### Bugs
#### Resolved Bugs
1. Filter and Search Query Bug:
Initially the search and filter query on EventsPage would not work together in the same URL. This was due to a typo.
2. Date Format Bug:
On the EventEditForm, the event date retrieved from the API did not match the required format for React. To resovle this issue I installed the days.js react library to reformat the date so it could be retrieved and displayed in the form for the user. 
<br><image src="src/assets/readme/bug-eventcreate.png" width="600px"></image><br>
3. Event Create Form Bug: 
When filling in the EventCreateForm, if the user was creating a 'Sport' event and did not need to manaully select an event category with a click (as 'Sport' is the first option), then no event category was being registered on submit. To fix this I added an extra option field to prompt the user to select an event category to avoid this issue. 
<br><image src="src/assets/readme/bug-eventedit.png" width="600px"></image><br>
4. Console Errors:
A series of console errors we all addressed throughout the project including errors relating to unMounted components and invalid DOM nesting associated with react-bootstrap elements. These errors were fixed and no longer appear in the console. 

#### Unresolved Bugs:
1. Similar Events: 
Currently, the SimilarEvents panel does not filter out the current event from the similar events list. This issue will be addressed in the next iteration of this project. 

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
    - The following images were used to create sample events and profiles:
        - [tapas-de-los-suenos-14009279/](https://www.pexels.com/photo/tapas-de-los-suenos-14009279/) by [Bas Liners](https://www.pexels.com/@studio1345/)
        - [wine-glass-bottle-87224/](https://www.pexels.com/photo/wine-glass-bottle-87224/) by [Timur Saglambilek](https://www.pexels.com/@marketingtuig/)
        - [beautiful-woman-smiling-for-a-photo-1820559/](https://www.pexels.com/photo/beautiful-woman-smiling-for-a-photo-1820559/) by [Mwabonje Ringa](https://www.pexels.com/@mwabonje/)
        - [selective-focus-photography-of-woman-holding-red-ceramic-cup-789303/](https://www.pexels.com/photo/selective-focus-photography-of-woman-holding-red-ceramic-cup-789303/) by [Anastasiya Lobanovskaya](https://www.pexels.com/@annetnavi/)
        - [a-man-standing-while-holding-a-yoga-mat-8436562/](https://www.pexels.com/photo/a-man-standing-while-holding-a-yoga-mat-8436562/) by [Yan Krukau](https://www.pexels.com/@yankrukov/)
        - [entrance-to-parc-guell-11816123/](https://www.pexels.com/photo/entrance-to-parc-guell-11816123/) by [Mehmet Turgut Kirkgoz](https://www.pexels.com/@tkirkgoz/)
        - [people-on-the-hill-overlooking-the-city-5350999/](https://www.pexels.com/photo/people-on-the-hill-overlooking-the-city-5350999/) by [Mario Schmidt](https://www.pexels.com/@msbln/)
        - [laughing-young-diverse-girlfriends-dancing-and-drinking-beer-during-event-5935240/](https://www.pexels.com/photo/laughing-young-diverse-girlfriends-dancing-and-drinking-beer-during-event-5935240/) by [Kampus Production](https://www.pexels.com/@kampus/)
        - [women-exercising-at-the-beach-9004309/](https://www.pexels.com/photo/women-exercising-at-the-beach-9004309/) by [olia danilevich](https://www.pexels.com/photo/women-exercising-at-the-beach-9004309/)
        - [dog-sitting-in-front-of-a-woman-8057585/](https://www.pexels.com/photo/dog-sitting-in-front-of-a-woman-8057585/) by [Kampus Production](https://www.pexels.com/@kampus/) 
        - [photo/opened-book-2099691/](https://www.pexels.com/photo/opened-book-2099691/) by [Sumit Mathur](https://www.pexels.com/@smathur910/)
        - [photo-of-woman-using-laptop-3194518/](https://www.pexels.com/photo/photo-of-woman-using-laptop-3194518/) by [Canva Studio](https://www.pexels.com/@canvastudio/)
        - [man-in-black-jacket-singing-while-playing-guitar-6173832/](https://www.pexels.com/photo/man-in-black-jacket-singing-while-playing-guitar-6173832/) by [RDNE Stock project](https://www.pexels.com/@rdne/)

- Canva:
    - Canva was used to create the a custom upload image icon.

### Code
- [Code Institute](https://codeinstitute.net/de/):
    - The Code Institute 'Moments' walkthrough projects was used as inspiration for this project. Elements of the 'Moments' project were used and adapted to suit this project.
    - Files from the 'Moments' walkthrough project which have been used without modification include:
        - axiosDefaults.js
        - Asset.js
        - Avatar.js
        - CurrentUserContext.js
        - useClickOutsideToggle.js
        - useRedirect.js
        - SignInForm.js and SignUpForm.js logic
        - utils.js

## Acknowledgements
- Thank you to my mentor Marcel for his feedback and suggestions at each stage of the project.
- Thank you to Code Institute for providing me with the tools and skills to complete this project. 