import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Helmet>
        <title>EliteSports Academy | Add class</title>
      </Helmet>
      {/* form start */}
      <div className="  rounded-lg bg-black my-20">
        <form className="p-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
            <div className="form-control">
              <input
                type="text"
                name="instructorName"
                defaultValue={user?.displayName}
                placeholder="Instructor name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                name="instructorEmail"
                defaultValue={user?.email}
                placeholder="Instructor email"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                name="className"
                placeholder="Class Name"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control p-5">
            <input
              type="number"
              name="Quantity"
              placeholder="Available seats"
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
            />
          </div>

          <div className="form-control mt-2 p-5">
            <input type="submit" className="btn btn-main" value="Add Toy" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddClass;
