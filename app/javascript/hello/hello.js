import React, { Component } from 'react';
import './hello.css';

class Hello extends Component {
  render() {
    return (
      <div className="green">Hello {this.props.name}!</div>
    )
  }
}

export default Hello;
