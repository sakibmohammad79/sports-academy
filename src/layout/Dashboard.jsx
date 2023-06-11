import React from 'react';
import { FaCalendarAlt, FaHome, FaUtensils, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hook/useAdmin';
import useInstructor from '../hook/useInstructor';

const Dashboard = () => {
   
    //const isAdmin = true
     const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side bg-lime-500">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80">
      
      {
        isAdmin ? 
        <div className='font-bold text-lg uppercase'>
         <li><NavLink  to='/dashboard/manageclass'><FaHome></FaHome>Manage Classes</NavLink></li>
         <li><NavLink to='/dashboard/manageusers'><FaUtensils></FaUtensils>Manage Users</NavLink></li>
        </div>
         :
        isInstructor ?
        <div className='font-bold text-lg uppercase'>
          <li><NavLink to='/dashboard/addclass'><FaHome></FaHome>Add A Class</NavLink></li>
          <li><NavLink to='/dashboard/myclass'><FaCalendarAlt></FaCalendarAlt>My Class</NavLink></li>
          
        </div> 
        :
        <div className='font-bold text-lg uppercase'>
           <li><NavLink to='/dashboard/selectedclass'><FaHome></FaHome>My Selected Class</NavLink></li>
           <li><NavLink to='/dashboard/enrolledclass'><FaCalendarAlt></FaCalendarAlt>My Enrolled Class</NavLink></li>
           <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
        </div>

      }
      
      <div className="divider"></div>
      <li className='font-bold text-lg uppercase'><NavLink to='/'><FaHome/>Home</NavLink></li>
      <li className='font-bold text-lg uppercase'><NavLink to="/instructor">All Instructor</NavLink></li>
      <li className='font-bold text-lg uppercase'><NavLink to="/class">All Classes</NavLink></li>
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;