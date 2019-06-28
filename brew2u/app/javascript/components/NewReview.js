import React from "react"
import PropTypes from "prop-types"
import { 
  Link,
  Redirect
} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import ReactStars from 'react-stars'

class NewReview extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      attributes: {
        review: '',
        rating: 0,
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
        <h1><u>Write a Review</u></h1>
        <h5>Select Your Rating</h5>
        <ReactStars
          count={5}
          onChange={this.handleChange}
          value = {attributes.rating}
          name="rating"
          type="integer"
          size={24}
          half={false}
          color1={'red'}
          color2={'#ffd700'}
        />
      { console.log(this.state.rating) }
        <FormGroup>
          <Label for="review">Review</Label>
          <Input 
            type="textarea" rows="5" cols="10" 
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
