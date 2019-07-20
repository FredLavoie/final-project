import React, { Component } from 'react'

 class Nav extends Component {
<<<<<<< HEAD
  render() {
    return (
      <nav style={this.props.styleNave} className="transparent no-shadows">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">Food<span className="green">Cycle</span></a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
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
=======
   constructor(props){
     super(props)
   }
    render() {
        return (
          <nav className="transparent no-shadows">
          <div className="nav-wrapper container">
            <a href="/" className="brand-logo">Food<span className="green">Cycle</span></a>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down menu-item">
              <li><a href="/deals">Deals</a></li>
              <li><a href="collapsible.html">login</a></li>
              <li><a href="mobile.html">Sign up</a></li>
            </ul>
          </div>
          <ul className="sidenav" id="mobile-demo">
          <li><a href="sass.html">Deals</a></li>
          <li><a href="collapsible.html">Login</a></li>
          <li><a href="mobile.html">Sign up</a></li>
        </ul>
        </nav>
>>>>>>> master
        )
    }
}
export default Nav
