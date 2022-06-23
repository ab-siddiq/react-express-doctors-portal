import React from "react";
import { toast } from 'react-toastify';
const User = ({ user, refetch, index }) => {
  // console.log(user)
  const { _id,email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if(res.status === 403){
          toast.error('Unauthorized!');
        }
        return res.json();
      })
      .then((data) => {
        if(data.modifiedCount > 0){

          refetch();
          toast.success('Make admin successfully!');
        }
      });
  };
  const makeUser = () => {
    fetch(`http://localhost:5000/user/user/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if(res.status === 403){
          toast.error('Unauthorized!');
        }
        return res.json()
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Make admin successfully!");
        }
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
      <td>{email}</td>
      <td>{_id}</td>
      <td>{role}</td>
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
