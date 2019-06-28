import React from "react"
import PropTypes from "prop-types"

class AdminSignIn extends React.Component {
  render () {
    const { adminLoggedIn, adminSignInRoute, adminSignOutRoute } = this.props
    return (
      <React.Fragment>
        {adminLoggedIn &&
          <div className="signwrapper">
            <h5 className="logtext">You are signed in! Welcome to Brew2U!</h5>
            <div className="centerdiv">
              <a className="usersigntext" href={ adminSignOutRoute }>Sign Out</a>
            </div>
          </div>
        }
        
        {!adminLoggedIn &&
          <div className="signwrapper">
            <h5 className="logtext">You are not signed in! Please sign in to register your business.</h5>
            <div className="centerdiv">
              <a className="usersigntext" href={ adminSignInRoute }>Vendor Sign In</a>
            </div>
          </div>
        }
      </React.Fragment>
    )
  }
}
export default AdminSignIn
