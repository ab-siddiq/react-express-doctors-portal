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
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your name"
                class="input input-bordered w-full max-w-xs"
                {...register("email", {
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "error message", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label class="label">
                <span class="label-text-alt">
                  {errors.email?.type === "required" &&
                    "First name is required"}
                </span>
              </label>
            </div>

            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Your password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", {
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: "error message", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label class="label">
                <span class="label-text-alt">
                  {errors.password && "Last name is required"}
                </span>
              </label>
            </div>
            <div className="flex justify-end">
              <button class="btn btn-primary w-full">Login</button>
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
