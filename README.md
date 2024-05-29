# RE.view App
## **Project Overview**
RE.view is a opinion/review based app where users post a product on the main page, and other users give their reviews, and whether they like or dislike the product as a way to gauge to market interest and whether or not a product is good or bad. This is an opinion and forum style social app where everyones opinions matter and could very well dictate what users make or produce in the futere.

This front end app is composed from a list of interactive and largely reused React Components, I have made an active effort to where possibly make the app reusable and adjustable.

To view the deployed app, [**_click this link_**](https://re-view-198da65eeda5.herokuapp.com/)

To view the back-end repository for this app, [**_click this link_**](https://github.com/Haloegen/ci-project-5-api)

## **Table of Contents:**

1. [**Project Overview**](#project-overview)
1. [**Project Planning**](#project-planning)
   - [**Project Goals**](#project-goals)
   - [**User Stories**](#user-stories)
   - [**Design**](#design)
     - [**_Colour Scheme_**](#colour-scheme)
      -[**_Font Choice_**](#font-choice)
1. [**Current Features**](#current-features)
   - [**Header and Navigation**](#header-and-navigation)
1. [**Home Page**](#home-page)
   - [**Products**](#products)
     - [**_Create and Edit Content_**](#create-and-edit-content)
     - [**_Follower Feed_**](#follower-feed)
     - [**_Likes_**](#likes)
     - [**_Search Bar_**](#search-bar)
   - [**Likes and Dislikes**](#likes-and-dislikes)
   - [**Infinite Scroll**](#infinite-scroll)
   - [**Create and Edit Content**](#create-and-edit-content)
   - [**Reviews**](#reviews)
1. [**Profile Page**](#profile-page)
   - [**Popular Profiles**](#popular-profiles)
1. [**Authentication Pages**](#authentication-pages)
   - [**Register**](#register)
   - [**Log In**](#log-in)
1. [**Reusable Components**](#reusable-components)
1. [**Technologies and Dependencies**](#technologies-and-dependencies)
1. [**Deployment**](#deployment)
   - [**Project Deployment**](#project-deployment)
   - [**Create React App**](#create-react-app)
1. [**Credits**](#credits)
   - [**Code and Content References**](#code-and-content-references)

## **Project Planning**
### **Project Goals**
The primary goal of this app was to provide the users with a smooth user-friendly platfrom where they could post their products, edit and delete them on a social site where other users could interact, give their opinions in the form of leaving reviews or the like and dislike functions, follow their favourite producers.

### **User Stories**
User stories can be found by clicking this [**_link_**](https://github.com/users/Haloegen/projects/6)
Also my agile methodology can be seen in this project [**_agile_**](/AGILE.md) file

The User Stories are In Several Epics/Categories which are
- NAVIGATION
- AUTHENTICATION
- PRODUCTS
- REVIEWS
- PROFILES
Although the User stories are directly reflected on the front end app, the functionality behind them had to be implemented in the API. These user stories helped act as a guide and test the functionality of the website

### **Design**
The design of this website was inspired by the logo I had made from Looka.com.
The design is still a work in progress, in the future independent icons and a custom logo would be added.
Using inspiration from other websites such as facebook, amazon, where the most functionality is achieved through the nav bar.

#### **Color Scheme**
List of colours chosen
#ff9254 - this orange was chosen to contrast the normally dark look of the project and highlight what the user had selected when reacting to a product
#8e7bc9 - this darker purple was used on hover for the follow and unfollow buttons to give clear visual feedback
#2142b2- this was used as an accent for User names, and to add depth to the project
#7177a1- 
#242a3d - this is the main color of the project, being the background for most the projects features
#ffffff - this is used for most of the elements, as they sit and can be cleary seen on the dark background
#00d1ff
#c1c1c5 - this light grey color was used again to contrast the normal dark look of the project

#### **Font Choice**
the choice of font I went for is Open sans, after looking on Google fonts I saw it , and liked the way it looked and upon using it I am very happy with the choice

# **Current Features**

## **Header and Navigation**

### **Navbar*
The review nav bar sits fixed at the top of the page and is always visible to the user. It contains the brand, the sign in and sign out buttons, add post, follower feed, liked and profile buttons also.

Logged out:

![Logged out](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716913618/Drf-api/Screenshot_20_x8zvls.png)

Logged in:
![Logged in](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716913617/Drf-api/Screenshot_16_if9fdr.png)
On smaller screens. the menu collapses into a React Bootstrap burger menu:


## **Home Page**
The home page is the main container for the sites content, and is where most of the main features are displayed, each individual product is displayed, aswell as Popular Profiles.

Desktop view (logged in):
![Desktop view](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716913618/Drf-api/Screenshot_17_ciwijk.png)

The Product section is divided so three products are displayed in a line, each can be clicked and brought specifically to the product page, liked, disliked and reviewed.

To the right of the Products is the Popular Reviewer section which means you can follow users who are popular on the platform.

### **Products**

The Product component is the most important component in the app as it houses the main CRUD functionality. The product displays time it was created, Title, Price and an image, with a brief description below.

The home page displays the newest products first which can be narrowed down through follower feed, which is users you have followed and their products and Liked, which shows products you have previously liked.

Clicked on the Add a product button on the nav bar brings you to the Create a Product form.
![AddProject](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716914902/Drf-api/Screenshot_25_zq9nt0.png)

also if a user wishes to change information on a product he can click the three dots on the Product page and edit to update or change the information relating to the product.

#### **Follower Feed**
The follower feed as described above only shows the products produced by user that you are following

#### **Liked** 
The liked feed as described above in the main Products tab only shows users products they have liked.

#### **Search Bar**
the search bar allowes users to type in keywords or search for authors username to narrow down the posts they want to see
If no products or user exists that match the search criteria a graphic appears:
![No-search](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716914964/Drf-api/Screenshot_26_aqanwj.png)

### Likes and Dislikes

The Likes and Dislikes are held on a bar component which allows users 3 clickable options, Like, Dislike, Or the comment bubble to be brought to the product pages reviews, each instance shows how many likes/dislikes a product has and how many comments their are.
Product owners are not able to like and dislike, You have to be logged in to like and dislike, as a logged out user you can see the reviews and the products but cannot interact with the likes, dislikes or review the product.
![likes](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716915259/Drf-api/Screenshot_28_dpzfzl.png)

### **Infinite Scroll**
The [**_React Infinite Scroll Component_**](https://www.npmjs.com/package/react-infinite-scroll-component) was used to allow products on the homepage and the reviews on the product page to 'infinitely' load 10 posts at a time (the default page limit set in the back-end). This improves user experience by allowing them to keep scrolling rather than deal with 'next' and 'previous' buttons.

### **Reviews**
A small comment bubble is displayed on the bottom of each product, this shows how many reviews a product has, and clicking on it reveals the product page, with the reviews beneath it.

Users who are not logged in cannot see the option to add a review:
![review](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716915254/Drf-api/Screenshot_27_zhztzt.png)

If a user is logged in, they will see the option to create a review:
![review2](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716915330/Drf-api/Screenshot_29_zb5pxb.png)
## **Profile Page**


When a user creates an account a new profile is logged to the back end which allows the user to then edit and change details about the profile, the profile contains, how many products they have produced, the amount of people they follow, the amount of followers they have and any products are listed below the profile component.

Similar to editing products and reviews, when the owner of a profile wants to edit their profile information, the UserProfile component is replaced with the EditProfile form so that they are not navigated away from the page.

![profile-page](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716915418/Drf-api/Screenshot_30_fq8d4x.png)
### **Popular Profiles**

The PopularProfiles component is used in two places - the homepage, and the profile page.

It contains a list of the 10 most followed users at the time the user renders the page.

As it is important to maintain the correct information for profiles (such as updating follows/unfollows), it is not governed by the Profiles page specifically, but by the ProfileDataContext file. This context file means that, if a user is viewing their own profile but decides to follow a user showing in the Popular Profiles list, their 'following' count will update in real time despite the components being entirely separate.


### **Authentication Pages**
#### **Register**
![signUp](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716914413/Drf-api/Screenshot_22_kw2svw.png)

#### **Log In**
![signIn](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716913618/Drf-api/Screenshot_19_ftwtng.png)


## **Reusable Components**
The following components in this app are completely reusable and reused throughout the project:

- Asset is used for the spinner animation which displays when data of any kind is being gathered (posts, comments, profiles), and also used to add the Avatar component into the Navbar.
- ProfilePicture is used in every instance which requires a user's profile picture to be displayed.
- MoreDropdown is used for every instance where the owner of a post, comment or profile can edit or delete it.
- Product is used on both the homepage and profile page, also containing the Product component which is of course reused constantly, therefore making its children reusable:
  - Bar
  - Reviews, which includes Review and CreateEditReview
- PopularProfiles is reused on the homepage and profile page, and contains MiniProfile which is reused throughout PopularProfiles

The CurrentUserContext and ProfileDataContext providers are also reusable by nature and the functions within them are utilised frequently in the project.

## **Technologies and Dependencies**

This project is written using React, a JavaScript Framework, and was created using [**_Create React App_**]. Below is a list of all the additional technologies used to develop this project:

- React-Bootstrap (and by extension, Bootstrap 5) - used for responsive styling and for certain components such as overlays.
- React Router Dom - handles the app's routing and navigation between pages.
- Axios - handles the calls made to the API from the front-end to retrieve, post, update and delete data.
- Debounce - prevents user searches from happening on every keystroke (and therefore causing the data to 'flash' on the screen with every key press).
- Cloudinary - handles the static files and images by storing them on the cloud rather than directly in this project's database.
- Heroku - providing a platform in which to host the deployed project.


## **Testing** 
This is done in a seperate file [**_click this link_**]() to see.

## **Deployment**

### **Project Deployment**

In this section I will explain the steps I took in order to deploy this project, so that they can be followed if you wish to clone this project and work on it yourself.

#### **Cloning/Forking**

If you wish to create a clone of this project to use on your local machine or virtual IDE environment such as Gitpod, first navigate to [this project's GitHub Repository](), and follow [GitHub's instructions on how to clone a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

#### **Project Setup**

In the console of your chosen code editor, enter the command `npm install`, which will install all the required dependencies for this project from the package.json file. The package.json file also contains the scripts for this project, for example the build script which can be run by typing `npm run build` into the console. However, if you are using Heroku for deployment as I have, this will be done automatically once deployed.

#### **Deployment to Heroku**

This project is hosted on [**_Heroku_**](https://www.heroku.com/). Below (in this section and in the following **'Connecting to the API'** section) are the steps I took to deploy this front-end part of the Re.View App project. They are written under the assumption that the instructions on deploying the back-end have already been followed and that the back-end project is already deployed on Heroku. Please see the [**_'Deployment' section of the back-end README.md file for more information on this_**]()

1. On the Heroku Dashboard, create a new app. The app name must be unique and should be related to the React project name.
1. Set location as appropriate and create the project.
1. Navigate to the 'Deploy' tab, and select 'Github' under the 'Deployment Method' section.
1. Enter the name of your Github repository, click 'Connect', and once connected click 'Deploy Branch' to make the first deployment.

#### **Connecting to the API**

To connect the deployed front and back-end projects, the following Config Vars need to be added to the back-end project on Heroku, under the 'Settings' tab:
| Key: | Value: |
| :--------------------------- | :----------- |
| CLIENT_ORIGIN | Your-deployed-app-url-here |
| CLIENT_ORIGIN_DEV | http://localhost:3000\*\* |
n

Please note that it is important to remove trailing slashes from these URLs.

If you have not already done so, install Axios in the React app, and in the 'axiosDefaults.js' file inside the API folder, set the baseURL to your deployed back-end API URL, remembering to import the 'axiosDefaults.js' file in 'App.js'.

### **Create React App**

Please also see below for the helpful deployment instructions provided by Create React App:

#### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

##### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

##### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

##### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

##### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

##### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

##### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

##### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### **Code and Content References**

#### **Code**

- This project was created using [**_Code Institute_**](https://codeinstitute.net/)'s course content and 'Moments' walkthrough project as the original template for this project to build upon. There are many areas of my code that will have been taken directly from the course content, and I have not felt it necessary to change. For example, the 'Asset','MoreDropdown' components, the 'useClickOutsideToggle' hook, the 'axiosDefaults' API file and most instances of Forms (with the slight exception of having updated them to work with the most recent version of React Bootstrap) within the project are courtesy of CI's walkthrough.
NAVBAR I also did not feel the need to change all that much, as the functionality fit my project perfectly
- There are many pieces of code in this project that have been taken directly from [**_React Bootstrap's documentation_**](https://react-bootstrap.github.io/).

  #### **Content and Media**

  Logo and brand generated by [**_Looka.com_**]()
  Images for no-content-found and Upload.png from [**_AdobeStocks_**]()