import React, { Component } from 'react'

export class New_deal extends Component {
    render() {
        return (
          <div className="container">
            <div className="row">
              <form className="col s12">
              <h2 className="center-align">Add new Deals</h2>
                <div className="row">
                  <div className="input-field col s6 m6">
                    <input id="deal_name" type="text" className="validate"/>
                    <label for="deal_name">Name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6 m6">
                    <input Placeholder="(Optional)"id="description" type="text" className="validate"/>
                    <label for="description">Description</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12 m1">
                  <label for="price">Price</label>
                    <input id="price" type="dollar" className="validate"/>
                  </div>
                </div>
                <div class="input-field col s12 m2">
                <select>
                  <option value="" disabled selected>Quantity</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                </div>
                <div class="input-field col s12 m2">
                <select>
                  <option value="" disabled selected>Expire Date</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                </div>                
                <div class="input-field col s12 m2">
                <select>
                  <option value="" disabled selected>Expire Time</option>
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </select>
                </div>
                  <div className="row">
                    <div className="col m12">
                      <p className="right-align">
                        <button className="btn btn-large waves-effect waves-light" type="button" name="action">Create Deal</button>
                      </p>
                    </div>
                  </div>
              </form>
            </div>        
          </div>
        )
    }
}

export default New_deal
