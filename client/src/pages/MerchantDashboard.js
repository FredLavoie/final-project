import React, { Component } from 'react'
import Nav from '../Component/Nav';
import Main_merchant from '../Component/Main-merchant';
import Footer from '../Component/Footer';
import Loading from '../Component/Loading';
import M from "materialize-css";

export class MerchantDashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      merchant_deals: [],
     }

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

    render() {
        let merchantDeals = this.state.merchant_deals
       
        let datamerchantDeals = merchantDeals.map((deals) => {
            return(<Main_merchant deals={deals}/>)
        }
       );
      return (
        <div>
          <Nav /> 
          {this.props.isready ? datamerchantDeals : <Loading /> }
          <Footer />
        </div>
      )
    }
  }
  
  export default MerchantDashboard