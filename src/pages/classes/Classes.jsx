import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("http://localhost:5000/classes/approve")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);

  const handleNotifaction = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have to log in first to select the courses!",
    });
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 px-5 bg-amber-100">
        {classes?.map((classess) => (
          <div
            key={classess?._id}
            className={`card w-96 bg-base-100 shadow-xl rounded-none ${classess?.availableSeats===0 &&  "bg-red-600"}`}
          >
            <figure className="px-10 pt-10">
              <img
                src={classess?.classImg}
                alt="class"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">
                {" "}
                <span className="text-[#AC9C63]  font-bold">Class Name:</span>
                {classess?.className}
              </h2>
              <p>
                <span className="text-[#AC9C63]  font-bold">Instructors :</span>{" "}
                {classess?.instructorName}
              </p>
              <p>
                {" "}
                <span className="text-[#AC9C63]  font-bold">
                  Available Seats:
                </span>{" "}
                {classess?.availableSeats}
              </p>
              <p>
                {" "}
                <span className=" text-[#AC9C63] font-bold">Price:</span> $
                {classess?.price}
              </p>

              <div className="card-actions">
                {user?.email ? (
                  <button disabled={classess?.availableSeats===0 ? true : false } className="btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63]   ">
                    select
                  </button>
                ) : (
                  <button
                  disabled={classess?.availableSeats===0 ? true : false }
                    onClick={handleNotifaction}
                    className="btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63]   "
                  >
                    select
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Classes;
