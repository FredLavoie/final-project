import React, { Component } from 'react';
import Nav from './NavHome';

export class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
        <section className="summury-header container">
          <h1>No food left behind!</h1>
          <p>FoodCycle provides a place for merchants and consumers to connect by allowing merchants to<br />
          advertise food at a discounted price that would other be wasted. Click on <strong>Deals</strong> and see<br />
          what merchants around you have to offer!</p>
          <a className="waves-effect waves-light btn-large" href="/deals">Browse deals</a>
        </section>
      </header>
    );
  }
}
export default Header;
