import React from "react";
import Messages from "./messages";

const MsgList = props => {
  return (
    <div>
      {props.msgs.map(msg => (
        <Messages key={msg.id} msg={msg} id={msg.id} />
      ))}
    </div>
  );
};

export default MsgList;
