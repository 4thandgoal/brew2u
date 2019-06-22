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
  

//Routes
import BestBeer from "./BestBeer";
import BestCoffee from "./BestCoffee";
import Landing from "./Landing";


class Routes extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      establishments: []
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
    
  render() {
    const { establishments } = this.state
    const{ 
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
          <NavbarBrand href="/">Brew2U</NavbarBrand>
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
                <NavLink href="#bestbeer">Beer</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#bestcoffee">Coffee</NavLink>
              </NavItem>
            </Nav>
          </div>
        <Switch>
            <Route exact path='/' component={ Landing } />
            <Route
              path='/bestbeer'
              render={
                (props) =>
                <BestBeer
                  establishments={ establishments }
                  componentDidMount={ this.componentDidMount }
                />
              }
            />
            <Route
              path='/bestcoffee'
              render={
                (props) =>
                <BestCoffee
                  establishments={ establishments }
                  componentDidMount={ this.componentDidMount }
                />
              }
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
      </React.Fragment>
    )
  }
}

export default Routes;    
    
