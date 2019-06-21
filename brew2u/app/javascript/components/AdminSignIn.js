import React from "react"
import PropTypes from "prop-types"

class AdminSignIn extends React.Component {
  render () {
    const { adminLoggedIn, adminSignInRoute, adminSignOutRoute } = this.props
    return (
      <React.Fragment>
        {adminLoggedIn &&
          <div>
            <h5>You are signed in! Welcome to Brew2U!</h5>
            <a href={ adminSignOutRoute }>Sign Out</a>
          </div>
        }
        
        {!adminLoggedIn &&
          <div>
            <h5>You are not signed in! Please sign in to register your business.</h5>
            <a href={ adminSignInRoute }>Sign In</a>
          </div>
        }
      </React.Fragment>
    )
  }
}
export default AdminSignIn
