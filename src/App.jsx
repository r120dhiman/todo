
import Navbar from "./components/Navbar"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Aboutapp from './components/About';
import Contact from './components/Contact'
import Todo from "./components/Todo";


function App() {
  const router =createBrowserRouter([
    {path:"/",
      element:<><Navbar></Navbar> <Todo></Todo> </>
    },
    {path:"/about",
      element:<><Navbar></Navbar><Aboutapp></Aboutapp></>
    },
    {path:"/contact",
      element:<><Navbar></Navbar> <Contact></Contact></>
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
