import React from "react"
import PropTypes from "prop-types"

class UserSignIn extends React.Component {
    render () {
    const { userLoggedIn, userSignInRoute, userSignOutRoute } = this.props
    return (
      <React.Fragment>
        {userLoggedIn &&
          <div className="signwrapper">
            <h5 className="logtext">You are signed in! Welcome to Brew2U!</h5>
            <div className="centerdiv">
              <a className="usersigntext" href={ userSignOutRoute }>Sign Out</a>
            </div>
          </div>
        }
        
        {!userLoggedIn &&
          <div className="signwrapper">
            <h5 className="logtext">You are not signed in! Please sign in to join our Brew2U community.</h5>
            <div className="centerdiv">
              <a className="usersigntext" href={ userSignInRoute }>User Sign In</a>
            </div>
          </div>
        }
      </React.Fragment>
    )
  }
}
export default UserSignIn
