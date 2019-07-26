import React, { Component } from 'react';

export class MerchantRegister extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <form className="col s12">
              <h2 className="center-align">Business Registration</h2>
              <p className="center-align"><strong>Sign up as a <a href="/signup">User</a></strong></p>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input id="company-name" type="text" className="validate"/>
                  <label htmlFor="company-name">Company Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input id="email" type="text" className="validate"/>
                  <label htmlFor="email">Business email</label>
                </div>
                <div className="input-field col s6">
                  <input id="email-confirm" type="text" className="validate"/>
                  <label htmlFor="email-confirm">Retype Business email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input id="password" type="password" className="validate"/>
                  <label htmlFor="password">Password</label>
                </div>
                <div className="input-field col s6">
                  <input id="password-confirm" type="password" className="validate"/>
                  <label htmlFor="password-confirm">Password Confirmation</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input id="street-addresse" type="email" className="validate"/>
                  <label htmlFor="street-addresse">Street Address</label>
                </div>
                <div className="row">
                  <div className="input-field col s6 m3">
                    <input id="lat" type="text" className="validate"/>
                    <label htmlFor="latutide">Latitude</label>
                  </div>
                  <div className="input-field col s6 m3">
                    <input id="lng" type="text" className="validate"/>
                    <label htmlFor="longitude">Longitude</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 m4">
                  <input id="city" type="text" className="validate"/>
                  <label htmlFor="city">City</label>
                </div>
                <div className="input-field col s6 m4">
                  <input id="postal-code" type="text" className="validate"/>
                  <label htmlFor="postal-code">Postal Code</label>
                </div>
                <div className="input-field col s12 m4">
                  <select>
                    <option value="" disabled selected>Province</option>
                    <option value="1">Quebec</option>
                    <option value="2">Ontario</option>
                    <option value="3">New Brunswick</option>
                    <option value="3">Newfoundland and Labardor</option>
                    <option value="3">Nova Scotia</option>
                    <option value="3">British Colombia</option>
                    <option value="3">Alberta</option>
                    <option value="3">Saskatchewan</option>
                    <option value="3">Prince Edward Island</option>
                  </select>
                </div>
                <div className="input-field col s6 m4">
                  <input id="icon_telephone" type="tel" className="validate"/>
                  <label htmlFor="icon_telephone">Telephone</label>
                </div>
                <div className="input-field col s12 m2">
                  <select>
                    <option value="" disabled selected>Type of Business</option>
                    <option value="1">Café</option>
                    <option value="2">Restaurant</option>
                    <option value="3">Bakery</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col m12">
                  <p className="right-align">
                    <button className="btn btn-large waves-effect waves-light" type="button" name="action">Register</button>
                  </p>
                </div>
              </div>
            </form>
          </div>        
        </div>
      </div>
    );
  }
}

export default MerchantRegister;
