import Footer from "../sharedPage/footer/Footer";
import Navbar from "../sharedPage/navbar/Navbar";
import { Link, Outlet } from "react-router-dom";
import { SiGoogleclassroom,SiGooglemeet } from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const DashboardLayout = () => {

const [isAdmin] = useAdmin();
const [isInstructor] = useInstructor();

    return (
        <>
        {/* navbar  */}
        <Navbar></Navbar>

        <div className="drawer lg:drawer-open ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center overflow-x-auto">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open side-Navbar</label>

    
    <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full text-xl bg-[#AC9C63] text-white">
      {/* Sidebar content here */}

      {/* instructor  */}

      {isInstructor?.instructor && <> <li><Link to='/dashboard/addclass' > <SiGoogleclassroom></SiGoogleclassroom>   Add A Class</Link></li>
      <li><Link to='/dashboard/myclasses' > <SiGooglemeet></SiGooglemeet>  My classes</Link></li> </>}

     
      



      {/* Admin  */}

      {isAdmin?.admin && <><li><Link to='/dashboard/manageclasses' > <SiGoogleclassroom></SiGoogleclassroom> Manage Classes</Link></li>
      <li><Link to='/dashboard/manageuser' > <MdManageAccounts></MdManageAccounts> Manage User</Link></li></>}
      

    </ul>
  
  </div>
</div> 





         {/* footer */}
         <Footer></Footer>

        </>
    );
};

export default DashboardLayout;