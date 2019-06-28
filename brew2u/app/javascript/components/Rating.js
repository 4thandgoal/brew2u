import React from "react"
import PropTypes from "prop-types"

class Rating extends React.Component {
  render () {
    return (
      <React.Fragment>
        {this.props.averageRating}
      </React.Fragment>
    );
  }
}

export default Rating
