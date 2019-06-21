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
        </Navbar>
        <Switch>
        </Switch>
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
                <NavLink href="#">Another Link</NavLink>
              </NavItem>
            </Nav>
          </div>
      </React.Fragment>
    )
  }
}

export default Routes;    
    
