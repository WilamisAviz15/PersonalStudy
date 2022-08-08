import React from "react";
import UsersList from "./UsersList";

const Users = (props) => {
  return (
    <div>
      <UsersList users={props.users} />
    </div>
  );
};

export default Users;
