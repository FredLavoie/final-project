import React, { Component } from 'react';
import Nav from '../Component/Nav';


export class Map extends Component {
	constructor(props){
		super(props)
	}


  render() {
    return (
			<div>
				<div style={{minHeight: "100%", position: "relative"}}>
					<Nav/>
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


      </div>
    );
  }
}
export default Map;