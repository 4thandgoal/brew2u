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
   
  geocodeAddress = (address) => {
      const  geocoder = new google.maps.Geocoder()
      return new Promise((resolve, reject) => {
        geocoder.geocode({'address': address}, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
            resolve(results[0].geometry.location.toJSON())
          } else {
            reject()
          }
        })
      })
    }
   
  render () {
    const mapStyles = {
      width: "50%",
      height: "50%",
    }
    const { google, name, latitude, longitude, rating, street, city, state, zip } = this.props
    const place = `${street}, ${city}, ${state}, ${zip}`
    
    // const latLng = []
    // this.geocodeAddress(address).then(geoco => {
    //   latLng.push({lat: geoco.lat})
    //   latLng.push({lng: geoco.lng})
    // })
    
    const location = this.geocodeAddress(place)

    console.log(location)
    
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
            position = {{ lat: latitude, lng: longitude }}
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
