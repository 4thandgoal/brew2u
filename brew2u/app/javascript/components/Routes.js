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
                  <DropdownItem>
                    User Log In
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Vendor Log In
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
          <div class="sidebar">
            <nav class="sidebar-nav">
              <ul class="nav">
                <li class="nav-home">Home</li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="nav-icon cui-speedometer"></i> Coffee Shops
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="nav-icon cui-speedometer"></i> Breweries
                  </a>
                </li>
              </ul>  
            </nav>
            <button class="sidebar-minimizer brand-minimizer" type="button"></button>
          </div>
        </Navbar>
        <Switch>
        </Switch>
      </React.Fragment>
    )
  }
}

export default Routes;    
    
