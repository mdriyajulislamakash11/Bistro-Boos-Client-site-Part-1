import React from "react";
import useAuth from "../hook/useAuth";
import { FaGoogle } from "react-icons/fa";
import useAxiosPublic from "../hook/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin().then((result) => {
      console.log(result);
      const userInfo = {
        email: result.user.email,
        name: result.user.displayName,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate(from, { replace: true });
      });
    });
  };

  return (
    <div className="px-4 mb-2">
      <div>
        <button onClick={handleGoogleLogin} className="btn btn-neutral">
          <FaGoogle className="mr-1" />
          Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
