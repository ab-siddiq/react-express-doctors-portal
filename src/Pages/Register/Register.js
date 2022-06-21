import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../../Shared/Loading';
import useToken from './../../hooks/useToken';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const {  register,  formState: { errors },  handleSubmit,   } = useForm();
    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [token] = useToken(user);
    if (token) {
      navigate('/appointment');
    }
    if (loading ) {
      return <Loading></Loading>;
    }
    // let loginErrorMessage;
    // if (error ) {
    //   return (loginErrorMessage = <p>{error?.message }</p>);
    // }
    const onSubmit = async data => {
      await createUserWithEmailAndPassword(data.email,data.password);
      await updateProfile({ displayName: data.name, phoneNumber: data.phone });

    };
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title flex justify-center">Please Register!</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required!",
                    },
                    pattern: {
                      value: /[a-z]{5}/,
                      message: "Provide valid name!", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {errors.name?.type === "required" && errors.name.message}
                    {errors.name?.type === "pattern" && errors.name.message}
                  </span>
                </label>
              </div>

              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Your phone"
                  className="input input-bordered w-full max-w-xs"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone is required!",
                    },
                    pattern: {
                      value: /[0-9]{11}/,
                      message: "Provide valid mobile number!", // JS only: <p>error message</p> TS only support string
                    },
                  })}
                />
                <label className="label">
                  <span className="label-text-alt text-red-600">
                    {errors.phone?.type === "required" && errors.phone.message}
                    {errors.phone?.type === "pattern" && errors.phone.message}
                  </span>
                </label>
              </div>

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
                <button className="btn btn-primary w-full">Register</button>
              </div>
              {/* <label className="label">
                <span className="label-text-alt text-red-600">
                  {loginErrorMessage}
                </span>
              </label> */}
            </form>
            <p className="text-center">
              Have an account?{" "}
              <Link className="text-secondary" to="/login">
                Please login.
              </Link>
            </p>
            {/* <div className="divider">OR</div>
            <button
              className="btn btn-outline btn-secondary"
              onClick={() => signInWithGoogle()}
            >
              Sign in with Google
            </button> */}
          </div>
        </div>
      </div>
    );
};

export default Register;