import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpiner from "../loader/LoadingSpiner";




const PrivateRoute = ({children}) => {

    const {user,loader} = useContext(AuthContext);
    const location = useLocation()

    if(loader){
        return <LoadingSpiner></LoadingSpiner>
    }
    if(user){
 
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;