import React, { useContext } from "react";
import {  useForm } from "react-hook-form";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";


const Signin = () => {
  const navigate = useNavigate();
    const {createUser, updateProfileUser} = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit, watch, reset } = useForm();
    const password = React.useRef({});
    password.current = watch('password', '');
    const onSubmit = (data) => {
      createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
  
        updateProfileUser(data.name, data.photoURL)
        const saveUser = { name: data.name, email: data.email };
        console.log(saveUser);
        fetch("https://wolves-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully.",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
      });
    };

  return (
        <div className="hero min-h-screen bg-base-200 py-12">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card-body">
                <h2 className="text-3xl font-bold uppercase text-lime-500 text-center">Please Sign Up!</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                {errors.name?.type === 'required' && <p className="text-red-500" role="alert">Name is required</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                {errors.email?.type === 'required' && <p className="text-red-500" role="alert">Email is required</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })} placeholder="password" className="input input-bordered" />
                {errors.password?.type === "required" && (
                    <p className="text-red-500">passwprd is required</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500">
                      password must be 6 characters
                    </p>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <p className="text-red-500">
                      password must less than 20 characters
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500">
                      password must have one upperCase one lowerCase one specila
                      characters and one number
                    </p>
                  )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" {...register("confirmPassword", {
                      required: true,
                      validate: (value) => value === password.current || 'Passwords do not match'
                    })} placeholder="Confirm password" className="input input-bordered" />
                    {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo" className="input input-bordered" />
                {errors.photoURL?.type === "required" && (
                    <p className="text-red-500">passwprd is required</p>
                  )}
              </div>
              <div className="form-control mt-6">
                <input className="btn bg-lime-500" type="submit" value="Signup" />
              </div>
              <SocialLogin></SocialLogin>
              <Link to='/login' className="text-center pt-2">Already Have An Account? Please<span className="font-bold text-lime-500"> Login</span></Link>
            </div>
            </form>
          </div>
        </div>
    );
};

export default Signin;