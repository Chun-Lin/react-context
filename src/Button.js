import React, { Component } from 'react'

class Button extends Component {
  render() {
    return (
      <button style={{background: this.props.color}}>
        {this.props.children}
      </button>
    );
  }
}


export default Button