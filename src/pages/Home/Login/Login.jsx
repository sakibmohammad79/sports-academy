import { Link } from "react-router-dom";
import {  FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
      <h1 className="text-4xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="divider">OR</div>
        <button className="btn btn-outline btn-primary"><FaGoogle/> Login By Google</button>
        <Link className="text-center" to='/signin'><h2>New Here? Please<span className="font-bold text-primary"> Sign Up</span></h2></Link>
      </div>
      
    </div>
  </div>

    );
};

export default Login;