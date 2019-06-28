import React from "react"
import PropTypes from "prop-types"
import MapContainer from "./MapContainer"


class SingleShop extends React.Component {
  constructor(props){
    super(props)
    const { match } = this.props
    this.state = {
      shopId: match.params.id,
      reviews: []
    }
  }
  
  componentDidUpdate = prevProps => {
    const prevMatch = prevProps.match
    const { match } = this.props
    if (match.params.id != prevMatch.params.id) {
      this.setState({ shopId: match.params.id })
    }
  }
  
  render () {
    const { shopId } = this.state
    const { establishments } = this.props
    const shop = establishments.find(shop => shop.id == shopId)
    return (
      <React.Fragment>
        {shop && 
          <div>
            <h2>{shop.company_name}</h2>
            <h3>Placeholder: Average Rating</h3>
            <h4>{shop.website}</h4>
            <h4>{shop.phone}</h4>
            <h5>{shop.street_1}</h5>
            <h5>{shop.street_2}</h5>
            <h5>{shop.city}</h5>
            <h5>{shop.state}</h5>
            <h5>{shop.zip}</h5>
            <p>{shop.hours_of_operation}</p>
            <p>{shop.pet_friendly}</p>
            <p>{shop.wifi}</p>
            <MapContainer
              name={shop.company_name}
              latitude={shop.latitude}
              longitude={shop.longitude}
            />
          </div>
        }
      </React.Fragment>
    );
  }
}

export default SingleShop