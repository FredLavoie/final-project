import React, { Component } from 'react';

export class Main extends Component {
  render() {
    return (
      <main> 
        <section className="home-section container" style={{background:'#fafafa',padding:'30px',marginTop:'10px'}} >
          <div className="row">
            <div className="col m6 s12 center">
              <h2 style={{color: '#263238',fontSize:'35px'}}>Oeuvre de la litterature latine</h2>
              <h3 style={{color: '#263238', fontSize: '20px'}}>Rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, sest interesse</h3>
            </div>
            <div className="col m6 s12 center">
              <img style={{maxWidth:'100%', height:'auto'}} alt="" src="img/home-img.jpg" />
            </div>
          </div>
        </section>
        <section className="container" style={{background:'#e8f5e9', padding:'20px'}}> 
          <div className="row">
            <div className="col m6 s12 center img-container">
              <img style={{maxWidth:'100%', height:'auto'}} alt="" src="img/home-img.jpg" />
            </div>
            <div className="col m6 s12 center title-container">
              <h2 style={{color: '#263238',fontSize:'35px'}}>Oeuvre de la litterature latine</h2>
              <h3 style={{color: '#263238', fontSize: '20px'}}>Rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, sest interesse</h3>
            </div>
          </div>
        </section>

        <section className="container" style={{padding:'20px',background:'#fafafa'}}> 
          <div className="row">
            <div className="col m6 s12 center title-container">
              <h2 style={{color: '#263238',fontSize:'35px'}}>Oeuvre de la litterature latine</h2>
              <h3 style={{color: '#263238', fontSize: '20px'}}>Rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, sest interesse</h3>
            </div>
            <div className="col m6 s12 center img-container">
              <img style={{maxWidth:'100%', height:'auto'}} alt="" src="img/home-img.jpg" />
            </div>
          </div>
        </section>
      </main>
    );
  }
}
export default Main;
