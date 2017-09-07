import React, { Component } from 'react';

class Todo extends Component {
  render() {
    var {id , text} = this.props;
    return (
      <div>
        <h3>{id} : {text}</h3>
      </div>
    )
  }
}

module.exports = Todo;
