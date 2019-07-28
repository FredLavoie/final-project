import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'


export class MerchantRegister extends Component {
  state = {
    message: '',
    merchantCreated: false,
    isReady:false,
    error: false
  }

handleSubmit = (event) =>{
  event.preventDefault();

  let merchant = event.target.type_of_merchant;
  let type = merchant[merchant.selectedIndex]
  let province = event.target.province.value;
  const newMerchant ={
    business_name: event.target.business_name.value,
    email: event.target.email.value,
    retype_email: event.target.retype_email.value,
    password: event.target.password.value,
    confirm_password: event.target.confirm_password.value,
    street_address: event.target.street_address.value,
    city: event.target.city.value,
    province: province,
    postal_code: event.target.postal_code.value,
    phone_number: event.target.phone_number.value,
    type_of_merchant: type.value
  }
  const sendMerchant = async () =>{ 
      const query = await fetch('/api/merchants/register',{method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMerchant)
    })
    console.log('QUERY FETCH:', query)
    if(query.status === 200){
      let  response  = await query.json()
      this.setState({message: response.message, error: false})
      setTimeout(() => {
        this.setState({merchantCreated: true, isReady: true})
      }, 8000)
    }
    if(query.status === 400){
      let response = await query.json();
      this.setState({message: response.message, error: true})
    }
  }
  sendMerchant()
}

  render() {
    if(this.state.isReady){
      return <Redirect to='/login' />
    }
    return (
      <div>
        <div className="container">
          <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit}>
              <h2 className="center-align">Business Registration</h2>
              <p className="center-align"><strong>Sign up as a <a href="/signup">User</a></strong></p>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input id="company-name" name="business_name"type="text" className="validate"/>
                  <label htmlFor="company-name">Company Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input id="email" name="email" type="text" className="validate"/>
                  <label htmlFor="email">Business email</label>
                </div>
                <div className="input-field col s6">
                  <input id="email-confirm" name="retype_email" type="text" className="validate"/>
                  <label htmlFor="email-confirm">Retype Business email</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <input id="password" name="password" type="password" className="validate"/>
                  <label htmlFor="password">Password</label>
                </div>
                <div className="input-field col s6">
                  <input id="password-confirm" name="confirm_password" type="password" className="validate"/>
                  <label htmlFor="password-confirm">Password Confirmation</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12 m6">
                  <input id="street-addresse" name="street_address" type="text" className="validate"/>
                  <label htmlFor="street-addresse">Street Address</label>
                </div>
                <div className="row">
                  <div className="input-field col s6 m3">
                    <input id="lat" name="latitude" type="text" className="validate"/>
                    <label htmlFor="latutide">Latitude</label>
                  </div>
                  <div className="input-field col s6 m3">
                    <input id="lng" name="longitude"type="text" className="validate"/>
                    <label htmlFor="longitude">Longitude</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 m4">
                  <input id="city" name="city" type="text" className="validate"/>
                  <label htmlFor="city">City</label>
                </div>
                <div className="input-field col s6 m4">
                  <input id="postal-code" name="postal_code" type="text" className="validate"/>
                  <label htmlFor="postal-code">Postal Code</label>
                </div>
                <div className="input-field col s12 m4" >
                  <select name="province">
                    <option value="" disabled selected >Province</option>
                    <option value="Quebec">Quebec</option>
                    <option value="Ontario">Ontario</option>
                    <option value="New Brunswick">New Brunswick</option>
                    <option value="Newfoundland and Labardor">Newfoundland and Labardor</option>
                    <option value="Nova Scotia">Nova Scotia</option>
                    <option value="British Colombia">British Colombia</option>
                    <option value="Alberta">Alberta</option>
                    <option value="Saskatchewan">Saskatchewan</option>
                    <option value="Prince Edward Island">Prince Edward Island</option>
                  </select>
                </div>
                <div className="input-field col s6 m4">
                  <input id="icon_telephone" name="phone_number" type="tel" className="validate"/>
                  <label htmlFor="icon_telephone">Telephone</label>
                </div>
                <div className="input-field col s12 m4">
                  <select name="type_of_merchant">
                    <option value="" disabled selected >Type of Business</option>
                    <option value="Café">Café</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Bakery">Bakery</option>
                  </select>
                </div>
              </div>
              <p>{this.state.error ? <p style={{color: 'red'}}> {this.state.message}</p> : <h5 style={{color: 'green'}}>{this.state.message}</h5> }</p>
              <div className="row">
                <div className="col m12">
                  <p className="right-align">
                    <button className="btn btn-large waves-effect waves-light" type="submit" name="action">Register</button>
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