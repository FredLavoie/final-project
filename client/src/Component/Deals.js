import React, { Component } from 'react';
var moment = require('moment');
import M from "materialize-css";

const titleCardStyle = {
  transform:'translateY(-180px) translateX(-10px)',
  background:'#ff405c',
  padding:'5px',
  fontSize:'16px',
  boxShadow:'2px 3px 15px red'
};

export class Deals extends Component {
  
  addToCartAnimation = () => {
    this.props.add(this.props.deal);
    M.toast({html: `Added ${this.props.deal.name} to your cart!`, classes: "card-panel green"});
  }
  
  render() {

    let timeLeft = moment(this.props.deal.end_date).fromNow();

    const addToCart = () => {
      if(localStorage.getItem('user_id')) {
        return (
        <div className="card-action" style={{display:'flex', justifyContent:'center'}}>
          <a style={{cursor:"pointer"}}  onClick={() => this.addToCartAnimation()}>add to cart</a>
        </div>
        );
      }
    };

    return (
      <div className={"col s12 " + this.props.customClass} style={{position:'relative'}}>
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
          
          {addToCart()}
          
        </div>
      </div>
    );
  }
}


export default Deals;

