import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import LoadingSpiner from "../loader/LoadingSpiner";
import { AuthContext } from "../provider/AuthProvider";

import useStudent from "../hooks/useStudent";




const StudentRoute = ({children}) => {

    const {user,loader} = useContext(AuthContext);
    const location = useLocation()
    const[isStudent,isStudentLoading] = useStudent();

    if(loader || isStudentLoading){
        return <LoadingSpiner></LoadingSpiner>
    }
    if(user && isStudent?.student){
 
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default StudentRoute;