import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import LoadingSpiner from "../loader/LoadingSpiner";
import { AuthContext } from "../provider/AuthProvider";
import useAdmin from "../hooks/useAdmin";




const AdminRoute = ({children}) => {

    const {user,loader} = useContext(AuthContext);
    const location = useLocation()
    const [isAdmin,isAdminLoading] = useAdmin();

    if(loader || isAdminLoading){
        return <LoadingSpiner></LoadingSpiner>
    }
    if(user && isAdmin?.admin){
 
        return children;
    }

    return <Navigate to='/' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;