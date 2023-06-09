import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Feedback = () => {
  const { id } = useParams();
  console.log(id);

const handleFeedback = (e) => {
    e.preventDefault()
  const form = e.target;
    const feedback = form.feedback.value;
    

    const updateStatus = {
        feedback: feedback,
    };
    fetch(`http://localhost:5000/classes/feedback/${id}`, {        
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateStatus),
    })
        .then((res) => res.json())
        .then((data) => {
            if(data.modifiedCount > 0){
                
            form.reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "give feedback Successfully",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
        });
 
}


  return (
    <>
     <form onSubmit={handleFeedback} className="p-20 m-4 rounded-lg bg-black shadow-2xl">
     <div className="form-control  ">
        <h1 className="text-white md:text-2xl text-xl leading-tight tracking-tight font-semibold pb-5">give feedback</h1>
        <textarea
          name="feedback"
          placeholder="feedback"
          className="textarea textarea-bordered textarea-lg w-full "
        ></textarea>
      </div>
      <input type="submit" className="btn btn-main mt-5 hover:bg-[#AC9C63] " value="Give feedback" />
     </form>
    </>
  );
};

export default Feedback;
