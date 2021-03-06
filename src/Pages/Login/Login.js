import React, { useState ,useEffect } from "react";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading";
import useToken from './../../hooks/useToken';
const Login = () => {
  // const [user, setUser] = useState({});
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const { register, formState: { errors }, handleSubmit,} = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken( user || gUser);
  let from = location.state?.from?.pathname || "/";
  useEffect(()=>{
    if(token){
      navigate(from,{replace:true});
    }
  },[from,token,navigate])
  // if(gUser || user){
  //   navigate(from, {replace: true});
  // }
  if(loading || gLoading){
    return <Loading></Loading>;
  }
  let loginErrorMessage ;
  if(error || gError){
    return loginErrorMessage = <p>{error?.message || gError?.message}</p>;
;
  }
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title flex justify-center">Please Login!</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required!",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide valid email!", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                <span className="label-text-alt text-red-600">
                  {errors.email?.type === "required" && errors.email.message}
                  {errors.email?.type === "pattern" && errors.email.message}
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
                  minLength: {
                    value: 6,
                    message: "Password must be 6 or greater!", // JS only: <p>error message</p> TS only support string
                  },
                })}
              />
              <label className="label">
                <span className="label-text-alt text-red-600">
                  {errors.password?.type === "required" &&
                    errors.password.message}
                  {errors.password?.type === "minLength" &&
                    errors.password.message}
                </span>
              </label>
            </div>
            <div className="flex justify-end">
              <button className="btn btn-primary w-full">Login</button>
            </div>
            <label className="label">
              <span className="label-text-alt text-red-600">
                {loginErrorMessage}
              </span>
            </label>
          </form>
          <p className="text-center">
            New here?{" "}
            <Link className="text-secondary" to="/register">
              Create an account.
            </Link>
          </p>
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
