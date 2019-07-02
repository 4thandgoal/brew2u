import React from "react"
import PropTypes from "prop-types"
import MapContainer from "./MapContainer"
import ShopReviews from './ShopReviews'
import { Link } from 'react-router-dom';
import { 
  NavItem, 
  NavLink, 
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://codecopycoffee.com/wp-content/uploads/2019/04/philly.png',
    altText: '#',
    caption: ""
  },
  {
    src: 'https://codecopycoffee.com/wp-content/uploads/2019/04/coffee.png',
    altText: '#',
    caption: ""
  }
  ]

class SingleShop extends React.Component {
  constructor(props){
    super(props)
    const { match } = this.props
    this.state = {
      shopId: match.params.id,
      reviews: [],
      activeIndex: 0
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }
  
  componentDidUpdate = prevProps => {
    const prevMatch = prevProps.match
    const { match } = this.props
    if (match.params.id != prevMatch.params.id) {
      this.setState({ shopId: match.params.id })
    }
  }
  
  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  
  render () {
    const { shopId } = this.state
    const { establishments } = this.props
    const shop = establishments.find(shop => shop.id == shopId)
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });
    return (
      <React.Fragment>
        {shop && 
          <div>
            <Link to={`/newreview/${shop.id}`} id="reviewLink">Write a Review</Link>
            <h2 className="shopName">{shop.company_name}</h2>
            <h3 className="shopRating">Average Rating: {shop.average_rating}</h3>
            
            <div className="flexContainer">
            
              <div className="carouselWrap">
                <Carousel id="singleCarousel"
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                {slides}
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                </Carousel>
              </div>
            
              <div className="detailsWrap">
                <h4 className="shopWebsite"><a href="{shop.website}" target="_blank">{shop.website}</a></h4>
                <h4 className="shopPhone">{shop.phone}</h4>
                <h5 className="shopAddress">{shop.street_1}</h5>
                <h5 className="shopAddress">{shop.street_2}</h5>
                <h5 className="shopAddress">{shop.city}</h5>
                <h5 className="shopAddress">{shop.state}</h5>
                <h5 className="shopAddress">{shop.zip}</h5>
                <p className="shopDetails">Business Hours: {shop.hours_of_operation}</p>
                <p className="shopDetails">Pet-Friendly? {shop.pet_friendly}</p>
                <p className="shopDetails">Wifi? {shop.wifi}</p>
              </div>
              
              <div className="mapWrap">
                 <MapContainer
                  name={shop.company_name}
                  latitude={shop.latitude}
                  longitude={shop.longitude}
                  rating={shop.rating}
                />
              </div>  
             
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default SingleShop