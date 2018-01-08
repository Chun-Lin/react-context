import React, { Component } from 'react'
import './App.css'
import Message from './Message'
import shortid from 'shortid'

class MessageList extends Component {

  render() {
    const color = "Yellow";
    const children = this.props.messages.map((message) =>
      <Message text={message.text} color={color} key={shortid.generate()}/>
    );
    return <div>{children}</div>;
  }
}
export default MessageList
