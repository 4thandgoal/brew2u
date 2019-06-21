import React from "react"
import PropTypes from "prop-types"

class UserSignIn extends React.Component {
    render () {
    const { user_logged_in, user_sign_in_route, user_sign_out_route } = this.props
    return (
      <React.Fragment>
        {user_logged_in &&
          <div>
            <h5>You are signed in! Welcome to Brew2U!</h5>
            <a href={ user_sign_out_route }>Sign Out</a>
          </div>
        }
        
        {!user_logged_in &&
          <div>
            <h5>You are not signed in! Please sign in to join our Brew2U community.</h5>
            <a href={ user_sign_in_route }>Sign In</a>
          </div>
        }
      </React.Fragment>
    )
  }
}
export default UserSignIn
