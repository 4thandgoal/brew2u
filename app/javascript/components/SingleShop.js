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
    const { establishments, reviews, userLoggedIn } = this.props
    const shop = establishments.find(shop => shop.id == shopId)
    const allReviews = () => {
      return reviews.map(review => {
        if (review.establishment_id == shopId)
          return (
            <div key={review.id}>
              <h3>{review.rating}</h3>
              <p>{review.review}</p>
              <br />
              <br />
            </div>
          )
      })
    }
    return (
      <React.Fragment>
        {shop && 
          <div>
            {userLoggedIn &&
              <Link to={`/newreview/${shop.id}`}>Write a Review</Link>
            }
            <h2>{shop.company_name}</h2>
            <h3>Average Rating: {shop.average_rating}</h3>
            <h4>{shop.website}</h4>
            <h4>{shop.phone}</h4>
            <h5>{shop.street_1}</h5>
            <h5>{shop.street_2}</h5>
            <h5>{shop.city}</h5>
            <h5>{shop.state}</h5>
            <h5>{shop.zip}</h5>
            <p>Business Hours: {shop.hours_of_operation}</p>
            <p>{shop.pet_friendly}</p>
            <p>{shop.wifi}</p>
            <hr />
            <br />
            <br />
            <div>
              <h4>Reviews</h4>
              {reviews.length > 0 &&
                <div>
                  {allReviews()}
                </div>
              }
              {reviews.length == 0 &&
                <div>
                  <h6>Be the first to leave a Review!</h6>
                </div>
              }
            </div>
            <br />
            <br />
            <br />
            <br />
            <MapContainer
              name={shop.company_name}
              latitude={shop.latitude}
              longitude={shop.longitude}
              rating={shop.average_rating}
            />
          </div>
        }
      </React.Fragment>
    );
  }
}

export default SingleShop