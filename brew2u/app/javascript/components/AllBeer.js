import React from "react"
import PropTypes from "prop-types"

class AllBeer extends React.Component {
  render () {
    const { establishments } = this.props
    const highestRatedBeer = () => {
      let beers = establishments.filter(shop => {
        if (/beer/i.test(shop.coffee_or_beer)) {
          return shop
        }
      })
      // let bestBeers = beers.rating.sort((x, y) => {
      //   return y-x
      // })
      return beers.map(beer=>{
          return (
            <div key={beer.id}>
              <h3>{beer.company_name}</h3>
              <h5>{beer.street_1}</h5>
              <h5>{beer.street_2}</h5>
              <h5>{beer.city}.</h5>
              <h5>{beer.state}</h5>
              <h5>{beer.zip}</h5>
              <br/>
            </div>
          )
      })
    }
    return (
      <React.Fragment>
        { highestRatedBeer() }
      </React.Fragment>
    );
  }
}

export default AllBeer
