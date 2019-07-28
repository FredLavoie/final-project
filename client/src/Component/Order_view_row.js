import React, { Component } from 'react';
var moment = require('moment');
import View from './Order_view';

export class ViewRow extends Component {
  state = {edit: false}


  render() {
    console.log('PROPS IN ORDER VIEW:',this.props.deal)
    let timeStamp = moment(this.props.deal.created_at).format('MMM Do, h:mm a');
    
    return (
      <tbody>
        <tr>
          <td>
            <div className="image-container">
              <img className="responsive" alt="" src={this.props.orders}/>
            </div>
          </td>
          <td></td>
          <td></td>
          <td>${this.props.orders}</td>
          <td>{timeStamp}</td>
          <td>
            <a className="waves-effect waves-light btn" onClick={() =>  this.state.edit ? this.setState({edit: false }) : this.setState({edit: true})}>View Order</a>
          </td>
        </tr>
        <tr>
          <td colSpan="100" className="animate pulse" style={{transition: 'all 1s'}}>
        { this.state.edit && <View/> }
      </td>
        </tr>
      </tbody>
    );
  }
}
export default ViewRow;
