import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Instructor = () => {
  const [instructor, setInstructor] = useState([]);

  useEffect(() => {
    fetch("https://elite-sports-academy-server.vercel.app/users/instructor")
      .then((res) => res.json())
      .then((data) => {
        setInstructor(data);
      });
  }, []);

  return (
    <>
     <Helmet>
        <title>EliteSports Academy | Instructor</title>
      </Helmet>
      <h2 className="text-4xl  text-black text-center font-bold my-10">
        Meet Our Instructor
      </h2>

      {/* instructor card start */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 py-20 px-5 bg-black">
        {instructor?.map((instructor) => (
          <div key={instructor._id} className="card my-5 bg-base-100 shadow-xl rounded-none">
            <figure>
              <img
                className=" h-96 w-full object-cover "
                src={instructor?.image}
                alt="instructor image"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title"><span className="text-[#AC9C63]  font-bold">Name: </span>{instructor?.name}</h2>
              <p className=" font-semibold tracking-tight"><span className="text-cyan-700 font-bold">Email: </span> {instructor?.email}</p>

            
            
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Instructor;
