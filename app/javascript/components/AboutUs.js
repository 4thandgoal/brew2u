import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from 'react-bootstrap';
import Matt from "./mattAu.jpg" 
import Mike from "./mikeAcio.jpg"
import Joel from "./joelMagsalin.jpg"
import Gina from "./ginaVerrastro.jpg"
import Sunil from "./sunilK.jpg"
import Hulk from "./hulk.jpg"
import IronMan from "./ironMan.jpeg"
import BlackWidow from "./blackWidow.jpg"
import CaptainAmerica from "./captainAmerica.jpg"
import Thor from "./thor.jpg"
// added pictures to Components folder instead of routing as images to html.erb file - brute force

class AboutUs extends React.Component {
    
    render () {
      return (
        <div>
          <h1>About Us</h1>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <div className="avengerFix">
                    <img id="matt" src={Matt} height="200 px" width="200 px" style={{'borderRadius':'5px'}} />
                    <img id="captainamerica" src={CaptainAmerica} />
                  </div>
                  <h5>Matt Au</h5>
                  <p>After a top secret Super-Soldier program transformed frail Steve Rogers (Matt Au) into the powerful and heroic Captain America, his amazing WWII exploits made him a living legend. Steve saved New York City and turned the tide of the war, but crashed into the Arctic during his final mission. Awakening in the modern day, Steve learned that he had spent decades frozen in the icy tundra. Now, Steve Rogers finds himself alone in a modern world that he hardly recognizes. When Nick Fury, director of the international peacekeeping agency S.H.I.E.L.D.</p>
                </Col>
                <Col xs={6} md={4}>
                  <div className="avengerFix">
                    <img id="joel" src={Joel} height="200 px" width="200 px" style={{'borderRadius':'5px'}} />
                    <img id="ironman" src={IronMan} />
                  </div>
                  <h5>Joel Magsalin</h5>
                  <p>On top of being an eccentric genius, a billionaire, a playboy and a philanthropist, Tony Stark (Joel Magsalin) is also the armored super hero known as Iron Man. Fresh off of defeating enemies the world over, Stark reluctantly agreed to serve as a consultant to Nick Fury’s top-secret peacekeeping and intelligence agency known as S.H.I.E.L.D. Now, with a global crisis on the horizon and the fate of the world in the balance, Stark must again power up his Iron Man armor to save the world, and become a full-fledged member of The Avengers. </p>
                </Col>
                <Col xs={6} md={4}>
                  <div className="avengerFix">
                    <img id="gina" src={Gina} height="200 px" width="200 px" style={{'borderRadius':'5px'}} />
                    <img id="blackwidow" src={BlackWidow} />
                  </div>
                  <h5>Gina Verrastro</h5>
                  <p>S.H.I.E.L.D. Agent Natasha Romanoff, aka Black Widow (Gina Verrastro), is one of the world’s greatest spies and quite possibly the world’s most skilled assassin. Armed with an extensive arsenal of specialized weapons like widow stings and cluster bombs, as well as a vast repertoire of martial arts skills, Romanoff’s unique talents make her one of director Fury’s top agents and an integral part in assembling The Avengers. </p>
                </Col>
                <Col xs={6} md={4}>
                  <div className="avengerFix">
                    <img id="mike" src={Mike} height="200 px" width="200 px" style={{'borderRadius':'5px'}} />
                    <img id="hulk" src={Hulk} />
                  </div>
                  <h5>Mike Acio</h5>
                  <p>After a gamma radiation experiment went awry, mild-mannered scientist Dr. Bruce Banner (Mike Acio) found himself with a peculiar condition. When angered or provoked, he would transform into the uncontrollable, green-skinned monster known as the Hulk. Now, fearful of the damage that the Hulk could inflict, Dr. Banner chooses to live a discreet life in remote parts of the world, working to cure the sick and help the poor while trying to elude those who would take advantage of his ability to change into the enormous, green menace. When a mounting threat calls for Banner’s specialized scientific expertise, S.H.I.E.L.D. Director Nick Fury recruits him, knowing full well that the incredible strength of Banner’s alter ego, the Hulk, would be an asset to The Avengers.</p>
                </Col>
                <Col xs={6} md={4}>
                  <div className="avengerFix">
                    <img id="sunil" src={Sunil} height="200 px" width="200 px" style={{'borderRadius':'5px'}} />
                    <img id="thor" src={Thor} />
                  </div>
                  <h5>Sunil Karakkattilrajappan</h5>
                  <p>An arrogant prince from the distant land of Asgard, Thor (Sunil Karakkattilrajappan) was banished to Earth after his irresponsible behavior threatened his homeland. While in exile on Earth, Thor learned humility and helped to save his new friends from a destructive threat sent by his brother Loki. In the process, Thor redeemed himself in the eyes of his father, Odin, the King of Asgard. After being welcomed back to Asgard as a hero, Thor must now return to Earth once again to prevent a cosmic-level catastrophe. With Mjolnir in his hand, a legendary hammer with immense power, the mighty warrior soon finds himself drawn into an unlikely alliance with Nick Fury’s secret initiative, The Avengers, lending his power to their cause against his wayward brother, Loki. </p>
                </Col>
              </Row>
            </Container>
        </div>
      )
    }
}
export default AboutUs;
