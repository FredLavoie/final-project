import React, { Component } from 'react';


class Nav extends Component {

  logoutFcn(event) {
    event.preventDefault();
    localStorage.clear();
    window.location.assign('/');
  }

  render() {

    let fix = false;
    const localItem = localStorage.getItem('saveShoppingcart')
    const items = JSON.parse(localItem);
    let cartCounter;
    if(localItem !== null){
      fix = true
      cartCounter = (items) => {
        let counter = 0;
        for(let item of items) {
           counter += item.cart_quantity
        } 
        return counter;
      }
    }
    

    let inOut = "";
    if(localStorage.getItem('token')) {
      inOut = <a onClick={this.logoutFcn}>Logout</a>
    } else {
      inOut = <a href='/users/login'>Login</a>
    }
    
    let dashBoard = "";
    if(localStorage.getItem('token')) {
      dashBoard = <a href='#'>View Orders</a>
    }
    if(localStorage.getItem('token') && localStorage.getItem('merchant_id')) {
      dashBoard = <a href='/merchants/dashboard'>Dashboard</a>
    }     

    const username = localStorage.getItem('username');
    const businessName = localStorage.getItem('business_name');
    let signUp ="";
    if(localStorage.getItem('business_name') !== null) {
      signUp = <span style={{color: "#4caf50", backgroundColor: "white", padding: "2px 5px"}}> { (businessName !== null) && (businessName !== undefined) ? 'Hello ' + businessName : '' }</span>
    } 
    else if(localStorage.getItem('token')) {
      signUp = <span style={{color: "#4caf50", backgroundColor: "white", padding: "2px 5px"}}> { (username !== null) && (username !== undefined) ? 'Hello ' + username : '' }</span>
    }
    else {
      signUp = <a href="/signup">Sign Up</a>
    }

    let cartDisplay = "";
    if(localStorage.getItem('user_id')) {
      cartDisplay =  <a href="/shoppingcart">Cart( { fix ? cartCounter(items) : 0} )</a>
    } else {
      cartDisplay = "";
    }
  
    return (
      <nav className="no-shadows green">
        <div className="nav-wrapper container">
          <a href="/" className="brand-logo">Food<span className="green">Cycle</span></a>
          <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down menu-item">
            <li>{dashBoard}</li>
            <li><a href="/deals">Deals</a></li>
            <li>{inOut}</li>
            <li>{cartDisplay}</li>
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