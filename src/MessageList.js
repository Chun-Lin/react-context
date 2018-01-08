import React, { Component } from 'react'
import './App.css'
import Message from './Message'
import shortid from 'shortid'
import PropTypes from 'prop-types'

class MessageList extends Component {
  getChildContext(){
    return {color: 'Yellow'}
  }

  render() {
    const children = this.props.messages.map(message => (
      <Message
        text={message.text}
        key={shortid.generate()}
      />
    ))
    return <div>{children}</div>
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string,
}

export default MessageList
