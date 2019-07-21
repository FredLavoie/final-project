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
  console.log('I can see this part')
  console.log(this.props.match); 
  console.log(this.props.match.params.id); //this is the id 
  const id = this.props.match.params.id
  console.log(`/merchants/7/${id}`);
  const { handle }  = this.props.match.params
  console.log(handle); 
  console.log(`/merchants/7/${handle}`);
    fetch(`/merchants/${id}/dashboard`)
    .then(res => res.json())
    .then(data => {  
      console.log('Am I receiving data from server?')
      console.log(data);
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
  