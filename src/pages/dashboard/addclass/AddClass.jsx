import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit  } = useForm();
  const onSubmit = data => {console.log(data);}
  return (
    <>
      <Helmet>
        <title>EliteSports Academy | Add class</title>
      </Helmet>
      {/* form start */}
      <div className="  rounded-lg bg-black my-20">
        <form onSubmit={handleSubmit(onSubmit)} className="p-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
            <div className="form-control">
              <input
                type="text"
                
                defaultValue={user?.displayName}
                placeholder="Instructor name"
                {...register("instructorName", { required: true })}
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
               
                defaultValue={user?.email}
                placeholder="Instructor email"
                {...register("instructorEmail", { required: true })}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <input
                type="text"
               
                placeholder="Class Name"
                {...register("className", { required: true })}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
               
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control p-5">
            <input
              type="number"
             
              placeholder="Available seats"
              {...register("availableSeats", { required: true })}
              className="input input-bordered"
            />
          </div>

          <div className="form-control w-full  p-5">
            <label className="label">
              <span className="label-text text-xl text-white">
                Upload Class image
              </span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full "
              {...register("classImg", { required: true })}
            />
          </div>

          <div className="form-control mt-2 p-5">
            <input type="submit" className="btn btn-main hover:bg-[#AC9C63] " value="Add Toy" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClass;
