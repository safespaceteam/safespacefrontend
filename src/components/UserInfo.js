import React from "react";
import Avatar from "@material-ui/core/Avatar";

const UserInfo = props => {
  return (
    <div>
      <Avatar>
        <i className="material-icons">person_outline</i>
      </Avatar>
      {props.name == null ? <h1>Welcome</h1> : props.name}
    </div>
  );
};

export default UserInfo;
