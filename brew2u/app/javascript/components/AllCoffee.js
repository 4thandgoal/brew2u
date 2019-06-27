import React from "react"
import PropTypes from "prop-types"
import SingleShop from "./SingleShop"
import { Link } from 'react-router-dom'


class AllCoffee extends React.Component {
  
  render () {
    const { establishments } = this.props
    const allCoffeeShops = () => {
      let coffeeShops = establishments.filter(shop => {
        if (/coffee/i.test(shop.coffee_or_beer)) {
          return shop
        }
      })
      return coffeeShops.map(shop => {
        return (
          <div key={shop.id}>
            <Link to={`/singleshop/${shop.id}`}>
              <h3>{shop.company_name}</h3>
              <h5>{shop.street_1}</h5>
              <h5>{shop.street_2}</h5>
              <h5>{shop.city}</h5>
              <h5>{shop.state}</h5>
              <h5>{shop.zip}</h5>
              <br/>
            </Link>
            {console.log(shop.rating)}
          </div>
        )
      })
    }
    return (
      <React.Fragment>
        { allCoffeeShops() }
      </React.Fragment>
    );
  }
}

export default AllCoffee
