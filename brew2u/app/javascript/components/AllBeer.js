import React from "react"
import PropTypes from "prop-types"
import Rating from './Rating'
import { Link } from 'react-router-dom'

class AllBeer extends React.Component {
  
  render () {
    const { establishments } = this.props
    const allBreweries = () => {
      let beers = establishments.filter(shop => {
        if (/beer/i.test(shop.coffee_or_beer)) {
          return shop
        }
      })
      return beers.map(beer=>{
          return (
            <div key={beer.id}>
              <Link to={`/singleshop/${beer.id}`}>
                <h3>{beer.company_name}</h3>
                <h4><Rating averageRating={beer.average_rating} /></h4>
                <h5>{beer.street_1}</h5>
                <h5>{beer.street_2}</h5>
                <h5>{beer.city}</h5>
                <h5>{beer.state}</h5>
                <h5>{beer.zip}</h5>
                <br/>
              </Link>
            </div>
          )
      })
    }
    return (
      <React.Fragment>
        { allBreweries() }
      </React.Fragment>
    );
  }
}

export default AllBeer
