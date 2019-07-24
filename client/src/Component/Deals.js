import React, { Component } from 'react';
var moment = require('moment');

const titleCardStyle = {
  transform:'translateY(-180px) translateX(-10px)',
  background:'#ff405c',
  padding:'5px',
  fontSize:'16px',
  boxShadow:'2px 3px 15px red'
};


export class Deals extends Component {
  
  render() {
    let timeLeft = moment(this.props.deal.end_date).fromNow();

    return (
      <div className="col s12 m4"style={{position:'relative'}}>
        <div className="card">
          <div style={{height:"220px"}} className="card-image">
            <img alt="just an img for now" style={{objectFit:"cover",height:"inherit"}} src={this.props.deal.image_path} />
            <span className="card-title" style={titleCardStyle}>Ends {timeLeft}</span>
          </div>
          <div className="card-content">
            <strong style={{fontWeight:'bolder',fontSize:'20px'}}>{this.props.deal.name}</strong>
            <p>$ {this.props.deal.current_price}</p>
            <p style={{ textAlign:'right' }}>{this.props.deal.quantity_available} left</p>
          </div>
          <div className="card-action" style={{display:'flex', justifyContent:'center'}}>
            <a  onClick={() => this.props.add(this.props.deal)}>add to cart</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Deals;