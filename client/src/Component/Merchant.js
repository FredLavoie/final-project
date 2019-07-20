import React, { Component } from 'react'

export class Merchant extends Component {
    render() {
        return (
<div>
  <div className="container">
    <div class="row">
      <form class="col s12">
      <h2 class="center-align">Business Registration</h2>
        <div class="row">
          <div class="input-field col s12">
            <input id="company-name" type="password" class="validate"/>
            <label for="password">Company Name</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="email" type="text" class="validate"/>
            <label for="first_name">Business email</label>
          </div>
          <div class="input-field col s6">
            <input id="email-confirm" type="text" class="validate"/>
            <label for="last_name">Retype Business email</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s6">
            <input id="password" type="text" class="validate"/>
            <label for="first_name">Password</label>
          </div>
          <div class="input-field col s6">
            <input id="password-confirm" type="text" class="validate"/>
            <label for="last_name">Password Confirmation</label>
          </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
          <input id="street-addresse" type="email" class="validate"/>
          <label for="street-addresse">Street Address</label>
        </div>
      </div>
        <div class="row">
        <div class="input-field col s6">
          <input id="address2" type="text" class="validate"/>
          <label for="address2">Address</label>
        </div>
        <div class="input-field col s6">
          <input id="city" type="text" class="validate"/>
          <label for="city">City</label>
        </div>
        <div class="input-field col s12">
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
        <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate"/>
          <label for="icon_telephone">Telephone</label>
        </div>
        <div class="input-field col s12">
          <select>
            <option value="" disabled selected>Type of Business</option>
            <option value="1">Café</option>
            <option value="2">Restaurant</option>
            <option value="3">Bakery</option>
          </select>
      </div>
      </div>
          <div class="row">
            <div class="col m12">
              <p class="right-align">
                <button class="btn btn-large waves-effect waves-light" type="button" name="action">Register</button>
              </p>
            </div>
          </div>
      </form>
    </div>        
  </div>
</div>
        )
    }
}

export default Merchant
