# **Re.view- Agile development**
## **Agile overview**

For this project, i took on an agile approach in in order to sort the workload into more managable chunks, with the help of a kanban board, and the code institute walk through project to get an idea on what I wanted to make.

## **Table of Contents (Agile Development):**

1. [**Agile Overview**](#agile-overview)
1. [**Sprints**](#sprints)
   - [**First Sprint**](#first-sprint)
   - [**Second Sprint**](#second-sprint)
   - [**Third Sprint**](#third-sprint)
   - [**Fourth Sprint**](#fourth-sprint)
   - [**Fifth Sprint**](#fifth-sprint)
1. [**User Story Notes**](#user-story-notes)
   - [**User Stories Still To Do**](#user-stories-still-in-process)

## **Sprints**

### **First Sprint**
#### **1st May-9th May**
This first sprint was spent creating my drf repo, planning what my project would be, and how I would go about implementing the changes I wanted to make.
I followed the Code Institute drf-api video and made changes where necessary to get my project to full functionality and began thinking how I would implement them on the front end

### **Second Sprint** 
#### **May 9th - May 16th
This sprint I focused on the user stories focused on authentication navigation and conditional rending.
As I wasnt fully comfortable with React as a whole I have used and modified the code from the walkthrough to help me put together a MVP or a minimal viable product to help me test that features worked and to give my project structure.

The User Stories I covered in this sprint are listed below:

**NAVIGATION & AUTHENTICATION:**

- Navigation: As a user I can view the navbar from every page so that I can easily navigate between pages
  - Navbar is visible on every page and every button works as expected on every page.
- Navigation/Routing: As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
  - Clicking on navbar buttons/clicking on user profile renders new page below navbar quickly & without refresh
  - Switching between filters/categories refreshed list of posts without refreshing page or interfering with any other component on the page
  - Clicking the logo or the home button on the navbar remove filters/searches without page refresh and without interfering with any other component on the page
- Authentication - Sign up: As a user I can create a new account so that I can access all the features for signed up users
  - Sign up icon is clear on navbar for logged out users
  - Sign up form is clean and simple, users can enter a username and password to create an account
  - Invalid data (ie passwords not matching, username already exists) notifies user with appropriate error message
  - Upon successfully creating an account with valid data, user is redirected to sign in page
- Authentication - Sign in: As a user I can sign in to the app so that I can access functionality for logged in users
  - Sign in icon is clear on navbar for logged out users
  - Sign in form is clean and simple
  - Invalid data (ie invalid username, incorrect password) notifies user with appropriate error message
  - Upon successful sign in, user is navigated to homepage
- Authentication - Logged in status: As a user I can clearly see if I am logged in or not so that I can log in if I need to, or log out if I want to
  - When signed in, user profile name displays in top right of navbar, and otherwise hidden elements of the homepage are displayed (such as create post)
  - Many components are not accessible when not logged in (ie create post)
  - If a logged out user attempts to react to a post or comment, they are notified that only logged in users can do this
- Authentication - Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
  - JWTs manage logged in state - users do not get logged out after 5 minutes
- Conditional rendering: As a logged out user I can see sign in and sign up options so that I can sign in/sign up
  - Icons in navbar change depending on whether a user is logged in or not
  - Logged in users clearly see ‘sign out’ and their profile details
  - Logged out users clearly see ‘sign in’ and ‘sign up’ icons



