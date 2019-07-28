import React, { Component } from 'react';
import Nav from '../Component/Nav';
import Confetti from 'react-confetti';


export class MerchantDashboard extends Component {
state = {
  confetti: true
}

componentDidMount(){
  setTimeout(() => {
    this.setState({confetti: false})
  },5000)
}
  render() {
    return (
      <div>
        <Nav /> 
        <main className="main-page container" style={{textAlign: 'center', paddingTop: '6em'}}>
        <h3>Thank you for your order <span style={{color: 'green'}}>{localStorage.getItem('username')}</span>!</h3>
          { this.state.confetti ? <Confetti width={900} height={900} /> : ''}
        </main>
      </div>
    );
  }
}
  
export default MerchantDashboard;