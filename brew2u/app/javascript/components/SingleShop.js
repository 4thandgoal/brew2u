import React from "react"
import PropTypes from "prop-types"


class SingleShop extends React.Component {
  constructor(props){
    super(props)
    const { match } = this.props
    this.state = {
      shopId: match.params.id,
      reviews: []
    }
  }
  
  componentDidUpdate = prevProps => {
    const prevMatch = prevProps.match
    const { match } = this.props
    if (match.params.id != prevMatch.params.id) {
      this.setState({ shopId: match.params.id })
    }
  }
  
  render () {
    const { shopId } = this.state
    const { establishments } = this.props
    const shop = establishments.find(shop => shop.id === shopId)
    return (
      <React.Fragment>
        {shop && 
          <div>
            <h2>{shop.company_name}</h2>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default SingleShop
