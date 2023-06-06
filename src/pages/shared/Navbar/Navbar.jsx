import { Link } from "react-router-dom";
import logo from "../../../assets/wolves-logo.png";


const Navbar = () => {
    const navItems = <>
            <li><Link>Home</Link></li>
            <li><a>Blog</a></li>
    </>
    return (
        <div style={{height: '100px'}} className="navbar bg-black text-white px-8">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navItems}
      </ul>
    </div>
    <img className="m-0 t-0" style={{width: '90px', height: '70px'}} src={logo} alt="" />
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