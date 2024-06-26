import Projects from './components/Projects'
import Groups from './components/Groups'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Projects/>,
    },
    {
      path: "/groups",
      element: <Groups/>,
    }
  ]);

  return (
    <>
      {/* create a navbar on the top containing the 
        tabs projects and groups */}
      <Navbar/>
      <RouterProvider router={router} />
    </>
  )
}

export default App
