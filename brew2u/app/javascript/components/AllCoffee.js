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
          <div>
          <h2 className="pagetitle">Coffee Shops</h2>
          <div key={shop.id} className="shopwrapCoffee">
            <Link to={`/singleshop/${shop.id}`} className="shoplink">
              <h3 className="companyNameCoffee">{shop.company_name}</h3>
              <h5 className="addressText">{shop.street_1}</h5>
              <h5 className="addressText">{shop.street_2}</h5>
              <h5 className="addressText">{shop.city}</h5>
              <h5 className="addressText">{shop.state}</h5>
              <h5 className="addressText">{shop.zip}</h5>
              <br/>
            </Link>
            {console.log(shop.rating)}
          </div>
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
