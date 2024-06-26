import { useState, useEffect } from "react"

function Groups() {

    const [groups, setGroups] = useState([])
    async function fetchGroups() {
        try {
            const response = await fetch('http://localhost:3000/groups')
            const data = await response.json()
            setGroups(data)
        }
        catch (error) {
            console.error(error)
            alert('Failed to fetch groups. Check console for error details.')
        }
    }
    useEffect(() => {
        fetchGroups()
    }, [])

    return (
        <>
            <div>
                <h1>Groups</h1>
                <ul>
                    {groups.map((group) => (
                        <li key={group.id}>
                            <h2>Group {group.id}</h2>
                            {group.students.map((student) => (
                                <div key={student.roll}>
                                    {student.name} ({student.roll})
                                </div>
                            ))}
                            <a href={`/projects#project-${group.assignmentId}`} >
                                Assignment {group.assignmentId}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Groups