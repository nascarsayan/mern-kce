# Mern Assignment App

> [!CAUTION]
> For Windows Users, `npx` command will fail if Execution of Unsigned Scripts is disabled. To enable it, run PowerShell as Administrator and run the following command:
> `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope LocalMachine` or
> `Set-ExecutionPolicy -ExecutionPolicy Unrestricted -Scope CurrentUser`

> [!CAUTION]
> If you get the error while running npx command <br/>
> ENOENT: no such file or directory, lstat 'C:\Users\student.DR-06\AppData\Roaming\npm'<br/>
> To fix this, create the required folder by running this in PowerShell:<br/>
> mkdir $env:USERPROFILE\AppData\Roaming\npm

## Run locally

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Start the mock backend server, by opening a PowerShell window in the folder [day3/mock-backend/](./mock-backend/) and running the following command:
    `npx json-server sample-data.json --host 0.0.0.0`
4. Run `npm run dev` to start the development server in the folder [day3/mern-assignment-app](./mern-assignment-app/).

## Step by Step

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

4. [Create a mock backend following the steps here](./mock-backend/README.md)

5. Once you are sure the mock backend is running, edit the frontend code to show the list of projects (assignments) by making HTTP call to the backend.
    - Use `fetch()` function to do HTTP calls.
    - `useEffect()` hook is used to perform side effects.

6. Add a form to create new Project.
    - `preventDefault()` is used to prevent the default behavior of an HTML element. [Reference](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault).<br/>
    
> [!NOTE]
>  preventDefault is used in the onSubmit event handler for a form to prevent the form's default submission behavior. When a form is submitted in the traditional way (without JavaScript), the default behavior is to send a request to the server with the form's input data, either as URL parameters in a GET request or in the body of a POST request. This causes the browser to navigate to a new page or reload the current page with the response from the server.
>   Using preventDefault allows you to handle the form submission using JavaScript instead, for example, to perform validation, send the form data using AJAX without reloading the page, or update the UI based on the submission. This is particularly useful in single-page applications (SPAs) and when you want to provide a more dynamic and responsive user experience.

7. Modify the `CreateProject` component to make it `CreateOrUpdateProject` component. Use react router's useParams to get the id of the project to be updated. If the id is present, fetch the project details and populate the form fields. If not, show the form to create a new project. Similarly, on form submission, check if the id is present, and make a PUT request to update the project. If not, make a POST request to create a new project.

8. Add a delete button to each project in the list. On clicking the delete button, make a DELETE request to delete the project.
