import React, { Component } from 'react';
import EditDeal from "./EditDeal";
import moment from 'moment';

export class Row extends Component {
  state = {edit: false}

  render() {

    let timeStamp = moment(this.props.deal.end_date).format('MMM Do, h:mm a');
  
    return (
      <tbody>
        <tr>
          <td>
            <div className="image-container">
              <img className="responsive" alt="" src={this.props.deal.image_path}/>
            </div>
          </td>
          <td>{this.props.deal.name}</td>
          <td>{this.props.deal.quantity_available}</td>
          <td>${this.props.deal.current_price}</td>
          <td>{timeStamp}</td>
          <td>
            <button className="waves-effect waves-light btn" onClick={() => this.props.deleteDeal(this.props.deal.id)}>delete</button>
          </td>
          <td>
            <a className="waves-effect waves-light btn" onClick={() =>  this.state.edit ? this.setState({edit: false }) : this.setState({edit: true})}>edit</a>
          </td>
        </tr>
          <td colSpan="30">
            { this.state.edit && <EditDeal updateDeal={this.props.updateDeal} deal={this.props.deal} /> }
          </td>
      </tbody>
    );
  }
}
export default Row;
