import React from "react";

const SingleMsg = props => {
  return (
    <div>
      {props.msg.message}
      <i className="material-icons">edit</i>
      <i className="material-icons">close</i>
      <i className="material-icons">delete_outline</i>
    </div>
  );
};

export default SingleMsg;
