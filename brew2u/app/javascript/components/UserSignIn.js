import React from "react"
import PropTypes from "prop-types"

class UserSignIn extends React.Component {
    render () {
    const { userLoggedIn, userSignInRoute, userSignOutRoute } = this.props
    return (
      <React.Fragment>
        {userLoggedIn &&
          <div>
            <h5>You are signed in! Welcome to Brew2U!</h5>
            <a href={ userSignOutRoute }>Sign Out</a>
          </div>
        }
        
        {!userLoggedIn &&
          <div>
            <h5>You are not signed in! Please sign in to join our Brew2U community.</h5>
            <a href={ userSignInRoute }>Sign In</a>
          </div>
        }
      </React.Fragment>
    )
  }
}
export default UserSignIn
