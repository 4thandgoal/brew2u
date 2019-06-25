import React from "react"
import PropTypes from "prop-types"


class AllCoffee extends React.Component {
  render () {
    const { establishments } = this.props
    //highestRatedCoffee is to sort and display coffee shops that have the highest ratings
    const highestRatedCoffee = () => {
      let test = establishments.map(shop=>{return shop.company_name})
      console.log(test)
      
      let coffees = establishments.filter(shop => {
        if (/coffee/i.test(shop.coffee_or_beer)) {
          return shop
        }
      })
      console.log(coffees)
      
      //need to figure out how to access the ratings of each coffee shop
      //also need ratings as an average of all ratings
      // let bestCoffees = coffees.rating.sort((x, y) => {
      //   return y-x
      // })
      
      
      return coffees.map(coffee=>{
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
        { highestRatedCoffee() }
      </React.Fragment>
    );
  }
}

export default AllCoffee
