import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
 const img_hosting_token = import.meta.env. VITE_IMAGE_UPLOAD_TOKEN;

const UpdateClass = () => {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit  } = useForm();
    const token = localStorage.getItem("access token");
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const {id} = useParams();
    // console.log(id);
    const [classes, setClasses] = useState({});
    
    //  fetch single class from database 
    
     useEffect(() => {
        fetch(`https://elite-sports-academy-server.vercel.app/classes/${id}`)
        .then(res => res.json())
        .then(data => {
          // console.log(data);
            setClasses(data)})
    },[id])

    
    const { className, price, availableSeats} = classes||{};
    // console.log(classImg);
    const onSubmit = data => {
    
        const formData = new FormData();
        formData.append('image', data.classImg[0]);        
        
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(result => {
    
          
          
            if(result.success){
                const classData = {
                    instructorName: data.instructorName,
                    instructorEmail: data.instructorEmail,
                    className: data.className,
                    price: parseFloat(data.price),
                    availableSeats: parseInt(data.availableSeats),
                    classImg: result.data.display_url,
                    status: 'pending',
                    enrolledStudents: 0,
                    feedback :'no feedback yet'
                };
                console.log(classData);
                fetch(`https://elite-sports-academy-server.vercel.app/classes/${id}`, {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json',
                      authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(classData)
                })
                    .then(res => res.json())
                    .then(data => {
                      if(data.modifiedCount > 0){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Class updated Successfully",
                            showConfirmButton: false,
                            timer: 1500,
                          });
                    }
                    })
            }
    
            }
    
        )
    
    
    
    
    
    }
    return (
        <>
        <Helmet>
        <title>EliteSports Academy | Update class</title>
      </Helmet>
      <h2  className="text-4xl text-[#FFC107] text-center font-bold my-10"> Update The {className} Class</h2>
            {/* form start */}
      <div className="  rounded-lg bg-black my-20">
        <form onSubmit={handleSubmit(onSubmit)} className="p-5">
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 p-5">
            <div className="form-control">
              <input
                type="text"
                
                defaultValue={user?.displayName}
                placeholder="Instructor name"
                {...register("instructorName", { required: true })}
                className="input input-bordered"
                readOnly
              />
            </div>
            <div className="form-control">
              <input
                type="text"
               
                defaultValue={user?.email}
                placeholder="Instructor email"
                {...register("instructorEmail", { required: true })}
                className="input input-bordered"
                readOnly
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                defaultValue={
                    className
                    }
                placeholder="Class Name"
                {...register("className", { required: true })}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <input
                type="text"
                defaultValue={
                    price

                    }
                placeholder="Price"
                {...register("price", { required: true })}
                className="input input-bordered"
              />
            </div>
          </div>

          <div className="form-control p-5">
            <input
              type="number"
             defaultValue={
                availableSeats
                }
              placeholder="Available seats"
              {...register("availableSeats", { required: true })}
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
              {...register("classImg", { required: true })}
            />
          </div>

          <div className="form-control mt-2 p-5">
            <input type="submit" className="btn btn-main hover:bg-[#AC9C63] " value="Add Toy" />
          </div>
        </form>
      </div>
        </>
    );
};

export default UpdateClass;