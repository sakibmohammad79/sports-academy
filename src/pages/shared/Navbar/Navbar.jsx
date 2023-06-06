import { Link } from "react-router-dom";
import logo from "../../../assets/logo4-800x307.png";


const Navbar = () => {
    const navItems = <>
            <li><Link to='/' className="font-bold uppercase hover:text-red-600">Home</Link></li>
            <li><Link to="/instructors" className="font-bold uppercase  hover:text-red-600">Instructors</Link></li>
            <li><Link to="/class" className="font-bold uppercase  hover:text-red-600">Classes</Link></li>
    </>
    return (
        <div style={{height: '100px'}} className="navbar fixed z-10 max-w-6xl bg-black text-white px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <img className="m-0 t-0" style={{width: '150px', height: '80px'}} src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;