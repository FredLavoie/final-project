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



 thing = (data) => 	{

	const allPoints = data.map((merchant, index) => {
		return <Marker title={merchant.name} name={merchant.name} position={{lat: merchant.lat, lng: merchant.lng}} key={index} 	icon= {{url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}}	/>
	
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
						/>
					


						</Map>



					

				




				</div>

      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCLiHJCWYlYrsX5kbjQQ65xIZXulYpAEiI')
})(MapContainer)