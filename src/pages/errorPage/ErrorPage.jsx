

import error from '../../assets/error/error.svg'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
           <div className=' text-center'>
            <div className='text-7xl font-bold'>Back to home-page <br /> <Link className='btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63]  ' to='/'>Home-page</Link>    </div>
<div className='  flex justify-center'><img src={error} alt="" /></div>
            
        </div> 
        </>
    );
};

export default ErrorPage;