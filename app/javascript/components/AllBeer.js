import React from "react"
import PropTypes from "prop-types"
import Rating from './Rating'
import { Link } from 'react-router-dom'

class AllBeer extends React.Component {
  
  componentDidMount = () => {
    const { componentDidMount } = this.props
    componentDidMount()
  }
  
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
            <div key={beer.id} className="shopwrapBeer">
              <Link to={`/singleshop/${beer.id}`} className="shoplink">
                <h3 className="companyNameBeer">{beer.company_name}</h3>
                <h4>Average Rating: <Rating averageRating={ beer.average_rating } /></h4>
                <h5 className="addressText">{beer.street_1}</h5>
                <h5 className="addressText">{beer.street_2}</h5>
                <h5 className="addressText">{beer.city}</h5>
                <h5 className="addressText">{beer.state}</h5>
                <h5 className="addressText">{beer.zip}</h5>
                <br/>
              </Link>
            </div>
          )
      })
    }
    return (
      <React.Fragment>
        <h2 className="pagetitle">MicroBreweries</h2>
        { allBreweries() }
      </React.Fragment>
    );
  }
}

export default AllBeer
