import React from "react"
import PropTypes from "prop-types"
class AdminSignIn extends React.Component {
  render () {
    const { admin_logged_in, admin_sign_in_route, admin_sign_out_route } = this.props
    return (
      <React.Fragment>
        {admin_logged_in &&
          <div>
            <h5>You are signed in! Welcome to Brew2U!</h5>
            <a href={ admin_sign_out_route }>Sign Out</a>
          </div>
        }
        
        {!admin_logged_in &&
          <div>
            <h5>You are not signed in! Please sign in to register your business.</h5>
            <a href={ admin_sign_in_route }>Sign In</a>
          </div>
        }
      </React.Fragment>
    )
  }
}
export default AdminSignIn
