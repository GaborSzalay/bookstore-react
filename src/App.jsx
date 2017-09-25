import React, {Component} from 'react';
import {connect} from 'react-redux'
import logo from './logo.svg';
import './App.css';
import Search from './Search';
import Cart from './Cart'
import Detail from './Detail'
import {Router, Route, Link} from 'react-router-dom'
import Button from 'react-md/lib/Buttons/Button';
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory();

const mapStateToProps = (state) => {
  return {searchValue: state.searchValue};
};

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
            <span>{this.props.searchValue}</span>
            <Button flat primary swapTheming>Hello</Button>
            <ul>
              <li>
                <Link to="/">Search</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/detail">Detail</Link>
              </li>
            </ul>
          </div>
          <Route exact path="/" component={Search}/>
          <Route path="/cart" component={Cart}/>
          <Route path="/detail/:id?" component={Detail}/>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(App);
