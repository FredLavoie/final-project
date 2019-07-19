import React, { Component } from 'react'

export class Nav extends Component {
    render() {
        return (
          <nav className="transparent no-shadows">
          <div className="nav-wrapper container">
            <a href="#!" className="brand-logo">Food<span className="green">Cycle</span></a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down menu-item">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
            </ul>
          </div>
          <ul className="sidenav" id="mobile-demo">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
        </nav>
      
        )
    }
}

export default Nav
