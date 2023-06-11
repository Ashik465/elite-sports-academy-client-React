import { Helmet } from "react-helmet-async";
import useAlluser from "../../../../hooks/useAlluser";
import Swal from "sweetalert2";



const ManageUser = () => {
    const [allUser,refetch]= useAlluser()


    // handle make admin
    const handleMakeAdmin = (id) => {
        const updateRoll = {
            role: "Admin",
        };
        fetch(`https://elite-sports-academy-server.vercel.app/users/${id}`, {        
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateRoll),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.modifiedCount > 0){
                    refetch();
                
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "update user to admin Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                }
            });
    }

    // handle make instructor
    const handleMakeInstructor = (id) => {
        const updateRoll = {
            role: "Instructor",
        };
        fetch(`https://elite-sports-academy-server.vercel.app/users/${id}`, {        
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateRoll),
        })
            .then((res) => res.json())
            .then((data) => {
                if(data.modifiedCount > 0){
                    refetch();
                
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "update user to instructor Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                }
            });
    }
    return (
        <>
            <Helmet>
        <title>EliteSports Academy | Manage User</title>
      </Helmet>
       {/* // table start  */}

       <div className="overflow-x-auto p-10 w-full">
        <table className="table w-full ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              
              <th> Image </th>
              <th> Name </th>
              <th>Email</th>
              <th>Roll</th>
              <th>Make Admin</th>
              <th>Make Instructor </th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {allUser?.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item?.
                          image
                          }
                        alt="user image"
                      />
                    </div>
                  </div>
                </td>
                <td>
                  {item?.name} 
                </td>
                <td>
                  {item?.email} 
                </td>
                <td >{item?.role}</td>
               
                <td>
                 <button onClick={()=>{handleMakeAdmin(item?._id)}} disabled={ item?.role ==='Admin'? true : false  }className="btn  bg-[#a78bfa] text-white"> Make Admin</button> 
                </td>
                <td>
                 <button onClick={()=>{handleMakeInstructor(item?._id)}} disabled={ item?.role ==='Instructor'? true : false  }className="btn bg-green-400   text-white"> Make Instructor</button> 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </>
    );
};

export default ManageUser;