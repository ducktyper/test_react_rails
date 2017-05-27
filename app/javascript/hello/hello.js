import React, { Component } from 'react';
import './hello.css';
import 'whatwg-fetch'

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('/pages/set_name', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    }).then(function(response) {
      if (response.status >= 200) {
        response.json().then(function(data) {
          console.log('API RETURN:', data);
        })
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }
    })
  }

  render() {
    return (
      <div>
        <div className="green">Hello</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name"
              value={this.state.name}
              onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Hello;
