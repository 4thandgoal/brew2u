import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import App from './App';
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

class Routes extends Component {
  constructor() {
    super()
  
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
    
  render() {
    return (
      <React.Fragment>
        <NavBar>
        </NavBar>
        <Switch>
        </Switch>
      </React.Fragment>
    )
  }
}

export default Routes;    
    
