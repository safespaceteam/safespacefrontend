import React from "react";
import SingleMsg from "./singleMsg";

const MsgList = props => {
  return (
    <div>
      {props.msgs.map(msg => (
        <SingleMsg key={msg.id} msg={msg} id={msg.id} />
      ))}
    </div>
  );
};

export default MsgList;
