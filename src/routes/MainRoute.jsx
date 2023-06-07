import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home/Home";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
    //   errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
          path: "/login",
          element:<LogIn></LogIn>,
        },
        {
          path: "/signup",
          element:<SignUp></SignUp>,
        },
      ],
    },
  ]);