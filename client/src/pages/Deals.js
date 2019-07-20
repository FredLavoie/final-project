import React, { Component } from 'react'
import Nav from '../Component/Nav';
import DealsComponent from '../Component/Deals';
import Footer from '../Component/Footer';
import Loading from '../Component/Loading';

 class Deals extends Component {
  constructor(props){
    super(props);
  }


  render() {
   const deals = this.props.deals.map(deal => <DealsComponent deal={deal} /> )
    return (
      <div>
      <Nav/>
      <main className="container"  style={{marginTop:'20px'}}>
      <div className="row">
        {this.props.isready ? deals : <Loading /> }
      </div>
      </main>
    {this.props.isready ? <Footer /> :'' }
      </div>
    )
  }
}

export default Deals
