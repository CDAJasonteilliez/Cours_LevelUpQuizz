import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layout from './Layout/Layout';
import './App.css'
import Error404 from './Pages/Error404/Error404';
import Inscription from './Pages/Inscription/Inscription';
import Connexion from './Pages/Connexion/Connexion';
import Quizz from './Pages/Quizz/Quizz';
import Classement from './Pages/Classement/Classement';
import Contact from './Pages/Contact/Contact';
import ML from './Pages/ML/ML';
import PDC from './Pages/PDC/PDC';
import CGU from './Pages/CGU/CGU';
import Profil from './Pages/Profil/Profil';
import Dashboard from './Pages/Dashboard/Dashboard';

Error404

function App() {
  const [user, setUser] = useState("")
  const [auth, setAuth] = useState(false)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} auth={auth} setUser={setUser} setAuth={setAuth}/>,
      errorElement: <Error404 />,
      children:[
        {
          path: "/inscription",
          element: <Inscription auth={auth}/>
        },
        {
          path: "/connexion",
          element: <Connexion auth={auth} setUser={setUser} setAuth={setAuth}/>
        },
        {
          path: "/quizz",
          element: <Quizz auth={auth}/>
        },
        {
          path: "/classement",
          element: <Classement />
        },
        {
          path: "/mention-legal",
          element: <ML/>
        },
        {
          path: "/condition-ceneral-utilisation",
          element: <CGU/>,
        },
        {
          path: "/politique-de-confidentialite",
          element: <PDC />,
        },
        {
          path: "/profil",
          element: <Profil user={user} auth={auth} setUser={setUser} />,
        },
        {
          path: "/dashboard",
          element: <Dashboard auth={auth} user={user}/>,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
