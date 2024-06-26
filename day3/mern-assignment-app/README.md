# Mern Assignment App

1. Create the boilerplate
`npm create vite@latest mern-assignment-app -- --template react`

2. Update boilerplate:
    - Cleanup CSS.
    - Add 2 components in `components` folder.
    - Add a navbar. Use the two components in our primary component: App.


3. Add react router dom. Reference: https://reactrouter.com/en/main/start/tutorial
    - `npm install react-router-dom`
    - Add a list containing the router mappings.
    - In the navbar, use `<a>` element for add link to the different pages.

4. [Create a mock backend following the steps here](../mock-backend/README.md)

5. Once you are sure the mock backend is running, edit the frontend code to show the list of projects (assignments) by making HTTP call to the backend.
    - Use `fetch()` function to do HTTP calls.
    - `useEffect()` hook is used to perform side effects.

6. Add a form to create new Project.
    - `preventDefault()` is used to prevent the default behavior of an HTML element. [Reference](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault).<br/>
    
> [!NOTE]
>  preventDefault is used in the onSubmit event handler for a form to prevent the form's default submission behavior. When a form is submitted in the traditional way (without JavaScript), the default behavior is to send a request to the server with the form's input data, either as URL parameters in a GET request or in the body of a POST request. This causes the browser to navigate to a new page or reload the current page with the response from the server.
>   Using preventDefault allows you to handle the form submission using JavaScript instead, for example, to perform validation, send the form data using AJAX without reloading the page, or update the UI based on the submission. This is particularly useful in single-page applications (SPAs) and when you want to provide a more dynamic and responsive user experience.
