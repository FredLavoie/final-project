import React, { Component } from 'react'
import EditDeal from "./Edit_deal"

export class Row extends Component {
  state= {edit: false}
  render() {

    return (
    <tbody>
      <tr>
        <td>
        <tr classsName="image-container">
          <img className="responsive" alt="" src={this.props.deal.image_path}/> 
        </tr>
        </td>
        <td>{this.props.deal.name}</td>
        <td>{this.props.deal.quantity_available}</td>
        <td>{this.props.deal.current_price}</td>
        <td>{this.props.deal.end_date}</td>
        <td>
          <button class="waves-effect waves-light btn" onClick={() => this.props.deleteDeal(this.props.deal.id)}>delete</button>
        </td>
        <td>
          <a class="waves-effect waves-light btn" onClick={() =>  this.state.edit ? this.setState({edit: false }) : this.setState({edit: true})}>edit</a>
        </td>
      </tr>
      {this.state.edit ? <EditDeal updateDeal={this.props.updateDeal} deal={this.props.deal}  /> : ""} 
    </tbody>     
    )
  }
}
export default Row 
