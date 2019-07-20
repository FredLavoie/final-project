import React, { Component } from 'react'

export class Registration extends Component {
    render() {
        return (
<div className="container">
  <div class="row">
    <form class="col s12">
    <h2 class="center-align">Sign Up</h2>
      <div class="row">
        <div class="input-field col s6">
          <input id="first_name" type="text" class="validate"/>
          <label for="first_name">First Name</label>
        </div>
        <div class="input-field col s6">
          <input id="last_name" type="text" class="validate"/>
          <label for="last_name">Last Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
        </div>
      </div>
        <div class="row">
          <div class="col m12">
            <p class="right-align">
              <button class="btn btn-large waves-effect waves-light" type="button" name="action">Sign Up</button>
            </p>
          </div>
        </div>
    </form>
  </div>        
</div>
        )
    }
}

export default Registration
