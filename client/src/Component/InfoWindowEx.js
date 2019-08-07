import React, { Component } from 'react';
import { InfoWindow } from 'google-maps-react';
import ReactDOM from 'react-dom';

export class InfoWindowEx extends Component {
  constructor(props) {
    super(props);
    this.infoWindowRef = React.createRef();
    this.contentElement = document.createElement(`div`);
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.children !== prevProps.children) {
      ReactDOM.render(
          React.Children.only(this.props.children),
          this.contentElement
        );
      this.infoWindowRef.current.infowindow.setContent(this.contentElement);
    }
  }
  
  render() {
    return <InfoWindow ref={this.infoWindowRef} {...this.props} />;
  }
  
}
export default InfoWindowEx;