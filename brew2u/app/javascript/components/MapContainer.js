import React from "react"
import PropTypes from "prop-types"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends React.Component {
   constructor(props){
    super(props)
     this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
      };
   }
   onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }
   
  render () {
    const mapStyles = {
      width: "50%",
      height: "50%",
    }

    const { name, latitude, longitude } = this.props

    return (
      <React.Fragment>
        <Map
          google={this.props.google}
          style={mapStyles}
          center={{
            lat: {latitude},
            lng: {longitude}
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick}

            name={name} 
            title={name}
            position = {{lat: {latitude}, lng: {longitude}}}
          />
          {console.log(name)}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h5>{this.state.selectedPlace.name}</h5>
            </div>
          </InfoWindow>
        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDSkERfUbqV1nPReiTvz2thgnd1cEgA_sk")
})(MapContainer)
