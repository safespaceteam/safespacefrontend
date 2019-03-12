import React, { Component } from "react";
import EditMessage from "./editMessage";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      editMsg: ""
    };
  }

  render() {
    return (
      <div>
        {this.props.msg.message}
        <EditMessage msg={this.props.msg} />
        <i className="material-icons">edit</i>
        <i className="material-icons">close</i>
        <i className="material-icons">delete_outline</i>
      </div>
    );
  }
}

export default Messages;
