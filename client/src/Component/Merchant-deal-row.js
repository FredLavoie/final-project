import React, { Component } from 'react'
import Edit_deal from "./Edit_deal"

export class Row extends Component {

    render() {
      console.log(this.props.isUpdate)
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
            <td>09/10/19</td>
            <td>
            <button class="waves-effect waves-light btn" onClick={() => this.props.deleteDeal(this.props.deal.id)}>delete</button>
            </td>
            <td>
            <a class="waves-effect waves-light btn" onClick={this.props.updateDeal}>edit</a>
            </td>
          </tr>
         {this.props.isUpdate ? <Edit_deal /> : ""} 
        </tbody>     
        )
    }
}
export default Row 
