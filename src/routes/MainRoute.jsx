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
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";
import MySelectedClass from "../pages/dashboard/mySelectedClass/MySelectedClass";


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
          element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
        },
        {
          path: "myclasses",
          element: <InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path: "updateclass/:id",
          element: <InstructorRoute><UpdateClass></UpdateClass></InstructorRoute>,
        },
        {
          path: "manageclasses",
          element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>,
        },
        {
          path: "feedback/:id",
          element: <AdminRoute><Feedback></Feedback></AdminRoute> ,
        },
       
        {
          path: "manageuser",
          element: <AdminRoute><ManageUser></ManageUser></AdminRoute> ,
        },
        {
          path: "myselectedclass",
          element: <StudentRoute><MySelectedClass></MySelectedClass></StudentRoute> ,
        },
       
       
       
      ],
    },
  ]);