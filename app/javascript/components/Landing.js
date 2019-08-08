import React, { Component} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


const items = [
  {
    src: 'https://cdn.pixabay.com/photo/2017/06/04/11/00/beer-2370783_1280.jpg',
    altText: 'A flight of beers',
    caption: ""
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/11/19/17/17/beverage-1840426_1280.jpg',
    altText: 'Busy barista',
    caption: ""
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/08/28/13/30/beer-2689537_1280.jpg',
    altText: 'Excellent pour',
    caption: ""
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/02/19/11/40/coffee-shop-1209863_1280.jpg',
    altText: 'Ready for the morning rush',
    caption: ""
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/10/04/05/21/bar-1713610_1280.jpg',
    altText: 'Ready for business',
    caption: ""
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/08/06/11/25/coffee-2591514_1280.jpg',
    altText: 'Coffee with waffles',
    caption: ""
  }
];

class Landing extends Component {
    constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
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

render() {
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
    <div>
    
      <h1>Brew2U</h1>
      <h2>Find independent coffeeshops and breweries in your area</h2>
    
      <Carousel id="carousel"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    </div>
  );
}
}

export default Landing;








