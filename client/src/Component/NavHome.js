import React, { Component } from 'react';


class Nav extends Component {

  logoutFcn(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.assign('/');
  }
  
  render() {

    let inOut = "";
    if(localStorage.getItem('token')) {
      inOut = <a onClick={this.logoutFcn}>Logout</a>
    } else {
      inOut = <a href='users/login'>Login</a>
    }

    let dashBoard = "";
    if(localStorage.getItem('token') && localStorage.getItem('merchant_id')) {
      dashBoard = <a href='/merchants/dashboard'>Dashboard</a>
    } else {
      dashBoard = <a href='#'>View Orders</a>
    }

    let signUp ="";
    if(localStorage.getItem('token')) {
      signUp = <a>Hello</a>
    } else {
      signUp = <a href="/signup">Sign Up</a>
    }

    
    return (
      <nav className="transparent no-shadows">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">Food<span className="green">Cycle</span></a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down menu-item">
            <li>{dashBoard}</li>
            <li><a href="/deals">Deals</a></li>
            <li>{inOut}</li>
            <li>{signUp}</li>
          </ul>
        </div>
        <ul className="sidenav" id="mobile-demo">
          <li>{dashBoard}</li>
          <li><a href="/deals">Deals</a></li>
          <li>{inOut}</li>
          <li>{signUp}</li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
