
import React, { Component } from 'react'


const titleCardStyle = {
  
  transform:'translateY(-180px)',
  transform:'translateX(-10px)',
  background:'#ff405c'
  ,padding:'5px',
  fontSize:'16px',
  boxShadow:'2px 3px 15px red'
}


export class Deals extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
    <div className="col s12 m4" id={this.props.deal.id} style={{position:'relative'}}>
      <div className="card">
        <div className="card-image">
          <img style={{height:'15em',width:'100%'}} src={this.props.deal.image_path} />
          <span className="card-title" style={titleCardStyle}>Ends in: 30 mins</span>
        </div>
        <div className="card-content">
          <strong style={{fontWeight:'bolder',fontSize:'20px'}}>{this.props.deal.name}</strong>
          <p>$ {this.props.deal.current_price}</p>
          <p style={{ textAlign:'right'}}>{this.props.deal.quantity_available} left</p>
        </div>
        <div className="card-action" style={{display:'flex', justifyContent:'center'}}>
          <a  href="/user/{this.props.deal.id}">add to cart</a>
        </div>
      </div>
    </div>
    )
  }
}

export default Deals