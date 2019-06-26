import React from "react"
import PropTypes from "prop-types"

class UserSignIn extends React.Component {
    render () {
    const { userLoggedIn, userSignInRoute, userSignOutRoute } = this.props
    return (
      <React.Fragment>
        {userLoggedIn &&
          <div className="usersignwrapper">
            <h5 className="userlogtext">You are signed in! Welcome to Brew2U!</h5>
            <a id="usersignouttext" href={ userSignOutRoute }>Sign Out</a>
          </div>
        }
        
        {!userLoggedIn &&
          <div className="usersignwrapper">
            <h5 className="userlogtext">You are not signed in! Please sign in to join our Brew2U community.</h5>
            <div id="test">
            <a id="usersignintext" href={ userSignInRoute }>User Sign In</a>
            </div>
          </div>
        }
      </React.Fragment>
    )
  }
}
export default UserSignIn
