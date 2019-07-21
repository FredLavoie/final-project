import React, { Component } from 'react'
import Nav from '../Component/Nav';
import Main_merchant from '../Component/Main-merchant';
import Footer from '../Component/Footer';
import Loading from '../Component/Loading';

export class MerchantDashboard extends Component {
  constructor(props){
    super(props)
}
    render() {
        let merchantDeals = this.props.deals
       
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
  