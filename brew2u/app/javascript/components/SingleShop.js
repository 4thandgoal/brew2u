import React from "react"
import PropTypes from "prop-types"
import MapContainer from "./MapContainer"
import ShopReviews from './ShopReviews'
import { Link } from 'react-router-dom';
import { NavItem, NavLink } from 'reactstrap';


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
            <Link to={`/newreview/${shop.id}`} id="reviewLink">Write a Review</Link>
            <h2 className="shopName">{shop.company_name}</h2>
            <h3 className="shopRating">Average Rating: {shop.average_rating}</h3>
            
            <div className="flexContainer">
            
              <div className="detailsWrap">
                <h4 className="shopWebsite"><a href="{shop.website}" target="_blank">{shop.website}</a></h4>
                <h4 className="shopPhone">{shop.phone}</h4>
                <h5 className="shopAddress">{shop.street_1}</h5>
                <h5 className="shopAddress">{shop.street_2}</h5>
                <h5 className="shopAddress">{shop.city}</h5>
                <h5 className="shopAddress">{shop.state}</h5>
                <h5 className="shopAddress">{shop.zip}</h5>
                <p className="shopDetails">Business Hours: {shop.hours_of_operation}</p>
                <p className="shopDetails">{shop.pet_friendly}</p>
                <p className="shopDetails">{shop.wifi}</p>
              </div>
              
              <div className="mapFix">
                <MapContainer
                  name={shop.company_name}
                  latitude={shop.latitude}
                  longitude={shop.longitude}
                  rating={shop.rating}
                />
              </div>
            </div>
            
            <hr />
            <br />
            <br />
            
          </div>
        }
      </React.Fragment>
    );
  }
}

export default SingleShop