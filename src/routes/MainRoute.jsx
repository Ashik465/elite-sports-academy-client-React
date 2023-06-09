import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home/Home";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";
import PrivateRoute from "./PrivateRoute";
import AddClass from "../pages/dashboard/addclass/AddClass";
import DashboardLayout from "../layout/DashboardLayout";
import MyClasses from "../pages/dashboard/myclasses/MyClasses";
import UpdateClass from "../pages/dashboard/updateClass/UpdateClass";
import ManageClasses from "../pages/dashboard/Admin/manageClasses/ManageClasses";


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
    {
      path: "/dashboard",
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      //   errorElement: <ErrorPage />,
      children: [
        {
          path: "addclass",
          element: <AddClass></AddClass>,
        },
        {
          path: "myclasses",
          element: <MyClasses></MyClasses>,
        },
        {
          path: "updateclass/:id",
          element: <UpdateClass></UpdateClass>,
        },
        {
          path: "manageclasses",
          element: <ManageClasses></ManageClasses>
        },
       
       
       
      ],
    },
  ]);