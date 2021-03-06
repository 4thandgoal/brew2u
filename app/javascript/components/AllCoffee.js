import React from "react"
import PropTypes from "prop-types"
import SingleShop from "./SingleShop"
import { Link } from 'react-router-dom'
import Rating from './Rating'


class AllCoffee extends React.Component {
  
  componentDidMount = () => {
    const { componentDidMount } = this.props
    componentDidMount()
  }
  
  render () {
    const { establishments, reviews } = this.props
    const allCoffeeShops = () => {
      let coffeeShops = establishments.filter(shop => {
        if (/coffee/i.test(shop.coffee_or_beer)) {
          return shop
        }
      })
      return coffeeShops
        .sort((x, y) => y.average_rating - x.average_rating)
        .map(shop => {
          return (
            <div key={shop.id} className="shopwrapCoffee">
              <Link to={`/singleshop/${shop.id}`} className="shoplink">
                <h3 className="companyNameCoffee">{shop.company_name}</h3>
                <h4 className="avgRating">Average Rating: <Rating averageRating={ shop.average_rating } /></h4>
                <h5 className="addressText">{shop.street_1}</h5>
                <h5 className="addressText">{shop.street_2}</h5>
                <h5 className="addressText">{`${shop.city}, ${shop.state} ${shop.zip}`}</h5>
              </Link>
            </div>
          )
      })
    }
    return (
      <React.Fragment>
        <h2 className="pagetitle">Coffee Shops</h2>
        { allCoffeeShops() }
      </React.Fragment>
    );
  }
}

export default AllCoffee
