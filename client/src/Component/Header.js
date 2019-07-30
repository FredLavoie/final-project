import React, { Component } from 'react';
import NavHome from './NavHome';

export class Header extends Component {
  render() {
    return (
      <header>
        <NavHome />
        <section className="summury-header container">
          <h2>No Food Feft Behind!</h2>
          <h6><span className="intro-text">FoodCycle provides a place for merchants and consumers to connect by allowing merchants to<br />
          advertise food at a discounted price that would other be wasted. Click on <strong>Deals</strong> and see<br />
          what merchants around you have to offer!</span></h6><br />
          <a className="waves-effect waves-light btn-large" href="/deals">Browse deals</a>
        </section>
      </header>
    );
  }
}
export default Header;
