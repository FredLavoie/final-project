import React, { Component } from 'react';


class Nav extends Component {
  
  logoutFcn(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.assign('/');
  }

  render() {
    // let isOk = false;
    // const localItem = localStorage.getItem('saveShoppingcart')
    // const items = JSON.parse(localItem);
    // let cartCounter;
    // if(localItem !== null) {
    //   isOk = true;
    //   cartCounter = (itemss) => {
    //    let counter = 0;
    //    for(let item of itemss) {
         
    //       counter += item.cart_quantity
    //    } 
    //    return counter;
    //  }
    // }
    
  
    let inOut = "";
    if(localStorage.getItem('token')) {
      inOut = <a onClick={this.logoutFcn}>Logout</a>
    } else {
      inOut = <a href='users/login'>Login</a>
    }
    return (
      <nav className="no-shadows green">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">Food<span className="green">Cycle</span></a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down menu-item">
            <li><a href="/deals">Deals</a></li>
            <li>{inOut}</li>
            <li><a href="/signup">Sign Up</a></li>
            <li><a href="/shoppingcart">Cart()</a></li>
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



