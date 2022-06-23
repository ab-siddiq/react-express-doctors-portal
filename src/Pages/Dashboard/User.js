import React from "react";
const User = ({ user, refetch, index }) => {
  // console.log(user)
  const { email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  const makeUser = () => {
    fetch(`http://localhost:5000/user/user/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="mask mask-squircle w-12 h-12 flex items-center">
          <img
            src="/tailwind-css-component-profile-2@56w.png"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </td>
      <td>{user.email}</td>
      <td>{user._id}</td>
      <td>
        
        {role !== "admin" || !role ? (
          <button className="btn w-[120px] btn-success mx-1" onClick={makeAdmin}>
            Make Admin
          </button>
        ) : (
          <button className="btn w-[120px] btn-success mx-1" onClick={makeUser}>
            Make User
          </button>
        )}

        <button className="btn w-[120px] btn-info mx-1">Edit</button>

        <button className="btn w-[120px] btn-warning mx-1">Delete</button>
      </td>
    </tr>
  );
};

export default User;
