import React from "react"
import PropTypes from "prop-types"
import { 
  Link,
  Redirect
} from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class NewEstablishment extends React.Component {
  constructor(props){
    super(props)
    this.initialState = {
       attributes: {
        company_name: '',
        coffee_or_beer: '',
        phone: '',
        website: '',
        street_1: '',
        street_2: '',
        city: '',
        state: '',
        zip: '',
        hours_of_operation: '',
        pet_friendly: '',
        wifi: ''
      },
      createSuccess: false
    }
    this.state = this.initialState
  }
  
  
  handleChange = (event)=>{
    const { attributes } = this.state  
    attributes[event.target.name] = event.target.value
    this.setState({ attributes })
  }
  
  newEstablishment = ()=>{
    const{ handleNewEstablishment } = this.props
    const{ attributes } = this.state
    handleNewEstablishment(attributes)
    .then(()=>{
      const newState = this.initialState 
      newState.createSuccess = true
      this.setState(newState)
    })
    //we would need to handle error situations here
    //like showing validation errors
  }
  
    render () {
    const{ createSuccess, attributes } = this.state
    return (
      <React.Fragment>
        {createSuccess &&
          <Redirect to="/" />
        }
        <h1>New Establishment</h1>
        <FormGroup>
          <Label for="company_name">Company Name</Label>
          <Input 
            type="text" 
            name="company_name"
            onChange={this.handleChange}
            value = {attributes.company_name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="coffee_or_beer">Coffee or Beer</Label>
          <Input 
            type="text" 
            name="coffee_or_beer"
            onChange={this.handleChange}
            value = {attributes.coffee_or_beer}
          />
        </FormGroup>
        <FormGroup>
          <Label for="phone">Phone Number</Label>
          <Input 
            type="text" 
            name="phone"
            onChange={this.handleChange}
            value = {attributes.phone}
          />
        </FormGroup>
        <FormGroup>
          <Label for="website">Website</Label>
          <Input 
            type="text" 
            name="website"
            onChange={this.handleChange}
            value = {attributes.website}
          />
        </FormGroup>
        <FormGroup>
          <Label for="street_1">Street Address</Label>
          <Input 
            type="text" 
            name="street_1"
            onChange={this.handleChange}
            value = {attributes.street_1}
          />
        </FormGroup>
        <FormGroup>
          <Label for="street_2">Building or Suite Number</Label>
          <Input 
            type="text" 
            name="street_2"
            onChange={this.handleChange}
            value = {attributes.street_2}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city">City</Label>
          <Input 
            type="text" 
            name="city" 
            onChange={this.handleChange}
            value = {attributes.city}
          />
        </FormGroup>
        <FormGroup>
          <Label for="state">State</Label>
          <Input 
            type="text" 
            name="state" 
            onChange={this.handleChange}
            value = {attributes.state}
          />
        </FormGroup>
        <FormGroup>
          <Label for="zip">Zip Code</Label>
          <Input 
            type="text" 
            name="zip" 
            onChange={this.handleChange}
            value = {attributes.zip}
          />
        </FormGroup>
        <FormGroup>
          <Label for="hours_of_operation">Hours of Operation</Label>
          <Input 
            type="text" 
            name="hours_of_operation" 
            onChange={this.handleChange}
            value = {attributes.hours_of_operation}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pet_friendly">Pet Friendly</Label>
          <Input 
            type="select" 
            name="pet_friendly" 
            onChange={this.handleChange}
            value = {attributes.pet_friendly}
          >
            <option>True</option>
            <option>False</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="wifi">Wifi Available</Label>
          <Input 
            type="select" 
            name="wifi" 
            onChange={this.handleChange}
            value = {attributes.wifi}
          >
            <option>True</option>
            <option>False</option>
          </Input>
        </FormGroup>

        <Button onClick={this.newEstablishment}> Save</Button>
        <Link to='/establishments' className='btn btn-warning'> Cancel</Link>
      </React.Fragment>
    );
  }
}

export default NewEstablishment
