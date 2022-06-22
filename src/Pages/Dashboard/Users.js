import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import User from "./User";

const Users = () => {
  const { data: users, isLoading, refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/user",{
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then((res) => res.json())
  );
//   console.log(users);
  //   const { data: users, isLoading} = useQuery('users' , () => fetch('http://localhost:5000/user').then(res=>res.send())) ;
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-compact w-full">
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
            <User key={user._id} user={user} index={index} refetch={refetch}></User>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
