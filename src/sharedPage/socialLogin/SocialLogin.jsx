import { useContext } from "react";
import google from "../../assets/images/google.png";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";


const SocialLogin = () => {
const {googleLogIn} = useContext(AuthContext)
const navigate = useNavigate()
// google sign in

const handleGoogleSignIn = () => {

    googleLogIn()
        .then((result) => {
            // The signed-in user info.
            const loggedInUser = result.user;
            console.log(loggedInUser);
             //axios post request to add user to database
      
      axios.post('http://localhost:5000/users', {
        name: loggedInUser.displayName, email: loggedInUser.email,role:'student'
      })
      .then((data)=>{

        // console.log(data);
        if (data.data.insertedId) {
         
          navigate("/");

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "sign up succcess",
            showConfirmButton: false,
            timer: 1500,
          });
        }

        navigate("/");


      }
      ) 

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