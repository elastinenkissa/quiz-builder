# Quizmaker

Quizmaker is a web app created using React with TypeScript for the frontend, and .NET Core and SQL with Entity Framework for the backend. This app was initially created with the frontend-only as part of the selection proccess of a job application and has recently been refactored to use a .NET Core backend.

The frontend includes code splitting and reusable components. All UI elements are manually created except forms, which are created using Material UI. Animations are performed using React Transition. Vite was used for better optimization, quicker development and higher quality production build.

The backend is a REST API made with .NET Core v8, utilizing MVC and Repository patterns. The server stores data to an SQL database using Entity Framework with proper error handling. The API is hosted on Azure.

You can look at a live preview of this app <a href="https://main--iridescent-centaur-d78db5.netlify.app/">here</a>

<em>Note: Initial loading of the page may take up to a mintue due to limited speed of services on free subscriptions on Azure.</em>

# Usage

The purpose of this app is to provide anyone the ability to create, view, edit and delete quizzes.

The homepage consists of a grid of all quizzes that exist and a "+" (add new) button. 

Quizzes can be created with the + button, taking the user to a form where they can name the quiz and add anz number of questions they desire. Questions can be added manually, or they can be selected from a list of all previously created questions, and they can be removed.

Clicking on a quiz takes the user to the quiz edit page, where they can, in a similar manner to creating a quiz, rename the quiz and add/remove questions from it. 

Hovering over the quiz card reveals the view and delete buttons. The delete button obviously deletes the quiz.

The view button takes the user to a new page where the questions are displayed. The questions are shown one by one and have hidden answers. The answers are shown only when the user clicks the reveal button. The questions can be listed through using the "<" and ">" buttons. The questions aren't meant to be answerable, but rather the quizzes are meant to be used in game nights/pub quiz scenarios where the host of the game is the user of the website.
