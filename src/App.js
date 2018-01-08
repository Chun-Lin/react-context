import React, { Component } from 'react'
import './App.css'
import MessageList from './MessageList'

class App extends Component {
  render() {
    return (
      <MessageList messages={[{text: 'test1'}, {text: 'test2'}]}/>
    )
  }
}

export default App
