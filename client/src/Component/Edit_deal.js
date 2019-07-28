import React, { Component } from 'react';
export class Edit_deal extends Component {
  state = {
    message: '',
    name: this.props.deal.name,
    description: this.props.deal.description,
    quantityAvailable: this.props.deal.quantity_available,
    currentPrice: this.props.deal.current_price,  
    dealId: this.props.deal.id,
  }

  // here is the fetch saad was here : ) 

  handleSubmit = async (event) =>{
    // lol i dont need the event target sorry it allready in the state  xd
    event.preventDefault()
    const bodyOfRequest = {
      merchant_id: this.state.dealId,
      name:this.state.name,
      description: this.state.description,
      quantity_available: this.state.quantityAvailable,
      current_price: this.state.currentPrice,
      image_path:  this.props.deal.image_path
    }

    const request = await fetch(`/api/deals/${this.state.dealId}/update`,{
      method: 'POST',
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(bodyOfRequest)
    })

    if(request.ok){
      location.reload();
    }
    if(request.status === 400){
      let response = request.json();
      this.setState({message: response.message })
    }
  } 

  nameChange = (event) =>{
    this.setState({name: event.target.value})
  }

  descriptionChange = (event) =>{
    this.setState({description: event.target.value})
  }

  descriptionChange = (event) =>{
    this.setState({description: event.target.value})
  }

  quantityAvailableChange = (event) =>{
    this.setState({quantityAvailable: event.target.value})
  }

  currentPriceChange = (event) =>{
    this.setState({currentPrice: event.target.value})
  } 

  render() {
    return (
      <div style={{height: 'auto'}}>
        <div className="container">
          <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit}>
            <p style={{color: 'red'}}>{this.state.message}</p>
              <h2 className="center-align">Update Deal</h2>
              <div className="row">
                <div className="input-field col s6 m4">
                  <input value={this.state.name} onChange={this.nameChange} id="deal_name" type="text" className="validate"/>
                  <label className="active" htmlFor="deal_name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 m8">
                  <input value={this.state.description} onChange={this.descriptionChange} id="description" type="text" className="validate"/>
                  <label className="active" htmlFor="description">Description</label>
                </div>
              </div>
              <div className="file-field input-field m6">
                <div className="btn">
                  <span>Photo</span>
                  <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                  <input className="active file-path validate"type="text"/>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 m1">
                  <label>Price $ <br/>
                    <input  className="active validate" value={this.state.currentPrice} onChange={this.currentPriceChange} id="price" type="price"/></label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6 m1">
                  <label htmlFor="quantity">Quantity left <br/>                    
                    <input className="active validate"  value={this.state.quantityAvailable} onChange={this.quantityAvailableChange} id="quantity" type="integer"/></label>
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
                    <button className="btn btn-large waves-effect waves-light" type="submit" name="action">Update Deal</button>
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
