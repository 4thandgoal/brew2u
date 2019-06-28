import React from "react"
import PropTypes from "prop-types"
import { 
  Link,
  Redirect
} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


class NewReview extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      attributes: {
        rating: 0,
        review: ''
      },
      success: false,
      shopId: match.params.id
    }
  }
  
  handleChange = (event)=>{
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
  
  componentDidUpdate = prevProps => {
    const prevMatch = prevProps.match
    const { match } = this.props
    if (match.params.id != prevMatch.params.id) {
      this.setState({ shopId: match.params.id })
    }
  }
  
  render () {
    const { success, attributes } = this.state
    return (
      <React.Fragment>
        <h1>Write a Review</h1>
        <h5>Select Your Rating</h5>
        <Input
          type="select"
          name="rating"
          onChange={this.handleChange}
          value={attributes.rating}
        >
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
        <FormGroup>
          <Label for="review">Review</Label>
          <Input 
            type="textarea"
            rows="5"
            cols="10" 
            placeholder="Your review helps others learn about local coffee shops or microbreweries."
            name="review"
            onChange={this.handleChange}
            value = {attributes.review}
          />
        </FormGroup>
        <Button onClick={this.handleNewReview}>Post Review</Button>

        {success &&
          <Redirect to="/" />
        }
      </React.Fragment>
    );
  }
}

export default NewReview
