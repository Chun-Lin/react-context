import React, { Component } from 'react'
import './App.css'
import Button from './Button'

class Message extends Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}

export default Message