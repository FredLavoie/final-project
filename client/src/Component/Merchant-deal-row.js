import React, { Component } from 'react'
import Edit_deal from "./Edit_deal"

export class Row extends Component {
  state= {edit: false}
    render() {

        return (
        <tbody>
          <tr>
            <td>
            <tr classsName="image-container">
                    <img className="responsive" src={this.props.deal.image_path}/> 
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
          <td className="container" colspan="6" style={{width:'100%', position:"relative",margin:'auto'}}>
         {this.state.edit ? <Edit_deal updateDeal={this.props.updateDeal} deal={this.props.deal}  /> : ""} 
         </td>
        </tbody>     
        )
    }
}
export default Row 
