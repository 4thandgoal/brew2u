import React from "react"
import PropTypes from "prop-types"
import { Redirect } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class NewReview extends React.Component {
  constructor(props){
    super(props)
    const { match } = this.props
    this.state = {
      attributes: {
        establishment_id: match.params.id,
        rating: '',
        review: ''
      },
      success: false
    }
  }
  
  componentDidMount = () => {
    const { match } = this.props
    this.setState({ establishment_id: match.params.id })
  }
  
  handleChange = (event) => {
    const { attributes } = this.state  
    attributes[event.target.name] = event.target.value
    this.setState({ attributes })
  }
  
  handleNewReview = () => {
    const { success } = this.state
    const { handleNewReview } = this.props
    handleNewReview(this.state.attributes)
    let redirect = success === false ? true : false
    this.setState({ success: redirect })
  }
  
  
  render () {
    const { success, attributes } = this.state
    return (
      <React.Fragment>
      <div className="signwrapper">
        <h1 className="reviewHeading">Write a Review</h1>
        <h5 className="reviewHeading">Select Your Rating</h5>
        <Input
          type="select"
          name="rating"
          onChange={this.handleChange}
          value={attributes.rating}
          id="ratingArea"
        >
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        <FormGroup>
        <div className="alignfix">
          <Label for="review" id="reviewLabel">Review</Label>
        </div>
          <Input 
            type="textarea"
            rows="5"
            cols="10" 
            placeholder="Your review helps others learn about local coffee shops or microbreweries."
            name="review"
            onChange={this.handleChange}
            value = {attributes.review}
            id="reviewTextArea"
          />
        </FormGroup>
        <div id="submitReviewBtnWrap">
        <Button onClick={this.handleNewReview} id="submitReviewBtn">Post Review</Button>
        </div>

        {success &&
          <Redirect to={`/singleshop/${attributes.establishment_id}`} />
        }
        </div>
      </React.Fragment>
    );
  }
}

export default NewReview
