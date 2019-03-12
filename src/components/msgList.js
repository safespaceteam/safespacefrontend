import React from React;
import SingleMsg from './singleMsg';



const MsgList = props =>{

    return (<div>
        {props.msgs.map(msg => (
            <SingleMsg msg ={msg} id = {msg.id} />
        ))}
    </div>
)

}

export default MsgList;