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
        pet_friendly: true,
        wifi: true
      },
      success: false
    }
    this.state = this.initialState
  }
  
  
  handleChange = (event)=>{
    const { attributes } = this.state  
    attributes[event.target.name] = event.target.value
    this.setState({ attributes })
  }
  
  handleNewEstablishment = () => {
    const { success } = this.state
    const { handleNewEstablishment } = this.props
    handleNewEstablishment(this.state.attributes)
    let redirect = success === false ? true : false
    this.setState({ success: redirect })
  }
  
    render () {
    const{ success, attributes } = this.state
    return (
      <React.Fragment>
        <h1>New Establishment</h1>
        <FormGroup>
          <Label for="company_name" className="formLabel">Company Name</Label>
          <Input
            id="formInput1"
            type="text" 
            name="company_name"
            onChange={this.handleChange}
            value = {attributes.company_name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="coffee_or_beer" className="formLabel">Coffee or Beer</Label>
          <Input
            id="formInput2"
            type="select" 
            name="coffee_or_beer"
            onChange={this.handleChange}
            value = {attributes.coffee_or_beer}
          >
            <option></option>
            <option>Coffee</option>
            <option>Beer</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="phone" className="formLabel">Phone Number</Label>
          <Input
            id="formInput3"
            type="text" 
            name="phone"
            onChange={this.handleChange}
            value = {attributes.phone}
          />
        </FormGroup>
        <FormGroup>
          <Label for="website" className="formLabel">Website</Label>
          <Input
            id="formInput4"
            type="text" 
            name="website"
            onChange={this.handleChange}
            value = {attributes.website}
          />
        </FormGroup>
        <FormGroup>
          <Label for="street_1" className="formLabel">Street Address</Label>
          <Input
            id="formInput5"
            type="text" 
            name="street_1"
            onChange={this.handleChange}
            value = {attributes.street_1}
          />
        </FormGroup>
        <FormGroup>
          <Label for="street_2" className="formLabel">Building or Suite Number</Label>
          <Input 
            id="formInput6"
            type="text" 
            name="street_2"
            onChange={this.handleChange}
            value = {attributes.street_2}
          />
        </FormGroup>
        <FormGroup>
          <Label for="city" className="formLabel">City</Label>
          <Input 
            id="formInput7"
            type="text" 
            name="city" 
            onChange={this.handleChange}
            value = {attributes.city}
          />
        </FormGroup>
        <FormGroup>
          <Label for="state" className="formLabel">State</Label>
          <Input 
            id="formInput8"
            type="text" 
            name="state" 
            onChange={this.handleChange}
            value = {attributes.state}
          />
        </FormGroup>
        <FormGroup>
          <Label for="zip" className="formLabel">Zip Code</Label>
          <Input 
            id="formInput9"
            type="text" 
            name="zip" 
            onChange={this.handleChange}
            value = {attributes.zip}
          />
        </FormGroup>
        <FormGroup>
          <Label for="hours_of_operation" className="formLabel">Hours of Operation</Label>
          <Input 
            id="formInput10"
            type="text" 
            name="hours_of_operation" 
            onChange={this.handleChange}
            value = {attributes.hours_of_operation}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pet_friendly" className="formLabel">Pet Friendly</Label>
          <Input 
            id="formInput11"
            type="select" 
            name="pet_friendly" 
            onChange={this.handleChange}
            value = {attributes.pet_friendly}
          >
            <option></option>
            <option>true</option>
            <option>false</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="wifi" className="formLabel">Wifi Available</Label>
          <Input 
            id="formInput12"
            type="select" 
            name="wifi" 
            onChange={this.handleChange}
            value = {attributes.wifi}
          >
            <option></option>
            <option>true</option>
            <option>false</option>
          </Input>
        </FormGroup>
        
        <div className="buttonContainer">
          <div className="estBtnWrap"><Button onClick={this.handleNewEstablishment} id="newEstBtn">Save</Button></div>
          <div className="cancelBtnWrap"><Link to='/establishments' id="cancelBtn">Cancel</Link></div>
        </div>

        {success &&
          <Redirect to="/" />
        }
      </React.Fragment>
    );
  }
}

export default NewEstablishment;
