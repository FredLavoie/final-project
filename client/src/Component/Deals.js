import React, { Component } from 'react'

export class Deals extends Component {
  constructor(props){
    super(props)
  }
  render() {
  
    return (
    <div className="col s12 m4" id={this.props.deal.id}>
      <div className="card">
        <div className="card-image">
          <img style={{height:'15em',width:'100%'}} src={this.props.deal.image_path} />
          <span className="card-title">{this.props.deal.name}</span>
        </div>
        <div className="card-content">
          <p>hello</p>
        </div>
        <div className="card-action">
          <a href="#">add to cart</a>
        </div>
      </div>
    </div>
    )
  }
}

export default Deals
