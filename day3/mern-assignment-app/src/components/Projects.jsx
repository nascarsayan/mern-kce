import { useState, useEffect } from "react"

function Projects() {

    // fetch the list of projects from the server
    // sample JSON response
    /*
    [
        {
        "id": "1",
        "name": "Inventory Management System",
        "description": "A system to manage inventory of a store."
        },
        {
        "id": "2",
        "name": "Hotel Reservation System",
        "description": "A system to manage hotel reservations."
        },
    ]
    */

    const [projects, setProjects] = useState([])

    async function fetchProjectList() {
        // fetch is the browser API to make HTTP requests.

        // A promise is used to handle the asynchronous operation.
        // A promise can be in the following states:
        // 1. Pending: Initial state, neither fulfilled nor rejected.
        // 2. Fulfilled: Meaning that the operation completed successfully.
        // 3. Rejected: Meaning that the operation failed.

        // Here, fetch promises to return an HTTP response.
        // If the request is unsuccessful, the promise is rejected, and an error is thrown.
        // We should handle the error using try catch block.
        // If the request is successful, the promise is fulfilled, and the response is returned.
        // We can extract the data from the response using response.json() (which returns a promise to JSOn data).

        // await is another way to handle Promises instead of the .then().catch() syntax.
        try {
            const response = await fetch('http://localhost:3000/assignments')
            const data = await response.json()
            setProjects(data)
        } catch (error) {
            console.error(error)
            alert('Failed to fetch projects. Check console for error details.')
        }
    }

    // useEffect is a hook that runs after the first render of the component.
    // It is used to perform side effects in function components.
    // The function passed to useEffect is called the effect.

    // Here, the data to be rendered is not statically known at the time of rendering.
    // Hence, we fetch the data after the component is rendered.
    useEffect(() => {
        fetchProjectList()
    }, [])

    return (
        <>
            <div>
                <h1>Projects</h1>
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <a href={`/projects/update/${project.id}`}>Update</a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Projects