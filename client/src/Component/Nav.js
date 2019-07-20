import React, { Component } from 'react'

 class Nav extends Component {
    render() {
        return (
          <nav className="no-shadows green">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">Food<span className="green">Cycle</span></a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down menu-item">
              <li><a href="/deals">Deals</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Sign Up</a></li>
            </ul>
          </div>
          <ul className="sidenav" id="mobile-demo">
          <li><a href="/deals">Deals</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
        </nav>
        )
    }
}
export default Nav
