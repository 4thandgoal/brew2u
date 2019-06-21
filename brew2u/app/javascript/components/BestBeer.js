import React from "react"
import PropTypes from "prop-types"
class BestBeer extends React.Component {
  render () {
    const { beers } = this.props
    const highestRatedBeer = () => {
      let bestBeers = beers.rating.sort((x, y) => {
        return y-x
      })
      return bestBeers.map(beer=>{
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
      </React.Fragment>
    );
  }
}

export default BestBeer
