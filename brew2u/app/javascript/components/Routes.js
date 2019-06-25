import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import UserSignIn from "./UserSignIn";
import AdminSignIn from "./AdminSignIn";
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
import AllBeer from "./AllBeer";
import AllCoffee from "./AllCoffee";
import Landing from "./Landing";
import MapContainer from "./MapContainer"
import NewEstablishment from "./NewEstablishment"
import NewReview from "./NewReview"
import SingleShop from "./SingleShop"

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
    const { establishments } = this.state
    fetch('/establishments.json')
      .then(response => { return response.json() })
      .then(data => { this.setState({ establishments: data }) })
  }
  
  componentDidMount = () => {
    const { reviews } = this.state
    fetch('/reviews.json')
      .then(response => { return response.json() })
      .then(data => { this.setState({ reviews: data }) })
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
      headers:{
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
        <Navbar color='light' light expand='md'>
          <NavbarBrand href="/"><img className="logo" src={banner} alt="brew2u logo" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Log In
                </DropdownToggle>
                <DropdownMenu right>
                  {userLoggedIn &&
                    <DropdownItem href='#users/sign_in'>User Logout
                    </DropdownItem> 
                  }
                  {!userLoggedIn && 
                    <DropdownItem href='#users/sign_in'>User Login
                    </DropdownItem>
                  }
                <DropdownItem divider />
                  {adminLoggedIn &&
                    <DropdownItem href='#admins/sign_in'>Vendor Logout
                    </DropdownItem> 
                  }
                  {!adminLoggedIn && 
                    <DropdownItem href='#admins/sign_in'>Vendor Login
                    </DropdownItem>
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <div>
          <Nav vertical>
            <UncontrolledDropdown nav inNavbar>
             <DropdownToggle nav caret>
                Coffee Shops
              </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Top Rated
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Near Me
                  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Breweries
              </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    Top Rated
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Near Me
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#allbeer">Beer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#allcoffee">Coffee</NavLink>
              </NavItem>
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
                  establishments={ establishments }
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
              path="/singleshop/:id"
              render={
                (props) =>
                <SingleShop
                  establishments={ establishments }
                />
              }
            />
            <Route 
              path="/newreview"
              render={
                (props)=>
                <NewReview
                  handleNewReview={this.handleNewReview}
                />
              }
            />
            <Route
              path="/map" component = { MapContainer }
            />
            <Route
              path='/users/sign_in'
              render={
                (props) =>
                <UserSignIn
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
                  adminLoggedIn={ adminLoggedIn }
                  adminSignInRoute={ adminSignInRoute }
                  adminSignOutRoute={ adminSignOutRoute }
                />
              }
            />
        </Switch>
        <footer>
          <p>Brew2U</p>
          <p>&copy; 4th & Goal 2019</p>
        </footer>
      </React.Fragment>
    )
  }
}

export default Routes;    
    
