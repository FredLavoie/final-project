import React, { Component } from 'react'

export class New_deal extends Component {
    render() {
        return (
          <div className="container">
            <div className="row">
              <form className="col s12">
                <h2 className="center-align">Create new Deal</h2>
                  <div className="row">
                    <div className="input-field col s6 m4">
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
                  <div class="file-field input-field m6">
                    <div class="btn">
                      <span>Photo</span>
                      <input type="file"/>
                    </div>
                    <div class="file-path-wrapper">
                      <input class="file-path validate" type="text"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 m1">
                      <label>Price $ <br/>
                      <input id="price" type="price" className="validate"/></label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 m1">
                    <label for="quantity">Quantity left <br/>                    
                      <input id="quantity" type="integer" className="validate"/></label>
                    </div>
                  </div>
                  <br/>
                  <div>
                    <div className="row">
                      <div class="input-field col s12 m4">
                        <div>
                          <label>Expiry Date<br/>
                            <input type="date"/></label>
                        </div>
                      </div>
                      <div class="input-field col s12 m2">
                        <label>Expiry Time<br/>
                          <input type="time"/></label>
                      </div>
                    </div>
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
