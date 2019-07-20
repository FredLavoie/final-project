
import React, { Component } from 'react'


const titleCardStyle = {position:'absolute',top:'0', left:'100px',height:'30px', padding:'3px', background:'red'}


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
          <span className="card-title" style={titleCardStyle}>{this.props.deal.name}</span>
        </div>
        <div className="card-content">
          <strong>{this.props.deal.name}</strong>
          <p>{this.props.deal.current_price} $</p>
        </div>
        <div className="card-action" style={{display:'flex', justifyContent:'center'}}>
          <a  href="#">add to cart</a>
        </div>
      </div>
    </div>
    )
  }
}

export default Deals