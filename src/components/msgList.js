import React from React;



const MsgList = props =>{

    <div>
        {props.msgs.map(msg => (
            <Msg msg ={msg} id = {msg.id} />
        ))}
    </div>


}

export default MsgList;