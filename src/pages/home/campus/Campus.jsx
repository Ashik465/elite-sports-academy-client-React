
import { Link } from 'react-router-dom';
import featured from '../../../assets/banner/banner3.jpg'
const Campus = () => {
    return (
        <>
             <div className="my-20 bg-fixed  "  style={{ backgroundImage: `url(${featured})` }} >
        <div className="  bg-gradient-to-r from-[#151515B2] ">
       

        <div className="md:flex justify-center  items-center gap-6    py-8 px-16   text-white">
          
          <div className="mb-4  text-center   space-y-10 md:p-20">
            <p className='text-xl font-bold text-[#AC9C63]'>want to see the campus?</p>
            <h1 className='text-white text-5xl font-bold'>TAKE A TOUR</h1>
      <p><Link to='/classes'><button className=" btn  btn-outline border-[#AC9C63] border-2 rounded-none hover:border-none text-white hover:bg-[#AC9C63]    ">get started</button></Link></p>
            
          </div>
          <div className="divider border-[#AC9C63]  divider-horizontal border hidden sm:block "></div>
           <div className="divider h-1 border md:hidden  border-[#AC9C63] my-4 "></div> 
           
           <div className="mb-4  text-center   space-y-10 md:p-10 ">
            <p className='text-xl font-bold text-[#AC9C63]'>want to give it a Shot?</p>
            <h1 className='text-white text-5xl font-bold'>TRY A FREE CLASS</h1>
      <p><Link to='/classes'><button className=" btn  btn-outline border-[#AC9C63] border-2 rounded-none hover:border-none text-white hover:bg-[#AC9C63]    ">get started</button></Link></p>
            
          </div>




        </div>



      </div>
    </div>
        </>
    );
};

export default Campus;