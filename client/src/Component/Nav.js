import React, { Component } from 'react';


class Nav extends Component {
  
  logoutFcn(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.assign('/');
  }

  render() {
<<<<<<< HEAD
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
    
=======

    let fix = false;
    const localItem = localStorage.getItem('saveShoppingcart')
    const items = JSON.parse(localItem);
    let cartCounter;
    if(localItem !== null){
      fix = true
      cartCounter = (itemss) => {
        let counter = 0;
        for(let item of itemss) {
           counter += item.cart_quantity
        } 
        return counter;
      }

    }
>>>>>>> master
  
  
    let inOut = "";
    if(localStorage.getItem('token')) {
      inOut = <a onClick={this.logoutFcn}>Logout</a>
    } else {
      inOut = <a href='/users/login'>Login</a>
    }
    return (
      <nav className="no-shadows green">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">Food<span className="green">Cycle</span></a>
          <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down menu-item">
            <li><a href="/deals">Deals</a></li>
            <li>{inOut}</li>
            <li><a href="/signup">Sign Up</a></li>
<<<<<<< HEAD
            <li><a href="/shoppingcart">Cart()</a></li>
=======
            <li><a href="/shoppingcart">Cart({ fix ? cartCounter(items) : 0})</a></li>
>>>>>>> master
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



