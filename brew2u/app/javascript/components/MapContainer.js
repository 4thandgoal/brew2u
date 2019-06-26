import React from "react"
import PropTypes from "prop-types"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'


export class MapContainer extends React.Component {
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
        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDSkERfUbqV1nPReiTvz2thgnd1cEgA_sk")
})(MapContainer)
