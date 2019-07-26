import React, { Component } from 'react';
import Nav from '../Component/Nav';
import DealsComponent from '../Component/Deals';
import Loading from '../Component/Loading';
import DealMerchant from '../pages/DealMerchant';


class Deals extends Component {
  state = {toggle : false}

  render() {
    if(this.state.toggle){
      return( <div> 
        <Nav/>
        <p>
        <label>
          <input name="group1" type="radio" onClick={() => this.setState({toggle:true})} />
          <span>Sort By Merchant</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio" onClick={() => this.setState({toggle:false})}/>
          <span>Sort By Date</span>
        </label>
      </p>
      {this.props.isready ? <DealMerchant deals={this.props.deals} add={this.props.add}/> : <Loading /> }
      </div>
      )
    }
    const deals = this.props.deals.map(deal => <DealsComponent key={deal.id} deal={deal} add={this.props.add} customClass="m4"/> );
    return (
      <div style={{minHeight: "100%", position: "relative"}}>
        <Nav/>
        <p>
        <label>
          <input name="group1" type="radio" onClick={() => this.setState({toggle:true})} />
          <span>Sort By Merchant</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio" onClick={() => this.setState({toggle:false})}/>
          <span>Sort By Date</span>
        </label>
      </p>
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