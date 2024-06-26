import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Projects from './components/Projects'
import Groups from './components/Groups'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* create a navbar on the top containing the 
        tabs projects and groups */}
      <nav className='topbar'>
        <ul>
          <li>Projects</li>
          <li>Groups</li>
        </ul>
      </nav>
      <Projects/>
      <Groups/>
    </>
  )
}

export default App
