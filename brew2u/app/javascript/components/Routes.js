import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import banner from './brew2ulogo.png'
  

//Routes
import AdminSignIn from "./AdminSignIn";
import AllBeer from "./AllBeer";
import AllCoffee from "./AllCoffee";
import Landing from "./Landing";
import MapContainer from "./MapContainer"
import NewEstablishment from "./NewEstablishment"
import NewReview from "./NewReview"
import ShopReviews from './ShopReviews'
import SingleShop from "./SingleShop"
import UserSignIn from "./UserSignIn";

class Routes extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      establishments: [],
      reviews: []
    }
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  componentDidMount = () => {
    Promise.all([fetch('/establishments.json'), fetch('/reviews.json')])
      .then(([response1, response2]) => {
        return Promise.all([response1.json(), response2.json()])
      })
      .then(([data1, data2]) => {
        this.setState({
          establishments: data1,
          reviews: data2
        })
      })
  }
  
  handleNewEstablishment = (newEstablishmentInfo) => {
    return fetch("/establishments.json", {
      headers:{
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newEstablishmentInfo)
    })
    .then(resp => {
      let json = resp.json()
      return json
    })
  }

  handleNewReview = (newReviewInfo) => {
    return fetch("/reviews.json", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(newReviewInfo)
    })
    .then(resp => {
      let json = resp.json()
      return json
    })
  } 
    
  render() {
    const { establishments, reviews } = this.state
    const { 
      userLoggedIn,
      userSignInRoute,
      userSignOutRoute,
      adminLoggedIn,
      adminSignInRoute,
      adminSignOutRoute
    } = this.props
    return (
      <React.Fragment>
        <Navbar id="thenavbar" color='light' light expand='md'>
          <NavbarBrand href="/"><img className="logo" src={banner} alt="brew2u logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                {!userLoggedIn && !adminLoggedIn &&
                  <DropdownToggle id="logintext" nav caret>
                    Log In
                  </DropdownToggle>
                }
                {(userLoggedIn || adminLoggedIn) &&
                  <DropdownToggle nav caret>
                    Log Out
                  </DropdownToggle>
                }
                {!userLoggedIn && !adminLoggedIn &&
                  <DropdownMenu right>
                    <DropdownItem href='#users/sign_in'>
                      User Login
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem href='#admins/sign_in'>
                      Vendor Login
                    </DropdownItem>
                  </DropdownMenu>
                }
                {userLoggedIn &&
                  <DropdownMenu right>
                    <DropdownItem href='#users/sign_in'>
                      User Logout
                    </DropdownItem>
                  </DropdownMenu>
                }
                {adminLoggedIn &&
                  <DropdownMenu right>
                    <DropdownItem href='#admins/sign_in'>
                      Vendor Logout
                    </DropdownItem>
                  </DropdownMenu>
                }
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <div>
          <Nav vertical>
            <UncontrolledDropdown nav inNavbar>
             <DropdownToggle id="coffeeshopslink" nav caret>
                Coffee Shops
              </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem href="#allcoffee">
                    Top Rated
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Near Me
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle id="brewerieslink" nav caret>
                Breweries
              </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem href="#allbeer">
                    Top Rated
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Near Me
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {adminLoggedIn &&
                <NavItem>
                  <NavLink href="#newestablishment" id="registerEstLink">
                    Register a New Establishment
                  </NavLink>
                </NavItem>
              }
          </Nav>
        </div>
        <Switch>
            <Route exact path='/' component={ Landing } />
            <Route
              path='/allbeer'
              render={
                (props) =>
                <AllBeer
                  establishments={ establishments }
                  componentDidMount={ this.componentDidMount }
                />
              }
            />
            <Route
              path='/allcoffee'
              render={
                (props) =>
                <AllCoffee
                  {...props}
                  establishments={ establishments }
                  reviews={reviews}
                  componentDidMount={ this.componentDidMount }
                />
              }
            />
            <Route 
              path="/newestablishment"
              render={
                (props)=>
                <NewEstablishment
                  handleNewEstablishment={this.handleNewEstablishment}
                />
              }
            />
            <Route
              path="/shopreviews/:establishment_id"
              render={
                (props) =>
                <ShopReviews
                  {...props}
                  reviews={ reviews }
                />
              }
            />
            <Route
              path="/singleshop/:id"
              render={
                (props) =>
                <SingleShop
                  {...props}
                  establishments={ establishments }
                  reviews={ reviews }
                  userLoggedIn={ userLoggedIn }
                />
              }
            />
            <Route 
              path="/newreview/:establishment_id"
              render={
                (props)=>
                <NewReview
                  {...props}
                  handleNewReview={this.handleNewReview}
                  reviews={ reviews }
                />
              }
            />
            <Route
              path="/map"
              component = { MapContainer }
            />
            <Route
              path='/users/sign_in'
              render={
                (props) =>
                <UserSignIn
                  {...props}
                  userLoggedIn={ userLoggedIn }
                  userSignInRoute={ userSignInRoute }
                  userSignOutRoute={ userSignOutRoute }
                />
              }
            />
            <Route
              path='/admins/sign_in'
              render={
                (props) =>
                <AdminSignIn
                  {...props}
                  adminLoggedIn={ adminLoggedIn }
                  adminSignInRoute={ adminSignInRoute }
                  adminSignOutRoute={ adminSignOutRoute }
                />
              }
            />
        </Switch>
        <footer>
          <a href="#aboutus">About Us</a>
          <p className="footerp">Brew2U</p>
          <p className="footerp">&copy; 4th & Goal 2019</p>
        </footer>
      </React.Fragment>
    )
  }
}

export default Routes;    
    
