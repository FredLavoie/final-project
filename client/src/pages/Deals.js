import React, { Component } from 'react';
import Nav from '../Component/Nav';
import DealsComponent from '../Component/Deals';
import Loading from '../Component/Loading';
import _ from 'lodash';

class Deals extends Component {

  render() {


  let merchantDealArr = _(this.props.deals).groupBy(deal => deal.business_name).map( (value, key)=> {
    return {
      business_name: key, deals: value
    }
  }).value()

  console.log("Value of merchantDealArr:",merchantDealArr)

const merchantDeal = merchantDealArr.map(merchant => {
  const deals = merchant.deals.map((deal, index) => <DealsComponent key={index} deal={deal} add={this.props.add}/> );
    return (
      <div>
        <h2 className="merchantname">{merchant.business_name}</h2><div className="container">{deals}</div>
      </div>
    )
  });
    
    return (
      <div style={{minHeight: "100%", position: "relative"}}>
        <Nav/>
        <main className="container"  style={{marginTop:'20px', bottom: "20px"}}>
          <div className="row">
            {this.props.isready ? merchantDeal : <Loading /> }
          </div>
        </main>
      </div>
    );
  }
}

export default Deals;
