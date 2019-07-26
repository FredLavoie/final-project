import React, { Component } from 'react';
import Nav from '../Component/Nav';
import DealsComponent from '../Component/Deals';
import Loading from '../Component/Loading';
import DealMerchant from '../pages/DealMerchant';


class Deals extends Component {
  state = {toggle : false}

  render() {
    const dealsD = this.props.deals.map(deal => <DealsComponent key={deal.id} deal={deal} add={this.props.add} customClass="m4"/> );
    if(this.state.toggle){
      return( 
      <div style={{minHeight: "100%", position: "relative"}}>
      <div> 
      <div className="navbar-fixed">
      <Nav/>
    </div>
        <p>
        <label>
          <input name="group1" type="radio" onClick={() => this.setState({toggle:false})} />
          <span>Sort By Merchant</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio" onClick={() => this.setState({toggle:true})} checked/>
          <span>Sort By Date</span>
        </label>
      </p>
      <main className="container"  style={{marginTop:'20px', bottom: "20px"}}>
      <div className="row">
      {this.props.isready ? dealsD : <Loading /> }
      </div>
        </main>
      </div>
      </div>
      )
    }
    return (
      <div style={{minHeight: "100%", position: "relative"}}>
        <Nav/>
        <p>
        <label>
          <input name="group1" type="radio" onClick={() => this.setState({toggle:false})} checked/>
          <span>Sort By Merchant</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio" onClick={() => this.setState({toggle:true})}/>
          <span>Sort By Date</span>
        </label>
      </p>
        {this.props.isready ? <DealMerchant deals={this.props.deals} add={this.props.add}/> : <Loading /> }
      </div>
    );
  }
}

export default Deals;
