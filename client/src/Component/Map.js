import React, { Component } from 'react';
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';
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

	state = { merchantInfo: [],
	userPoint: {lat: this.props.stateForMap.lat, lng: this.props.stateForMap.lng},
	loading: true
 }

 thing = (data) => 	{

	 console.log('data', data)
	const allPoints = data.map((merchant, index) => {
		console.log('This is merchant inside map function: ', merchant)
		return <Marker title={merchant.name} name={merchant.name} position={{lat: merchant.lat, lng: merchant.lng}} key={index} 	icon= {{url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'}}	/>
	});

	return allPoints
}
	

	componentDidMount() {
		const merchantPoints = [];
		fetch('/api/merchants')
			.then(res => res.json(), console.log('fetch is happening'))
			.then(data => {
				for(let ea of data) {
					let obj = {}
					obj.name = ea.business_name,
					obj.lat = ea.latitude,
					obj.lng = ea.longitude
					merchantPoints.push(obj)
				}

			});
			console.log("I was here", merchantPoints)
			this.setState({merchantInfo: merchantPoints, userPoint: {lat: this.props.stateForMap.userLat, lgn: this.props.stateForMap.userLong}});
		
			// navigator.geolocation.getCurrentPosition(position => {
			// 	const {latitude, longitude} = position.coords
			// 	this.setState({userPoint: {lat: latitude, lng: longitude } })
			// })

			
			

		}
		
		render() {	
console.log('merchant')
console.log('this.state.loading + other', this.props.stateForMap.loading || this.state.loading)
if (this.props.stateForMap.loading){
	return null;
}		
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
						initialCenter={{lat: this.props.stateForMap.userLat, lng: this.props.stateForMap.userLong}}>

							{this.thing(this.state.merchantInfo)}
					<Marker
							title={'You are here'}						
							name={'SOMA'}	
							position={{lat: this.props.stateForMap.userLat, lng: this.props.stateForMap.userLong}}								
												
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