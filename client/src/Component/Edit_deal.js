import React, { Component } from 'react';

export class Edit_deal extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="container">
          <div className="row">
            <form className="col s12">
              <h2 className="center-align">Update Deal</h2>
              <div className="row">
                <div className="input-field col s6 m4">
                  <input value={this.props.deal.name} id="deal_name" type="text" className="validate"/>
                  <label className="active" htmlFor="deal_name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 m8">
                  <input value={this.props.deal.description} id="description" type="text" className="validate"/>
                  <label className="active" htmlFor="description">Description</label>
                </div>
              </div>
              <div className="file-field input-field m6">
                <div className="btn">
                  <span>Photo</span>
                  <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                  <input className="active file-path validate" value={this.props.deal.image_path} type="text"/>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 m1">
                  <label>Price $ <br/>
                    <input  className="active validate" value={this.props.deal.current_price} id="price" type="price"/></label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 m1">
                  <label htmlFor="quantity">Quantity left <br/>                    
                    <input className="active validate"  value={this.props.deal.quantity_available} id="quantity" type="integer"/></label>
                </div>
              </div>
              <br/>
              <div>
                <div className="row">
                  <div className="input-field col s12 m4">
                    <div>
                      <label className="active" >Expiry Date<br/>
                        <input type="date"/></label>
                    </div>
                  </div>
                  <div className="input-field col s12 m2">
                    <label className="active" >Expiry Time<br/>
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
          </div>        
        </div>      
      </div>
    );
  }
}

export default Edit_deal;
