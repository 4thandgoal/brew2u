import React from "react";
import PropTypes from "prop-types";
import { HashRouter as Router } from 'react-router-dom';
import Routes from './Routes'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Router>
          <Routes />
        </Router>
      </React.Fragment>
    );
  }
}

export default App
