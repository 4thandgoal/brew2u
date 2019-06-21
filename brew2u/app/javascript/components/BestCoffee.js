import React from "react"
import PropTypes from "prop-types"


class BestCoffee extends React.Component {
  render () {
    //coffees is a placeholder for all coffee establishments
    //coffee is a single coffee shop
    const { coffees } = this.props
    //highestRatedCoffee is to sort and display coffee shops that have the highest ratings
    const highestRatedCoffee = () => {
      return coffees.rating.sort((x, y) => {
        return y-x
      })
    }
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }
}

export default BestCoffee
