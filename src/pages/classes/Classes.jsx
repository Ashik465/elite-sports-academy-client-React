import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import useStudent from "../../hooks/useStudent";
import { Helmet } from "react-helmet-async";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [isStudent] = useStudent();
  const { user } = useContext(AuthContext);

  //  fetch class data from database
  useEffect(() => {
    fetch("http://localhost:5000/classes/approve")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      });
  }, []);
// handle  notification  for login
 const handleNotifaction = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "You have to log in first to select the classes!",
    });
  };

 // handle select class

  const handleSelectClass = (classess) => {
    
    const classData = {
      studentEmail: user?.email,
      classId:classess?._id ,
      className: classess?.className,
      instructorName: classess?.instructorName,
      instructorEmail: classess?.instructorEmail,
      price: classess?.price,
      classImg: classess?.classImg,
      availableSeats: classess?.availableSeats,
      status : classess?.status,
      enrolledStudents: classess?.enrolledStudents,
      feedback: classess?.feedback,

  }
// console.log(classData);  
fetch("http://localhost:5000/selectedClass", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(classData),
})
  .then((res) => res.json())
  .then((data) => {
    if (data.insertedId) {
     
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Class booked successfully",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });

  }

  return (
    <>
     <Helmet>
        <title>EliteSports Academy | Classes</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 py-20 px-5 bg-amber-100">
        {classes?.map((classess) => (
          <div
            key={classess?._id}
            className={`card my-5 bg-base-100 shadow-xl rounded-none ${classess?.availableSeats===0 &&  "bg-red-600"}`}
          >
            <figure className="px-10 pt-10">
              <img
              
                src={classess?.classImg}
                alt="class"
                className="rounded-xl h-96 w-full object-cover"
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
                  <button onClick={()=>handleSelectClass(classess)} disabled={classess?.availableSeats===0 ? true : isStudent?.student? false :true } className="btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63]   ">
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
