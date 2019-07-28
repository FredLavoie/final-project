import React, { Component } from 'react';
import Nav from '../Component/Nav';
import MainOrderView from '../Component/Order_view';
import M from "materialize-css";
import { Redirect } from 'react-router-dom';
import ViewRow from '../Component/Order_view_row';

export class ViewOrder extends Component {
  constructor(props){
    super(props);
    this.state = {
      user_deals: [],
    };
  }
  state = {
    viewOrder: false,
    user_id: null
  }

  componentDidMount() {
    M.AutoInit();
    //for users to view their orders
    const id = localStorage.getItem('user_id');
    fetch(`/api/orders/${id}/view`, {
      headers: {"authorization": localStorage.getItem('token')}})
      .then(res => res.json())
      .then(data => {   
        console.log('Data', data)
      }); 
  }

  render() {
    console.log('PROPS STATE:', this.state.props )
    if (this.state.viewOrder === false) {
      return <Redirect to='/login'/>;
    }

    let userDeals = this.state.user_deals;
    console.log('USER DEALS:',userDeals);
    userDeals.map((deals, index) => {
      return(<ViewRow key={index} deals={deals}/>);
    }
    );
    return (
      <div>
        <Nav /> 
        <MainOrderView deals={this.state.user_deals} /> 
      </div>
    );
  }
}
  
export default ViewOrder;