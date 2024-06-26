function Navbar() {
    return (
        <nav className='topbar'>
            <ul>
                <li>
                    <a href={`/`}>Projects</a>
                </li>
                <li>
                    <a href={`/groups`}>Groups</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar