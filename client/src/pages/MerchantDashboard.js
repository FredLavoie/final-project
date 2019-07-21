import React, { Component } from 'react'
import Nav from '../Component/Nav';
import Main_merchant from '../Component/Main-merchant';
import Footer from '../Component/Footer';

export class MerchantDashboard extends Component {
    render() {
        let merchantDeals = this.props.deals
       
        let datamerchantDeals = merchantDeals.map((deals) => {
            return(<Main_merchant deals={deals}/>)
        }
       );
      return (
        <div>
          <Nav />
          {datamerchantDeals}  
          <Footer />
        </div>
      )
    }
  }
  
  export default MerchantDashboard
  