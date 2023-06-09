import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const {logInUser} = useContext(AuthContext);
  const { register, formState: { errors }, handleSubmit} = useForm();
  const onSubmit = (data) => {
    console.log(data);

    logInUser(data.email, data.password)
    .then((result)=> {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true})
    })
    .catch((error) => {
        console.log(error.message);
    })
  };
    return (
        <div className="hero min-h-screen bg-base-200">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card-body">
      <h1 className="text-4xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
          {errors.email?.type === 'required' && <p className="text-red-500" role="alert">Email is required</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
          {errors.password?.type === 'required' && <p className="text-red-500" role="alert">password is required</p>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <SocialLogin></SocialLogin>
        <Link className="text-center" to='/signin'><h2>New Here? Please<span className="font-bold text-primary"> Sign Up</span></h2></Link>
      </div>
      </form>
      
    </div>
  </div>

    );
};

export default Login;