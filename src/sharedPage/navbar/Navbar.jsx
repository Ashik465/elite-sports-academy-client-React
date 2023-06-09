import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import LoadingSpiner from "../../loader/LoadingSpiner";


const Navbar = () => {
  const {user,logout,loader} = useContext(AuthContext)


// loader 

if(loader){
  return <LoadingSpiner></LoadingSpiner>
}


     //log out 
const handleLogout =()=>{
  logout()
  .then(() => {
      // Sign-out successful.
    }).catch((error) => {
      console.log(error)
    });
}
    return (
        <>
           <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink className= 'focus:bg-transparent hover:bg-transparent hover:text-blue-400' to='/'>Home</NavLink></li> 
      <li><NavLink className= 'focus:bg-transparent hover:bg-transparent hover:text-blue-400' to = '/instructors'>Instructors</NavLink></li>
      <li><NavLink className= 'focus:bg-transparent hover:bg-transparent hover:text-blue-400' to = '/classes'>Classes</NavLink></li>
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-xl">EliteSports Academy</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
      <li><NavLink className= 'focus:bg-transparent hover:bg-transparent hover:text-blue-400' to='/'>Home</NavLink></li> 
      <li><NavLink className= 'focus:bg-transparent hover:bg-transparent hover:text-blue-400' to = '/instructor'>Instructors</NavLink></li>
      <li><NavLink className= 'focus:bg-transparent hover:bg-transparent hover:text-blue-400' to = '/classes'>Classes</NavLink></li>
      {user &&   <li><NavLink className= 'focus:bg-transparent hover:bg-transparent hover:text-blue-400' to = '/dashboard'>Dashboard</NavLink></li>}
    </ul>
  </div>
  <div className="navbar-end">

      {/* //picture */}
  {user?.email ? <div className="dropdown dropdown-end z-50 " >
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <a  id="my-anchor-element"><img  src={user?.photoURL
} /></a> <Tooltip anchorSelect="#my-anchor-element"
content={user.displayName} place="left"></Tooltip>
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            {/* <span className="badge">New</span> */}
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><Link onClick={handleLogout} to="/login" >Logout</Link></li>
      </ul>
    </div> : <Link to='/login' className="btn  border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63]    ">Login</Link>}
    {/* picture end  */}



    
  </div>
</div> 
        </>
    );
};

export default Navbar;