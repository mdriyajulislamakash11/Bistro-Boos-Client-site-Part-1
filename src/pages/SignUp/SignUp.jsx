import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../Firebase/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContex);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;

        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Signup Successful!",
              text: `Welcome, ${data.name}!`,
              timer: 2000,
              showConfirmButton: false,
            });

            reset();
            navigate(from, { replace: true });
          })
          .catch((error) => {
            console.error("Profile update error:", error);
            Swal.fire({
              icon: "error",
              title: "Profile Update Failed",
              text: error.message || "Something went wrong while updating your profile.",
            });
          });
      })
      .catch((error) => {
        console.error("Signup error:", error);
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
          text: error.message || "Please try again later.",
        });
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Bistro Boss | Sign Up</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up Now!</h1>
          <p className="py-6">
            Create your account and explore exclusive features tailored just for you.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Your Name"
                className="input input-bordered"
              />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                {...register("photoURL", { required: true })}
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
              />
              {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="input input-bordered"
              />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s)/,
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be at least 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">Password must be less than 20 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must include at least one uppercase letter, one lowercase letter,
                  one number, and one special character.
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Sign Up</button>
            </div>
          </form>

          {/* Login Link */}
          <p className="text-center mb-4">
            <small>
              Already have an account?{" "}
              <Link className="text-blue-600 font-bold" to="/login">
                Log In
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
