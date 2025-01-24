import {
    createBrowserRouter,
  } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/home',
          element: <Home />
        },
        
        {
          path: '/about',
          element: <About />
        },
      ]
    },
    {
      path: '*',
      element: <NotFound />
    },
  ]);