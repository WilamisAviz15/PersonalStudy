import React, { useState } from "react";
import "./UserItem.css";

const UserItem = (props) => {
  const [userInfo, setUserInfo] = useState();
  return (
    <li>
      <div className="container-item">
        <div className="container-item-elements">
          <input
            readOnly
            type="text"
            value={props.name + ` (` + props.age + ` years old)`}
          />
        </div>
      </div>
    </li>
  );
};

export default UserItem;
