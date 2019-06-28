import React from "react"
import PropTypes from "prop-types"

class ShopReviews extends React.Component {
  constructor(props) {
    super(props)
    const { match } = this.props
    this.state = {
      // shopId: match.params.id
    }
  }
  
  // componentDidUpdate = prevProps => {
  //   const prevMatch = prevProps.match
  //   const { match } = this.props
  //   if (match.params.id != prevMatch.params.id) {
  //     this.setState({ shopId: match.params.id })
  //   }
  // }
  
  render () {
    const { shopId } = this.state
    const { reviews } = this.props
    // const review = reviews.find(review => review.id == shopId)
    return (
      <React.Fragment>
        
      </React.Fragment>
    );
  }
}

export default ShopReviews
