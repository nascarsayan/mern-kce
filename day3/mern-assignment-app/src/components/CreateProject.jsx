function CreateProject() {
    async function createNewProject(name, description) {
        try {
            const response = await fetch(
                'http://localhost:3000/assignments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, description }),
            })
            if (response.ok) {
                alert('Project created successfully')
                window.location.reload()
            } else {
                alert('Failed to create project')
            }
        } catch (error) {
            console.error(error)
            alert('Failed to create project. Check console for error details.')
        }
    }

    return (
        <>
            <div>
                <h1>CreateProject</h1>
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
                        createNewProject(name, description)
                    }}
                >
                    <label for="project-name">
                        Name:
                    </label>
                    <input type="text" name="name" id="project-name" />
                    <label for="project-description">
                        Description:
                    </label>
                    <textarea rows={10} name="description" id="project-description" />
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
                    >Create Project</button>
                </form>
            </div>
        </>
    )
}

export default CreateProject