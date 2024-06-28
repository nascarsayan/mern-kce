import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function CreateOrUpdateProject() {

    // useParams will extract the react-router-dom params used in the format ":paramName"
    // For example, if the route is defined as
    //    path: "/projects/update/:id",
    // and the URL is
    //           /projects/update/1
    // then useParams() will be a dictionary { id: "1" }
    // id will not be set in the browser
    // if the user is creating a new project.
    const { id } = useParams();
    const [projectName, setProjectName] = useState('')
    const [projectDescription, setProjectDescription] = useState('')

    useEffect(() => {
        async function fetchProject() {
            try {
                const response = await fetch(`http://localhost:2000/assignments/${id}`)
                const data = await response.json()
                setProjectName(data.name)
                setProjectDescription(data.description)
            } catch (error) {
                console.error(error)
                alert('Failed to fetch project. Check console for error details.')
            }
        }
        if (id) {
            fetchProject()
        }
    }, [id])

    async function onFormSubmit(name, description) {
        try {
            let response;
            if (!id) {
                response = await fetch(
                    'http://localhost:2000/assignments', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, description }),
                })
            } else {
                response = await fetch(
                    `http://localhost:2000/assignments/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, description }),
                })
            }
            
            if (response.ok) {
                alert('Project created or updated successfully')
                window.location.reload()
            } else {
                alert('Failed to create or update project')
            }
        } catch (error) {
            console.error(error)
            alert('Failed to create project. Check console for error details.')
        }

        if (id) {
            // route to /projects after updating the project
            window.location.href = '/projects'
        }
    }

    return (
        <>
            <div>
                <h1>CreateOrUpdateProject</h1>
                <form style={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        width: '50%',
                        gap: '10px',
                        margin: 'auto',
                    }}
                    onSubmit={(event) => {
                        event.preventDefault()
                        const form = event.target
                        const name = form.name.value
                        const description = form.description.value
                        onFormSubmit(name, description)
                    }}
                >
                    <label htmlFor="project-name">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="project-name"
                        defaultValue={projectName}
                    />
                    <label htmlFor="project-description">
                        Description:
                    </label>
                    <textarea
                        rows={10}
                        name="description"
                        id="project-description"
                        defaultValue={projectDescription}
                    />
                    <button
                        type="submit"
                        style={
                            {
                                alignSelf: 'center',
                                height: '30px',
                                width: '150px',
                                margin: '10px',
                            }
                        }
                    >
                        { id ? 'Update' : 'Create' } Project
                    </button>
                </form>
            </div>
        </>
    )
}

export default CreateOrUpdateProject