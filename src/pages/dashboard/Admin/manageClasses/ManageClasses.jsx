
import { Link } from "react-router-dom";
import useAllClasses from "../../../../hooks/useAllClasses";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const [AllClasses,refetch] = useAllClasses();
  

    // handle update status to approve
    const handleUpdateStatusApprove = (id) => {
       
        const updateStatus = {
            status: "Approve",
        };
        fetch(`http://localhost:5000/classes/${id}`, {        
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateStatus),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.modifiedCount > 0){
                    refetch();
                
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "update status to approve Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                }
            });
    };
 
    // handle update status to deny
    const handleUpdateStatusDeny = (id) => {
       
        const updateStatus = {
            status: "Deny",
        };
        fetch(`http://localhost:5000/classes/${id}`, {        
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateStatus),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.modifiedCount > 0){
                    refetch();
                
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "update status to deny Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                }
            });
        };
        



    return (
        <>
           <Helmet>
        <title>EliteSports Academy | Manage Classes</title>
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
              <th>Available Seats</th>
              <th>Price</th>
              <th>status</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>Send Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {AllClasses.map((item, index) => (
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
                  {item?.status}
                </td>
                <td>
                <button onClick={()=>{handleUpdateStatusApprove(item?._id)}} disabled={ item?.status ==='Approve'? true : item?.status==='Deny' ? true :  false  }className="btn btn-success   text-white"> Approve</button>  
                </td>
                <td>
                <button onClick={()=>{handleUpdateStatusDeny(item?._id)}} disabled={ item?.status ==='Approve'? true : item?.status==='Deny' ? true :  false  }className="btn btn-warning   text-white"> Deny</button>  
                </td>
                <td>
                  <Link to={`/dashboard/updateclass/${item?._id}`}  className="btn btn-info   text-white">Feedback</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>
    );
};

export default ManageClasses;