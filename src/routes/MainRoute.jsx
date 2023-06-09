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
import Feedback from "../pages/dashboard/Admin/manageClasses/Feedback";
import ManageUser from "../pages/dashboard/Admin/manageUser/ManageUser";
import Instructor from "../pages/instructor/Instructor";
import Classes from "../pages/classes/Classes";


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
        {
          path: "/instructor",
          element:<Instructor></Instructor>,
        },
        {
          path: "/classes",
          element:<Classes></Classes>,
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
          element: <ManageClasses></ManageClasses>,
        },
        {
          path: "feedback/:id",
          element: <Feedback></Feedback>
        },
       
        {
          path: "manageuser",
          element: <ManageUser></ManageUser>
        },
       
       
       
      ],
    },
  ]);