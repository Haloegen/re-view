# **RE.view- testing **

## **Table of Contents (Testing):**

1. [**Testing Overview**](#testing-overview)
1. [**Testing Throughout Development**](#testing-throughout-development)
   - [**Manual Testing**](#manual-testing)
   - [**Existing Bugs**](#existing-bugs)
1. [**Bug Control**](#bug-control)
   -[**Code Validation**](#code-validation)
   -[**Testing and Quality Control Tools**](#testing-and-quality-control-tools)
1. [**Post Development Testing**](#post-development-testing)
    -[**Lighthouse Scores**](#lighthouse-scores)


## **Testing Overview**
Below I have shown the steps I have taken to manual test this product, using user stories.

## **Testing Throughout Development**

### **Manual Testing**

I have tested the core functionality for this project, back end and front end. I encountered more bugs than I thought would be there, but through the help of my Mentor, Richard Wells and the Tutor team I have managed to purge almost all my bugs, with 2 bugs/issues still existing on the front end app.

Test: In the Navbar, click the links and see if the page reroutes you to the desired component, without refreshing the page.
Expected: When the link is clicked the page should mount a new component, without refreshing the page. All links should be tested.
The Add Product, should bring you to the Add product form component, the liked feed, should show you products you have liked, the followed feed should show products produced by followed producers and the profile link should bring you to your own profile component.
Status: Pass


Test: Try to sign up and sign in with an account you have created
Expected: Using the Sign up and Sign in pages, create an account and log in with credentials which should then bring you the home page where the products now in the database should be on display.
Status: Pass

Test: On the sign in form put in the password fields, not the same 2 passwords and see if it throws an error"
Expected: On attempted submission, an error should appear on screen.
Status: pass

Test: On the home page, you should be able to like or dislike, see the count of likes and dislikes.
Expected: On the home page you should see the like and dislike and dislike buttons, the counts of either.
Status: Pass
 
Test: Click the like and dislike button, and see if when you have liked, you can click the dislike button, and vice versa, and the like/ dislike count increases. Additionally try to like your own product.
Expected: You shouldnt be able to like your own products, the like count and dislike count should change according without requiring a page refresh, once liked you shouldnt be able to dislike and vice versa
Status: pass

Test: click on the product, and see if you are brought to that specific product page.
Expected: once clicked you should be brought to the product page
Status: Pass

Test: Try leave a review on the product page, the person who wrote the review's profile should be on display
Expected: Leave a review on the product page, and the review should be below, with your profile beside it
Status: Pass

Test: Once you have left a review on a product go back to the product page and see if the review icon has increased by one, and then delete the review to see if it has gone down also
Expected: The review count should go up, and then down on the main product page.
Status: Pass

Test: Like a product, then click the liked feed and see if the product you have just liked is displayed there, and then unlike the product and refresh the page and the product shouldnt be there.
Expected: The product should show up on the liked feed when it is liked, and not show up when it is not liked/disliked.
Status: Pass

Test: Click the follow button on a profile, and see if their products show up in your followed feed and then unfollow and see if the products vanish
Expected: The products should appear in the followed feed when the profile is followed and vanish when the profile is unfollowed.
Status: Pass

Test: Follow a profile and then click the profile and see if the follower count on the profile increments when the followed and decreases when unfollowed
Expected: The follower count on the profile page should go up by 1, when followed and down by 1 when unfollowed.
Status: Pass

Test: Click a profile that has atleast one product, and it should show the number of products this user, has and display them beneath
Expected: The profile should display both the product count and the products beneath the profile information.
Status: Pass

Test: Click a product you have created and click the edit button and be brought to an edit form and when submitted the product should change.
Expected: once clicked the form should appear and once submitted the product should have changed to the changed content/image/price.
Status: pass

Test: Click the like button, beneath a review and see if the like count in incremented by 1
Expected: The like count should go up by 1, and then down by 1 when liked and disliked respectively.
Status: pass

#### **Existing bugs**
![existing](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716996328/Drf-api/Screenshot_43_rkupyy.png)

I havent been able to fix this bug, but it doesnt compromise any of the core functionality and therefore I think the project functions perfectly without it

![bug](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716996327/Drf-api/Screenshot_42_ddhawn.png)
This bug has occured but again, compromises nothing, and these two errors are the only ones i could find when scouring my website after i have cleared most of the bugs off the platefrom

You are able to like your own review, this not intended.

When created a product, you are able to set the price to a negative number this is also not intended and should be phased out in round one of bug fixing.

### **Bug Control**
Through the creation of the profile component, I found a bug that didnt render the default Profile picture 

![bug1](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716996327/Drf-api/Screenshot_32_k8uagz.png)

![bug2](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716996328/Drf-api/Screenshot_41_eokovp.png)
with the help of my mentor and the Tutor team , and redeploying the drf api, to a new db I have managed to fix the bug. 
This bug took me several hours to fix.
In my attempts to fix this bug I managed to somehow bring my entire app to a standstill and with some quick back tracking have managed to fix my project to where its in a workable situation and has retained its functionality.

### **Code Validation**

[**jigsaw**](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716996992/Drf-api/Screenshot_44_rvbzow.png)

### **Testing and Quality Control Tools**

I used a variety of methods to test my code as I went along, in particular making frequent use of console logs (_a LOT of console logs_) to track the journey of data being passed between functions or components, and to identify where the code stops working if I encountered errors, bugs, or generally undesired results.

I am aware of the debug tools available in VSCode that could allow me to add 'breakpoints' and step through code but I unfortunately did not have time to properly learn and utilise this to a comfortable degree.

I did leverage the following tools to help with my code quality during this project:

- [**Prettier**](https://prettier.io/) to ensure my code style is consistent across all of my files.
- [**ESLint**](https://eslint.org/) to help catch code problems early.
- [**Todo Tree**](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) to keep track of in-code 'todo's' to come back to and address.

## Post Development Testing

#### **Lighthouse Scores**

below is the mobile score using the Chrome lighthouse extension
![lighthouse-m](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716997233/Drf-api/Screenshot_45_ajhd6c.png
)


![lighthouse-d](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716997234/Drf-api/Screenshot_46_av8hmw.png)
This is also the lighthouse score for the desktop app.

## User stories
Througout the project I kept refering to this projects kanban board to gauge the absolute MVP(Minimal Viable Product) [**project_board**](https://github.com/users/Haloegen/projects/6)

![during](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716913616/Drf-api/Screenshot_11_igj9rt.png)

![after](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716997568/Drf-api/Screenshot_47_xbo1kr.png)

After reviewing the Project kanban board, my project has achieved higher than minimal viablability, but given more time, and more comfort with React.js I would like to be able to do Automated Testing in time.

