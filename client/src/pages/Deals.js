import React, { Component } from 'react';
import Nav from '../Component/Nav';
import DealsComponent from '../Component/Deals';
import Footer from '../Component/Footer';
import Loading from '../Component/Loading';

class Deals extends Component {

  render() {
    const deals = this.props.deals.map(deal => <DealsComponent key={deal.id} deal={deal} add={this.props.add}/> );
    return (
      <div style={{minHeight: "100%", position: "relative"}}>
        <div className="navbar-fixed">
          <Nav/>
        </div>
        
        <main className="container"  style={{marginTop:'20px', bottom: "20px"}}>
          <div className="row">
            {this.props.isready ? deals : <Loading /> }
          </div>
        </main>
      </div>
    );
  }
}

export default Deals;
