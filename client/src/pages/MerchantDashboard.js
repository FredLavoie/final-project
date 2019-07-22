import React, { Component } from 'react'
import Nav from '../Component/Nav';
import Main_merchant from '../Component/Main-merchant';
import Footer from '../Component/Footer';
import Loading from '../Component/Loading';
import M from "materialize-css";
import { Redirect } from 'react-router-dom'

export class MerchantDashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      merchant_deals: [],
     }
}

updateDeal = () =>{
  console.log("#Test", this.state.edit, this.state.merchant_deals)
}

componentDidMount() {
  M.AutoInit();
  //for merchant to view their own deals
  const id = this.props.match.params.id
  const { handle }  = this.props.match.params
    fetch(`/merchants/${id}/dashboard`)
    .then(res => res.json())
    .then(data => {   
      this.setState({merchant_deals: data})
    }) 
}

deleteDeal = (id) => {
  const url = `/deals/${id}/delete`
  fetch(url,{method:"POST"}).then(result =>{
    if(result.ok){
        const data = this.state.merchant_deals.filter(deal => deal.id != id)
        this.setState({merchant_deals: data})
    }
  })
}

    render() {
        let merchantDeals = this.state.merchant_deals
        let datamerchantDeals = merchantDeals.map((deals) => {
            return(<Merchant-deal-row  deals={deals}/>)
        }
       );
      return (
        <div>
          <Nav /> 
          <Main_merchant updateDeal={this.updateDeal} deleteDeal={this.deleteDeal} deals={this.state.merchant_deals} /> 
          <Footer />
        </div>
      )
    }
  }
  
  export default MerchantDashboard