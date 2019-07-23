import React, { Component } from 'react';

class Nav extends Component {

  logoutFcn(event) {
    event.preventDefault();
    localStorage.clear();
  }
  
  render() {

    let inOut = "";
    if(localStorage.getItem('token')) {
      inOut = <a onClick={this.logoutFcn} >Logout</a>;
    } else {
      inOut = <a href='/login'>Login</a>;
    }
    
    return (
      <nav className="transparent no-shadows">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">Food<span className="green">Cycle</span></a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down menu-item">
            <li><a href="/deals">Deals</a></li>
            <li>{inOut}</li>
            <li><a href="/signup">Sign Up</a></li>
          </ul>
        </div>
        <ul className="sidenav" id="mobile-demo">
          <li><a href="/deals">Deals</a></li>
          <li>{inOut}</li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
      </nav>
    );
  }
}
export default Nav;
