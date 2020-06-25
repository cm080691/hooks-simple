import React from "react";
import useResources from "./useResources";

const UserList = () => {
  const users = useResources("users");
  // this will pass "users" as a prop to useResources and change value of resource -> users

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
