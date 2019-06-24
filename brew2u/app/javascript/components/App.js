import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes'

class App extends React.Component {
  
  createEstablishment = (newEstablishmentInfo) => {
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
  
  render () {
    const {
      user_logged_in,
      user_sign_in_route,
      user_sign_out_route,
      admin_logged_in,
      admin_sign_in_route,
      admin_sign_out_route,
      createEstablishment
    } = this.props
    return (
      <React.Fragment>
        <Router>
          <Routes
            userLoggedIn={ user_logged_in }
            userSignInRoute={ user_sign_in_route }
            userSignOutRoute={ user_sign_out_route }
            adminLoggedIn={ admin_logged_in }
            adminSignInRoute={ admin_sign_in_route }
            adminSignOutRoute={ admin_sign_out_route }
            handleNewEstablishment={ this.createEstablishment}
          />
        </Router>
      </React.Fragment>
    );
  }
}

export default App
