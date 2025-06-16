import React from "react";
import Home from "./home.jsx";
import About from "./about.jsx";
import { BrowserRouter,createBrowserRouter,RouterProvider} from 'react-router-dom';
import SidebarCategory from "./components/sidebarcategory.jsx";

import "./aleem.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/sidebar",
      element: <SidebarCategory/>
    }
  ])
  return (
   
   <RouterProvider router={router}/>   
  );
}

export default App;