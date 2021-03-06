import React from "react"
import PropTypes from "prop-types"
import MapContainer from "./MapContainer"
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
    src: 'http://www.mikkellersd.com/wp-content/uploads/mikkeller-10.jpg',
    altText: '#',
    caption: ""
  },
  {
    src: 'https://cdn.shopify.com/s/files/1/1566/6489/t/6/assets/steadystate_inside_1200x.jpg?1374',
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
    const { componentDidMount, match } = this.props
    if (match.params.id != prevMatch.params.id) {
      this.setState({ shopId: match.params.id })
    }
    componentDidMount()
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
  
  allReviews = () => {
    const { shopId } = this.state
    const { reviews } = this.props 
    return reviews.map(review => {
      if (review.establishment_id == shopId)
        return (
          <div key={review.id} id="singleReview">
            <h3>{review.rating}</h3>
            <p>{review.review}</p>
          </div>
        )
    })
  }
  
  render () {
    const { shopId } = this.state
    const { establishments, reviews, userLoggedIn } = this.props
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
    const checkForReviews = []
    reviews.map(review => {
      if (review.establishment_id == shopId) {
        checkForReviews.push(review)
      }
    })
    return (
      <React.Fragment>
        {shop &&  
          <div>
            {userLoggedIn &&
              <div className="reviewLinkWrap"><Link to={`/newreview/${shop.id}`} id="reviewLink">Write a Review</Link></div>
            }

            <h2 className="shopName">{shop.company_name}</h2>
            <h3 className="shopRating">Average Rating: {shop.average_rating}</h3>
            
            <div className="flexContainer">
            
              <div className="carouselWrap">
               <div className="carouselItem">
                <Carousel id="singleCarousel"
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
                >
                  {slides}
                  <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                </Carousel>
               </div>
              </div>
            
              <div className="detailsWrap">
                <h4 className="shopWebsite"><a href={`${shop.website}`} target="_blank">{shop.website}</a></h4>
                <h4 className="shopPhone">{shop.phone}</h4>
                <h5 className="shopAddress">{shop.street_1}</h5>
                <h5 className="shopAddress">{shop.street_2}</h5>
                <h5 className="shopAddress">{`${shop.city}, ${shop.state} ${shop.zip}`}</h5>
                <p className="shopDetails">Business Hours: {shop.hours_of_operation}</p>
              </div>

              <div>
                 <MapContainer
                  name={shop.company_name}
                  latitude={shop.latitude}
                  longitude={shop.longitude}
                  rating={shop.average_rating}
                />
              </div>  
        
            </div>
            
            <div>
                <h4 className="reviewHeading">Reviews</h4>
                {checkForReviews.length > 0 &&
                  <div id="reviewsContainer">
                    { this.allReviews() }
                  </div>
                }
                {checkForReviews.length == 0 &&
                  <div>
                    <h6 className="reviewText">Be the first to leave a Review!</h6>
                  </div>
                }
            </div>
            
          </div>
        }
      </React.Fragment>
    );
  }
}

export default SingleShop