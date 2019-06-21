import React from "react"
import PropTypes from "prop-types"


class BestCoffee extends React.Component {
  render () {
    //coffees is a placeholder for all coffee establishments
    //coffee is a single coffee shop
    const { coffees } = this.props
    //highestRatedCoffee is to sort and display coffee shops that have the highest ratings
    const highestRatedCoffee = () => {
      let bestCoffees = coffees.rating.sort((x, y) => {
        return y-x
      })
      return bestCoffees.map(coffee=>{
        return (
          <div key={coffee.id}>
            <h3>{coffee.company_name}</h3>
            <h5>{coffee.street_1}</h5>
            <h5>{coffee.street_2}</h5>
            <h5>{coffee.city}.</h5>
            <h5>{coffee.state}</h5>
            <h5>{coffee.zip}</h5>
            <br/>
          </div>
        )
      })
    }
    return (
      <React.Fragment>
        { highestRatedCoffee }
      </React.Fragment>
    );
  }
}

export default BestCoffee
