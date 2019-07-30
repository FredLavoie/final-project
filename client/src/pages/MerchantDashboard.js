import React, { Component } from 'react';
import Nav from '../Component/Nav';
import MainMerchant from '../Component/Main-merchant';
import M from "materialize-css";
import { Redirect } from 'react-router-dom';

export class MerchantDashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      merchant_deals: [],
    };
  }
  state = {
    toDashboard: false,
    merchant_id: null
  }


updateDeal = () =>{
  console.log("#Test", this.state.edit, this.state.merchant_deals);
}

componentDidMount() {
  M.AutoInit();
  //for merchant to view their own deals
  const id = localStorage.getItem('merchant_id');
  fetch(`/api/merchants/${id}/dashboard`, {
    headers: {"authorization": localStorage.getItem('token')}})
    .then(res => res.json())
    .then(data => {
      this.setState({ merchant_deals: data });
      this.setState({ toDashboard: true });
      this.setState({ merchant_id: id });
    });
}

deleteDeal = (id) => {
  const url = `/api/deals/${id}/delete`;
  fetch(url,{method:"POST"}).then(result =>{
    if(result.ok){
      const data = this.state.merchant_deals.filter(deal => deal.id !== id);
      this.setState({merchant_deals: data});
    }
  });
}

render() {

  if (!localStorage.getItem('merchant_id')) {
    return <Redirect to='/login'/>;
  }

  let merchantDeals = this.state.merchant_deals;
  merchantDeals.map((deals, index) => {
    return(<Merchant-deal-row key={index} deals={deals}/>);
  }
  );
  return (
    <div>
      <Nav /> 
      <MainMerchant updateDeal={this.updateDeal} deleteDeal={this.deleteDeal} deals={this.state.merchant_deals} /> 
    </div>
  );
}
}
  
export default MerchantDashboard;