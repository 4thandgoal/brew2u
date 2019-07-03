import React from "react"
import PropTypes from "prop-types"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends React.Component {
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
      width: "32%",
      height: "47%",
    }
      

    const { google, name, latitude, longitude, rating } = this.props
    
    return (
      <React.Fragment>
        <Map
          google={google}
          style={mapStyles}
          initialCenter={{
            lat: latitude,
            lng: longitude
          }}
          zoom={15}
          onClick={this.onMapClicked}
        >
          <Marker onClick={this.onMarkerClick}

            name= {name}
            rating= {`Average rating: ${rating}`}
            title={name}
            position = {{lat: latitude, lng: longitude}}
          />
        
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            maxWidth="180"
          >
            <div>
              <h5>{this.state.selectedPlace.name}</h5>
              <h7>{this.state.selectedPlace.rating}</h7>
            </div>
          </InfoWindow>
        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDSkERfUbqV1nPReiTvz2thgnd1cEgA_sk"
})(MapContainer)
