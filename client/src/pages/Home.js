import React, { Component } from 'react'
import Header from '../Component/Header';
import Main from '../Component/Main';
import Footer from '../Component/Footer';

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default Home
