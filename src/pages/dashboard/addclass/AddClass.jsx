import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";


const AddClass = () => {
    const {user} = useContext(AuthContext)
    return (
        <>
        <Helmet>
        <title>EliteSports Academy | Add class</title>
      </Helmet>
      {/* form start */}
            <div className="  rounded-lg bg-black my-20">
     <form  className="p-5" >
     <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
        <div className="form-control">
         
          <input type="text" name="sellerName" defaultValue={user.displayName} placeholder="Seller Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          
          <input type="text" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered" />
         
        </div>

        <div className="form-control">
         
         <input type="text" name="toyName"  placeholder="Toy Name" className="input input-bordered" />
       </div>


        <div className="form-control">
          
          <input type="number" name="price"  placeholder="Price" className="input input-bordered" />
         
        </div>

       
        
        
        <div className="form-control">
          
          <input type="text" name="rating"  placeholder="Rating" className="input input-bordered" />
         
        </div>
      </div>

      <div className="form-control p-5">
          
          <input type="number" name="Quantity"  placeholder="Available Quantity" className="input input-bordered" />
         
        </div>

      <div className="form-control p-5">
          
          <input type="text" name="toyImg"  placeholder="Toy image" className="input input-bordered" />
         
        </div>


      <div className="form-control p-5 ">
          
         
          <textarea name="description" placeholder="Toy description" className="textarea textarea-bordered textarea-lg w-full " ></textarea>

        </div>
      <div className="form-control mt-6 p-5">
        
          <input type="submit" className="btn btn-main" value="Add Toy" />
        </div>
     </form>
    </div>
        </>
    );
};

export default AddClass;