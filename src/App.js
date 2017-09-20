import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Cart from './Cart'
import Detail from './Detail'
import {
  Router,
  Route
} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

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
        <Router history={createBrowserHistory()}>
            <div>
                <Route exact path="/" component={Search}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/detail" component={Detail}/>            
            </div>
        </Router>           
      </div>
    );
  }
}

export default connect( mapStateToProps )(App);
