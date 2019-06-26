import React from "react"
import PropTypes from "prop-types"
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'


export class MapContainer extends React.Component {
  render () {
    const mapStyles = {
      width: "50%",
      height: "50%",
      
    }
    return (
      <React.Fragment>
        <Map
            google={this.props.google}
            style={mapStyles}
            center={{
              lat: 32.892507,
              lng: -117.144781
            }}
            zoom={15}
            onClick={this.onMapClicked}
          >
          <Marker onClick={this.onMarkerClick}
                  name={'Mikkeller'} 
                  title={'Mikkeller'}
                  position = {{lat: 32.892507, lng: -117.144781}}
          />
          <InfoWindow onClose={this.onInfoWindowClose}>
              
          </InfoWindow>
        </Map>
      </React.Fragment>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDSkERfUbqV1nPReiTvz2thgnd1cEgA_sk")
})(MapContainer)
