import google from "../../assets/images/google.png";


const SocialLogin = () => {
    return (
        <>
           <div className="divider">OR login with</div>
           <div className=" flex justify-center items-center gap-4 mb-8">
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