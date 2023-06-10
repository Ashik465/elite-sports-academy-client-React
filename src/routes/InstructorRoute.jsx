import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import LoadingSpiner from "../loader/LoadingSpiner";
import { AuthContext } from "../provider/AuthProvider";
import useInstructor from "../hooks/useInstructor";




const AdminRoute = ({children}) => {

    const {user,loader} = useContext(AuthContext);
    const location = useLocation()
    const [isInstructor,isInstructorLoading] = useInstructor();

    if(loader || isInstructorLoading){
        return <LoadingSpiner></LoadingSpiner>
    }
    if(user && isInstructor?.instructor){
 
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;