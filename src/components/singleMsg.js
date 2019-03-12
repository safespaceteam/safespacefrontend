import React from "react";

const SingleMsg = props => {
  return (
    <div>
      {props.msg.message}
      <i class="material-icons">edit</i>
    </div>
  );
};

export default SingleMsg;
