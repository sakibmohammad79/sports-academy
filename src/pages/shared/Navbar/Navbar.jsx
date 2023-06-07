import { Link } from "react-router-dom";
import logo from "../../../assets/logo4-800x307.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {
  const {user, logOutUser} = useContext(AuthContext);

    const navItems = <>
            <li><Link to='/' className="font-bold uppercase hover:text-lime-500">Home</Link></li>
            <li><Link to="/instructors" className="font-bold uppercase  hover:text-lime-500">Instructors</Link></li>
            <li><Link to="/class" className="font-bold uppercase  hover:text-lime-500">Classes</Link></li>
            {
              user && 
              <div className="indicator">
              <span className="indicator-item badge badge-secondary">+0</span> 
              <button className="btn btn-sm"><FaShoppingCart></FaShoppingCart></button>
              </div>
            }
    </>

    const handleSignOut = () => {
      logOutUser()
      .then(result => {
        console.log(result);
      })
    }
    return (
        <div style={{height: '100px'}} className="navbar max-w-6xl fixed z-10 bg-black text-white px-12">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <img className="m-0 t-0" style={{width: '180px', height: '80px'}} src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    
    {
      user ? 
      <>
      <img  className="rounded-full" src={user?.photoURL} style={{height: '50px', width: '50px'}} alt="" />
      <Link onClick={handleSignOut} className="ml-4 btn text-white font-bold border-none bg-[#90A31c] hover:bg-[#C1D934]">Sign Out</Link>
      </> :
      <Link to='/login' className="ml-4 text-white font-bold btn bg-[#90A31c] hover:bg-[#C1D934]">LogIn</Link>
    }
  </div>
</div>
    );
};

export default Navbar;