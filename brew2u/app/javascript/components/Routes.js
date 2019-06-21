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
import Beer from "./Beer";
import Coffee from "./Coffee";
import Landing from "./Landing";


class Routes extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false  
    }
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
    
  render() {
    const{ 
      user_logged_in,
      admin_logged_in,
      user_sign_in_route,
      user_sign_out_route,
      admin_sign_in_route,
      admin_sign_out_route
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
                  {user_logged_in &&
                    <DropdownItem href='#users/sign_in'>User Logout
                    </DropdownItem> 
                  }
                  {!user_logged_in && 
                    <DropdownItem href='#users/sign_in'>User Login
                    </DropdownItem>
                  }
                <DropdownItem divider />
                  {admin_logged_in &&
                    <DropdownItem href='#admins/sign_in'>Vendor Logout
                    </DropdownItem> 
                  }
                  {!admin_logged_in && 
                    <DropdownItem href='#admins/sign_in'>Vendor Login
                    </DropdownItem>
                  }
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
            <Route exact path='/' component={ Landing } />
            <Route
              path='/beer'
              render={
                (props) =>
                <Beer
                  beer={ beer }
                  componentDidMount={ this.componentDidMount }
                />
              }
            />
            <Route
              path='/coffee'
              render={
                (props) =>
                <Coffee
                  coffee={ coffee }
                  componentDidMount={ this.componentDidMount }
                />
              }
            />
            <Route
              path='/users/sign_in'
              render={
                (props) =>
                <UserSignIn
                  user_logged_in={ user_logged_in }
                  user_sign_in_route={ user_sign_in_route }
                  user_sign_out_route={ user_sign_out_route }
                />
              }
            />
            <Route
              path='/admins/sign_in'
              render={
                (props) =>
                <AdminSignIn
                  admin_logged_in={ admin_logged_in }
                  admin_sign_in_route={ admin_sign_in_route }
                  admin_sign_out_route={ admin_sign_out_route }
                />
              }
            />
        </Switch>
      </React.Fragment>
    )
  }
}

export default Routes;    
    
