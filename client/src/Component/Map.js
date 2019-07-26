import React, { Component } from 'react';
import {GoogleApiWrapper, Map} from 'google-maps-react';
import Nav from '../Component/Nav';
import Loading from '../Component/Loading';


const mapStyles = {
	width: '87vw',
	height: '83.5vh'
};

export class MapContainer extends React.Component {
	constructor(props){
		super(props)
	}


  render() {

		// if (!this.props.isready) {
    //   return <Loading />
		// }
		
    return (
			<div style={{position: "absolute", display: "flex", flexDirection: "row" , justifyContent: "left"}}>

				<div style={{minHeight: "100%", position: "relative"}}>
					
					<p>
					<label>
						<input name="group1" type="radio" onClick={() => this.props.changeState(1)}/>
						<span>Sort By Merchant</span>
					</label>
					</p>
					<p>
						<label>
							<input name="group1" type="radio" onClick={() => this.props.changeState(2)}/>
							<span>Sort By Date</span>
						</label>
						</p>
					<p>
						<label>
							<input name="group1" type="radio" onClick={() => this.props.changeState(3)} defaultChecked/>
							<span>Map</span>
						</label>
						</p>
				
				</div>

				<div style={{margin: "0 1em"}}>


					<Map
						google={this.props.google}
						zoom={11}
						style={mapStyles}
						initialCenter={{
						lat: this.props.stateForMap.userLat,
						lng: this.props.stateForMap.userLong
						}}
					/>



				</div>

      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCLiHJCWYlYrsX5kbjQQ65xIZXulYpAEiI')
})(MapContainer)