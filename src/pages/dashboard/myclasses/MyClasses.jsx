import { Helmet } from "react-helmet-async";
import useClasses from "../../../hooks/useClasses";
import { Link } from "react-router-dom";

const MyClasses = () => {
  const[classes] = useClasses()
  return (
    <>
      <Helmet>
        <title>EliteSports Academy | My Classes</title>
      </Helmet>
       {/* // table start  */}

       <div className="overflow-x-auto p-10 w-full">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class image </th>
              <th>Class Name </th>
              <th>Status</th>
              <th>Total Enrolled Student</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {classes.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item?.
                          classImg
                          }
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  {item?.className} 
                </td>
                <td>
                  {item?.status} 
                </td>
                <td >{item?.enrolledStudents}</td>
                <td>
                  {item?.feedback}
                </td>
                <td>
                  <Link to={`/dashboard/updateclass/${item?._id}`}  className="btn btn-outline btn-secondary   text-white">update</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MyClasses;
