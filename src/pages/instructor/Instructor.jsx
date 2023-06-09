import { useEffect, useState } from "react";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users/instructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      });
  }, []);

  return (
    <>
      <h2 className="text-4xl  text-black text-center font-bold my-10">
        Meet Our Instructor
      </h2>

      {/* instructor card start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20 px-5 bg-black">
        {instructor?.map((instructor) => (
          <div key={instructor._id} className="card w-96 bg-base-100 shadow-xl rounded-none">
            <figure>
              <img
                
                src={instructor?.image}
                alt="instructor image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Name:{instructor?.name}</h2>
              <p className=" font-semibold tracking-tight">Email:{instructor?.email}</p>
            
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Instructor;
