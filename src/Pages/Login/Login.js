import React, { useState } from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
const Login = () => {
  // const [user, setUser] = useState({});
  const [signInWithGoogle, user, loading, error] =
    useSignInWithGoogle(auth);
   
  // const handleLoginSubmit = (e) => {
  //   e.preventDefault();
  //   const user = e.target.email.value;
  //   const password = e.target.password.value;
  //   const users = { user, password };

  //   fetch("http://localhost:5000/user", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(users),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };
  return (
    <div className="flex justify-center items-center h-screen">
      {/* <form onSubmit={handleLoginSubmit}>
        <input
          type="email"
          name="email"
          placeholder="enter email"
          class="input input-bordered w-full max-w-xs"
        />

        <input
          type="password"
          name="password"
          placeholder="enter password"
          class="input input-bordered w-full max-w-xs"
        />
        <input
          type="submit"
          value="login"
          class="input input-bordered w-full max-w-xs"
        />
      </form> */}
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Please Login!</h2>
          <div class="divider">OR</div>
          <button
            class="btn btn-outline btn-secondary"
            onClick={()=>signInWithGoogle()}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
