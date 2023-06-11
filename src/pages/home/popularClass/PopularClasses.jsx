import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const PopularClasses = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  // Fetch class data from the database
  useEffect(() => {
    fetch("http://localhost:5000/classes/popularClasses")
      .then((res) => res.json())
      .then((data) => {
        setPopularClasses(data);
      });
  }, []);

  return (
    <>
      <div className="text-center">
        <h2 className="text-4xl text-black text-center font-bold my-10 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          Popular Classes
        </h2>
      </div>

      {/* Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10 py-20 px-5 bg-lime-100">
        {popularClasses?.map((classess) => (
          <motion.div
            key={classess?._id}
            className={`card my-5 bg-base-100 rounded-3xl shadow-xl ${
              classess?.availableSeats === 0 && "bg-red-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <figure className="px-10 pt-10">
              <img
                src={classess?.classImg}
                alt="class"
                className="rounded-3xl h-96 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <span className="text-[#AC9C63] font-bold">Class Name:</span>
                <span className="uppercase">{classess?.className}</span>
              </h2>
              <p>
                <span className="text-[#AC9C63] font-bold">Instructors :</span>{" "}
                {classess?.instructorName}
              </p>
              <p>
                <span className="text-[#AC9C63] font-bold">Available Seats:</span>{" "}
                {classess?.availableSeats}
              </p>
              <p>
                <span className="text-[#AC9C63] font-bold">Price:</span> $
                {classess?.price}
              </p>
              <p>
                <span className="text-[#AC9C63] font-bold">Enroll Students:</span>{" "}
                {classess?.enrolledStudents}
              </p>
              <div className="card-actions"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default PopularClasses;
