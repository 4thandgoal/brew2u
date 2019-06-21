import React from "react"
import PropTypes from "prop-types"
class Beer extends React.Component {
  render () {
    const { beers } = this.props
    const highestRatedBeer = () => {
      return beers.rating.sort((x, y) => {
        return y-x
      })
    }
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

export default Beer
