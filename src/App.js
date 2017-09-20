import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Search from './Search';

const mapStateToProps = (state) => {
  return {searchValue: state.searchValue};
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <span>{this.props.searchValue}</span>
        </div>
        <Search />
      </div>
    );
  }
}

export default connect( mapStateToProps )(App);
