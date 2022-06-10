import React, { useState } from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
const Login = () => {
  // const [user, setUser] = useState({});
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Please Login!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your name"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required!",
                  },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "Provide valid email!", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                <span className="label-text-alt text-red-600">
                  {errors.email?.type === "required" && "email is required"}
                </span>
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required!",
                  },
                  pattern: {
                    value: 3,
                    message: "Provide valid password", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                <span className="label-text-alt text-red-600">
                  {errors.password && "password is required"}
                </span>
              </label>
            </div>
            <div className="flex justify-end">
              <button className="btn btn-primary w-full">Login</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <button
            className="btn btn-outline btn-secondary"
            onClick={() => signInWithGoogle()}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
