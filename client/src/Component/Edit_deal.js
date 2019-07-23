import React, { Component } from 'react'
import {Animated} from "react-animated-css";

export class Edit_deal extends Component {
  render() {
    return (
      <Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}>
              <form className="col s12" style={{transition: 'all 3s liner'}}>
                <h2 className="center-align">Update Deal</h2>
                  <div className="row">
                    <div className="input-field col s6 m4">
                      <input value={this.props.deal.name} id="deal_name" type="text" className="validate"/>
                      <label for="deal_name">Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 m6">
                      <input value={this.props.deal.description} id="description" type="text" className="validate"/>
                      <label for="description">Description</label>
                    </div>
                  </div>
                  <div class="file-field input-field m6">
                    <div class="btn">
                      <span>Photo</span>
                      <input type="file"/>
                    </div>
                    <div class="file-path-wrapper">
                      <input value={this.props.deal.image_path} class="file-path validate" type="text"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 m1">
                      <label>Price $ <br/>
                      <input  value={this.props.deal.current_price} id="price" type="price" className="validate"/></label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 m1">
                    <label for="quantity">Quantity left <br/>                    
                      <input value={this.props.deal.quantity_available} id="quantity" type="integer" className="validate"/></label>
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
                        <button className="btn btn-large waves-effect waves-light" type="button" name="action">Update Deal</button>
                      </p>
                    </div>
                  </div>
              </form>
              </Animated>
    )
  }
}

export default Edit_deal
