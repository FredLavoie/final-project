import React, { Component } from 'react';
import Nav from '../Component/Nav';
import DealsComponent from '../Component/Deals';
import Loading from '../Component/Loading';
import DealMerchant from '../pages/DealMerchant';
import Map from '../Component/Map';




class Deals extends Component {
  constructor(props){
    super(props)
  }
  state = {
    toggle : 3,
    merchantInfo: [],
    userLat: 0,
    userLng: 0,
    loading: true
  }



  changeState = (num) => {
    this.setState({toggle: num});
  }

  componentDidMount() {
    const merchantPoints = [];
    fetch('/api/merchants')
      .then(res => res.json())
      .then(data => {
        for(let ea of data) {
          let obj = {}
          obj.name = ea.business_name,
          obj.lat = ea.latitude,
          obj.lng = ea.longitude
          merchantPoints.push(obj)
        }
    }).then (
      this.setState({merchantInfo: merchantPoints})
    );  
    
    //set current point
    navigator.geolocation.getCurrentPosition(position => {
      const {latitude, longitude} = position.coords
      this.setState({userLat: latitude, userLng: longitude, loading: false})
    }, () => {
      this.setState({loadding: false})
    })
  }
  
  
  render() {
    const dealsD = this.props.deals.map(deal => <DealsComponent key={deal.deal_id} deal={deal} add={this.props.add} customClass="m4"/> );
    if(this.state.toggle == 2){
      return( 
      <div style={{minHeight: "100%", position: "relative"}}>
        <div className="navbar-fixed">
          <Nav/>
        </div>
          <p style={{paddingLeft: "1.2em"}}>
            <label>
              <input name="group1" type="radio" onClick={() => this.setState({toggle:1})} />
              <span>Sort By Merchant</span>
            </label>
          </p>
          <p style={{paddingLeft: "1.2em"}}>
            <label>
              <input name="group1" type="radio" onClick={() => this.setState({toggle:2})} defaultChecked/>
              <span>Sort By Date</span>
            </label>
          </p>
          <p style={{paddingLeft: "1.2em"}}>
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
        <div className="navbar-fixed">
          <Nav/>
        </div>
        <p style={{paddingLeft: "1.2em"}}>
        <label>
          <input name="group1" type="radio" onClick={() => this.setState({toggle:1})} defaultChecked/>
          <span>Sort By Merchant</span>
        </label>
      </p>
      <p style={{paddingLeft: "1.2em"}}>
        <label>
          <input name="group1" type="radio" onClick={() => this.setState({toggle:2})}/>
          <span>Sort By Date</span>
        </label>
      </p>
      <p style={{paddingLeft: "1.2em"}}>
      <label>
        <input name="group1" type="radio" onClick={() => this.setState({toggle:3})}/>
        <span>Map</span>
      </label>
    </p>
        {this.props.isready ? <DealMerchant deals={this.props.deals} add={this.props.add}/> : <Loading /> }
      </div>
    );
  } else if(this.state.toggle == 3) {
    if (this.state.loading) {
      return null;
    }
    return ( 
      <div>
    <Nav />
    <Map stateForMap={this.props.stateForMap} dealsState={this.state} isready={this.props.readydom} changeState={this.changeState} />
    </div>
     );
  }
}
}

export default Deals;
