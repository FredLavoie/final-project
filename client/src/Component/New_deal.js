import React, { Component } from 'react';
import * as firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

export class New_deal extends Component {

  state = {
    username: '',
    avatar: '',
    isUploading: false,
    progress: 0,
    avatarURL: ''
    };


  handleChangeUsername = (event) => this.setState({username: event.target.value});

  handleUploadStart = () => this.setState({isUploading: true, progress: 0});

  handleProgress = (progress) => this.setState({progress});

    handleUploadError = (error) => {
    this.setState({isUploading: false});
    console.error(error);
    }



    handleUploadSuccess = (filename) => {
      this.setState({avatar: filename, progress: 100, isUploading: false});
      firebase.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({avatarURL: url}));
      };
  handleSubmit = event => {
    
    event.preventDefault();
    fetch('/api/deals/new', {
      method:'POST',
      headers:{ "Content-Type" : "application/json" },
      body: JSON.stringify({
        merchant_id: localStorage.getItem('merchant_id'),
        name: event.target.name.value, 
        description: event.target.description.value,  
        image_path: this.state.avatarURL, 
        current_price: event.target.price.value, 
        quantity_available: event.target.quantity.value, 
        date: event.target.date.value,
        time: event.target.time.value
      })
    })
      .then(() => {
        window.location.assign('/merchants/dashboard');
      });
  }
  render() {

    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <h2 className="center-align">Create new Deal</h2>
            <div className="row">
              <div className="input-field col s6 m4">
                <input name="name" id="deal_name" type="text" className="validate"/>
                <label htmlFor="deal_name">Name</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 m6">
                <input name="description" placeholder="(Optional)"id="description" type="text" className="validate"/>
                <label htmlFor="description">Description</label>
              </div>
            </div>
            <div className="file-field input-field m6" >
              <div className="btn">
                <span>Photo</span>
                <input type="file"/>
              </div>
              <div className="file-path-wrapper">
                <input className="file-path validate" type="text" name="photo_path"/>
                <FileUploader style={{
                  backgroundColor: 'steelblue', 
                  color: 'white', 
                  padding: 10, 
                  borderRadius: 4
                  }} 
                  accept="image/*" name="avatar" randomizeFilename storageRef={firebase.storage().ref('images')} onUploadStart={this.handleUploadStart} onUploadError={this.handleUploadError} onUploadSuccess={this.handleUploadSuccess} onProgress={this.handleProgress} />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 m1" name="price">
                <label>Price $ <br/>
                  <input id="price" type="price" className="validate"/></label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6 m1" name="quantity">
                <label htmlFor="quantity">Quantity left <br/>                    
                  <input id="quantity" type="integer" className="validate"/></label>
              </div>
            </div>
            <br/>
            <div className="input-field col s12 m4" >
              <div>
                <label>Expiry Date<br/>
                  <input type="date" name="date"/></label>
              </div>
            </div>
            <div className="input-field col s12 m2" >
              <div>
                <label>Expiry Time<br/>
                  <input type="time" name="time"/></label>
              </div>
            </div>                  
            <div className="row">
              <div className="col m12">
                <p className="right-align">
                  <button className="btn btn-large waves-effect waves-light" type="submit" name="action">Create Deal</button>
                </p>
              </div>
            </div>
          </form>
        </div>        
      </div>
    );
  }
}

export default New_deal;
