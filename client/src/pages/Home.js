import React, { Component } from 'react';
import Header from '../Component/Header';
import Main from '../Component/Main';

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default Home;
