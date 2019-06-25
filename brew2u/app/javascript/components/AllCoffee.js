import React from "react"
import PropTypes from "prop-types"
import SingleShop from "./SingleShop"
import { Link, Route } from 'react-router-dom'


class AllCoffee extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  
  
  // handleList = () => {
  //   const { establishments } = this.props
  //   let coffeeShops = establishments.filter(shop => {
  //     if (/coffee/i.test(shop.coffee_or_beer)) {
  //       return shop
  //     }
  //   })
  //   return coffeeShops.map(shop => {
  //     return (
  //       <div key={shop.id}>
  //         <a href='#singleshop'>
  //           <h3>{shop.company_name}</h3>
  //           <h5>{shop.street_1}</h5>
  //           <h5>{shop.street_2}</h5>
  //           <h5>{shop.city}</h5>
  //           <h5>{shop.state}</h5>
  //           <h5>{shop.zip}</h5>
  //           <br/>
  //         </a>
  //       </div>
  //     )
  //   })
  // }
  
  
  
  render () {
    const { establishments } = this.props
    const singleShop = () => {
      let coffeeShops = establishments.filter(shop => {
        if (/coffee/i.test(shop.coffee_or_beer)) {
          return shop
        }
      })
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
          </div>
        )
      })
    }
    return (
      <React.Fragment>
        { singleShop() }
      </React.Fragment>
    );
  }
}

export default AllCoffee
