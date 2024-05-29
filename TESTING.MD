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

#### **Existing bugs**
![existing](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716996328/Drf-api/Screenshot_43_rkupyy.png)

I havent been able to fix this bug, but it doesnt compromise any of the core functionality and therefore I think the project functions perfectly without it

![bug](https://res.cloudinary.com/dtajxn9oi/image/upload/v1716996327/Drf-api/Screenshot_42_ddhawn.png)
This bug has occured but again, compromises nothing, and these two errors are the only ones i could find when scouring my website after i have cleared most of the bugs off the platefrom

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

