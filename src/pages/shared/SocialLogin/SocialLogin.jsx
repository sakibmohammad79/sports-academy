import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { logInByGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

  const handleLogin = () => {
    logInByGoogle()
        .then((result) => {
            const googleLogedUser = result.user;
            console.log(googleLogedUser);
            const saveUser = { name: googleLogedUser.displayName, email: googleLogedUser.email };
      console.log(saveUser);
      fetch("https://wolves-server.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
            navigate(from, {replace: true});
        });  
        })
    }
  return (
    <>
      <div className="divider">OR</div>
      <button onClick={handleLogin} className="btn btn-outline bg-lime-500 border-none">
        <FaGoogle /> SignUp By Google
      </button>
    </>
  );
};

export default SocialLogin;
