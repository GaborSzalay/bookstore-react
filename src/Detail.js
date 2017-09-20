import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

class Detail extends Component {
  render() {
    return (
      <h1>
        Detail
        {this.props.match.params.id}
      </h1>
    );
  }
}

export default Detail;
