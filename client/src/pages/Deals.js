import React, { Component } from 'react';
import Nav from '../Component/Nav';
import DealsComponent from '../Component/Deals';
import Loading from '../Component/Loading';
import DealMerchant from '../pages/DealMerchant';
import Map from '../Component/Map';



class Deals extends Component {
  state = {toggle : 1}

  changeState = (num) => {
    console.log('changeState function being called: ', num)
    this.setState({toggle: num});
  }

  render() {

    const dealsD = this.props.deals.map(deal => <DealsComponent key={deal.deal_id} deal={deal} add={this.props.add} customClass="m4"/> );
    if(this.state.toggle == 2){
      return( 
      <div style={{minHeight: "100%", position: "relative"}}>
        <div className="navbar-fixed">
        <Nav/>
        </div>
          <p>
            <label>
              <input name="group1" type="radio" onClick={() => this.setState({toggle:1})} />
              <span>Sort By Merchant</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" onClick={() => this.setState({toggle:2})} defaultChecked/>
              <span>Sort By Date</span>
            </label>
          </p>
          <p>
            <label>
              <input name="group1" type="radio" onClick={() => this.setState({toggle:3})} />
              <span>Map</span>
            </label>
          </p> 
          <main className="container"  style={{marginTop:'20px', bottom: "20px"}}>
            <div className="row">
              {this.props.isready ? dealsD : <Loading /> }
            </div>
          </main>
       </div>
       )
    } else if(this.state.toggle == 1) {
    return (
      <div style={{minHeight: "100%", position: "relative"}}>
        <Nav/>
        <p>
        <label>
          <input name="group1" type="radio" onClick={() => this.setState({toggle:1})} defaultChecked/>
          <span>Sort By Merchant</span>
        </label>
      </p>
      <p>
        <label>
          <input name="group1" type="radio" onClick={() => this.setState({toggle:2})}/>
          <span>Sort By Date</span>
        </label>
      </p>
      <p>
      <label>
        <input name="group1" type="radio" onClick={() => this.setState({toggle:3})}/>
        <span>Map</span>
      </label>
    </p>
        {this.props.isready ? <DealMerchant deals={this.props.deals} add={this.props.add}/> : <Loading /> }
      </div>
    );
  } else if(this.state.toggle == 3) {
    return ( <Map changeState={this.changeState} /> );
  }
}
}

export default Deals;
