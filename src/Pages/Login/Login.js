import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({});

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const user = e.target.email.value;
    const password = e.target.password.value;
    const users = { user, password };

    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="">
      <form onSubmit={handleLoginSubmit}>
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
      </form>
    </div>
  );
};

export default Login;
