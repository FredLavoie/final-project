import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer className="page-footer green" style={{position: "absolute", bottom:0, width: "100%"}}>
        <div className="footer-copyright">
          <div className="container">
              © 2019 FoodCycle
              <div className="grey-text text-lighten-4 right">
                <a className="grey-text text-lighten-3" href="https://facebook.com" target="_blank" style={{padding: "1em"}}><i className="fab fa-facebook-f"></i></a>
                <a className="grey-text text-lighten-3" href="https://twitter.com" target="_blank" style={{padding: "1em"}}><i className="fab fa-twitter"></i></a>
                <a className="grey-text text-lighten-3" href="https://instagram.com" target="_blank"style={{padding: "1em"}}><i className="fab fa-instagram"></i></a>
              </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
