import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {

  render () {
    return (
      <nav className="nav navbar-default main-nav">
        <Link to="/" className="navbar-brand"> Home </Link>
        <ul className="nav navbar-nav">
          <li className="nav-item" key="signin">
            <Link to="/portfolios" className="nav-link"> portfolios </Link>
          </li>
          <li className="nav-item" key="signup">
            <Link to="/signup" className="nav-link"> Sign Up </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(Header);
