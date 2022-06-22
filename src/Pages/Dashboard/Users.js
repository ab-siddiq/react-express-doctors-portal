import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";

const Users = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch("http://localhost:5000/user").then((res) => res.json())
  );
  console.log(users);
  //   const { data: users, isLoading} = useQuery('users' , () => fetch('http://localhost:5000/user').then(res=>res.send())) ;
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div class="overflow-x-auto">
      <table class="table table-compact w-full">
        <thead>
          <tr>
            <th>SL</th>
            <th>Avatar</th>
            <th>Email</th>
            <th>Id</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                <div class="mask mask-squircle w-12 h-12 flex items-center">
                  <img
                    src="/tailwind-css-component-profile-2@56w.png"
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </td>
              <td>{user.email}</td>
              <td>{user._id}</td>
              <td>
                d
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
