import './App.css';
import Header from './assets/components/header/Header';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Main from "./assets/components/main/Main";
import About from './assets/components/about/About';
import Branches from './assets/components/branchs/Branches';
import Contact from './assets/components/contact/Contact';
import Lavash from "./assets/components/products/Lavash";
import Sets from "./assets/components/products/Sets";
import Burgers from "./assets/components/products/Burgers";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children:[
      {
        path : "/",
        element: <Main />,
        children: [
          {
            path : "/",
            element: <Sets/>
          },
          {
            path : "/lavash",
            element : <Lavash/>
          },
          {
            path : "/burger",
            element : <Burgers/>
          }
        ]
      },
      {
        path : "/about",
        element : <About/>
      }
      ,
      {
        path : "/branches",
        element : <Branches/>
      }
      ,
      {
        path : "/contacts",
        element : <Contact/>
      }
    ]
  }
])

function App() {


  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
