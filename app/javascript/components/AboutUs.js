import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col, Image } from 'react-bootstrap';

class AboutUs extends React.Component {
    render () {
      return (
        <div>
          <h1>About Us</h1>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src="Joel Magalin.jpg" rounded />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="holder.js/171x180" thumbnail />
                </Col>
              </Row>
            </Container>
        </div>
      )
    }
}
export default AboutUs;
