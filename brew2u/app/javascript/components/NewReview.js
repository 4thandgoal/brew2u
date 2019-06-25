import React from "react"
import PropTypes from "prop-types"
import { 
  Link,
  Redirect
} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { emptySymbol, fullSymbol, Rating } from 'react-rating';

class NewReview extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      attributes: {
        review: '',
        rating: '',
      },
      success: false
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
  
  render () {
    const{ success, attributes } = this.state
    return (
      <React.Fragment>
        <h1>Write a Review</h1>
        <FormGroup>
          <Label for="review">Review</Label>
          <Input 
            type="textarea" rows="5" cols="50" 
            placeholder="Your review helps others learn about local businesses."
            name="review"
            onChange={this.handleChange}
            value = {attributes.review}
          />
        </FormGroup>
        <FormGroup>
          <Label for="rating">Star Rating</Label>
            <Input
              type="number"
              min="1"
              max="5"
              placeholderrating="3"
              name="rating"
              onChange={this.handleChange}
              value = {attributes.rating}
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
