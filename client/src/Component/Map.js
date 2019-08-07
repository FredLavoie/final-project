import React from 'react';
import {GoogleApiWrapper, Map, Marker} from 'google-maps-react';
import InfoWindowEx from './InfoWindowEx'; 
import mapStyles from './mapStyles';
import marker1 from '../../public/img/person_pin_circle.svg';
import marker2 from '../../public/img/baseline-location_on.svg';


export class MapContainer extends React.Component {


  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  
  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  showDetails = place => {
    this.props.changeState(1,place.title);
  };

  createMerchantMarkers = (data) => 	{
    const allPoints = data.map((merchant, index) => {
      return (<Marker
			title={merchant.name}
			name={merchant.name}
			position={{lat: merchant.lat, lng: merchant.lng}}
			key={index}
			icon={marker2}
			onClick={this.onMarkerClick}
			/>);
    });
    return allPoints;
  }
	
  componentDidMount() {

  }
		
  render() {

    return (

			<div className="row">
				<div className='col s12 m9'>
					<Map
						google={this.props.google}
						zoom={16}
						
						streetViewControl={false}
						mapTypeControl={false}
						initialCenter={{lat: this.props.dealsState.userLat, lng: this.props.dealsState.userLng}}
						styles={mapStyles}>
						{this.createMerchantMarkers(this.props.dealsState.merchantInfo)}
						<Marker
							position={{lat: this.props.dealsState.userLat, lng: this.props.dealsState.userLng}}	
							onClick={this.onMarkerClick}
							icon={marker1}
							title={'You are here'}	
							name={<div>You are here</div>}		
							/>
							<InfoWindowEx
							marker={this.state.activeMarker}
							visible={this.state.showingInfoWindow}
							>
							<div>
								<h3>{this.state.selectedPlace.name}</h3>
								<button
								className="btn btn-tiny waves-effect waves-light" 
								type="button"
								onClick={this.showDetails.bind(this,this.state.selectedPlace)}>Show Deals
								</button>
							</div>
							</InfoWindowEx>

						</Map>
				</div>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCLiHJCWYlYrsX5kbjQQ65xIZXulYpAEiI')
})(MapContainer);

