import React, { Component } from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
// import Nav from '../Component/Nav';
// import Loading from '../Component/Loading';


const mapStyles = {
	width: '87vw',
	height: '83.5vh'
};

export class MapContainer extends React.Component {
	constructor(props){
		super(props)
	}

	state = {
		showingInfoWindow: false,  //Hides or the shows the infoWindow
		activeMarker: {},          //Shows the active marker upon click
		selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
	  };

	  onMarkerClick = (props, marker, e) =>
	  this.setState({
		selectedPlace: props,
		activeMarker: marker,
		showingInfoWindow: true
	  });
  
	onClose = props => {
	  if (this.state.showingInfoWindow) {
		this.setState({
		  showingInfoWindow: false,
		  activeMarker: null
		});
	  }
	};



 thing = (data) => 	{

	const allPoints = data.map((merchant, index) => {
		return <Marker title={merchant.name} name={merchant.name} 
		position={{lat: merchant.lat, lng: merchant.lng}}
		 key={index} 	icon= {{url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}}	
		 onClick={this.onMarkerClick}
        name={merchant.name}	
		 />
	});
	return allPoints
}
	



	componentDidMount() {


		}
		
		render() {	

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
						zoom={15}
						style={mapStyles}
						streetViewControl= {false}
						initialCenter={{lat: this.props.dealsState.userLat, lng: this.props.dealsState.userLng}}>

						{this.thing(this.props.dealsState.merchantInfo)}

						<Marker
							title={'You are here'}
							name={'SOMA'}
							position={{lat: this.props.dealsState.userLat, lng: this.props.dealsState.userLng}}	
							onClick={this.onMarkerClick}			
						/>

						<InfoWindow
						marker={this.state.activeMarker}
						visible={this.state.showingInfoWindow}
						onClose={this.onClose}
						>
						<div>
						<h4>{this.state.selectedPlace.name}</h4>
						</div>
						</InfoWindow>

						</Map>



					

				




				</div>

      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCLiHJCWYlYrsX5kbjQQ65xIZXulYpAEiI')
})(MapContainer)