import { Link } from "react-router-dom";
import useAllSelectedClass from "../../../hooks/useAllSelectedClass";
import { Helmet } from "react-helmet-async";

const MySelectedClass = () => {
    const [selectedClasses]  = useAllSelectedClass();
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
              <th>Instructor Name</th>
              <th>Instructor Email</th>
              <th>AvailableSeats</th>
              <th>Price</th>
              <th>Pay</th>
              <th>Delete Class</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {selectedClasses?.map((item, index) => (
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
                  {item?.instructorName} 
                </td>
                <td >{item?.instructorEmail}</td>
                <td>
                  {item?.availableSeats}
                </td>
                <td>
                  {item?.price}
                </td>
                <td>
                  <Link to={`/dashboard/updateclass/${item?._id}`}  className="btn btn-outline btn-secondary   text-white">Pay</Link>
                </td>
                <td>
                  <button  className="btn btn-warning    text-white">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>
    );
};

export default MySelectedClass;