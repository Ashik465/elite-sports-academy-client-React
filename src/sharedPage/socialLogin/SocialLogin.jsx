import { useContext } from "react";
import google from "../../assets/images/google.png";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
const {googleLogIn} = useContext(AuthContext)
const navigate = useNavigate()
// google sign in

const handleGoogleSignIn = () => {

    googleLogIn()
        .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            navigate("/")

            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}


    return (
        <>
           <div className="divider">OR login with</div>
           <div onClick={handleGoogleSignIn} className=" flex justify-center items-center gap-4 mb-8">
                  <span
                    
                    className="  cursor-pointer"
                  >
                    <img className="h-10 w-10" src={google} alt="" />
                  </span>
      </div> 
        </>
    );
};

export default SocialLogin;