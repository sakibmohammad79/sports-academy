import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate();
  const { logInByGoogle } = useContext(AuthContext);

  const handleLogin = () => {
    logInByGoogle()
    .then(result => {
        const user = result.user;
        console.log(user)
        navigate('/')
    })
    .catch(error => {
        console.log(error.message);
    })
  }
  return (
    <>
      <div className="divider">OR</div>
      <button onClick={handleLogin} className="btn btn-outline btn-primary">
        <FaGoogle /> SignUp By Google
      </button>
    </>
  );
};

export default SocialLogin;
