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
    src: 'https://codecopycoffee.com/wp-content/uploads/2019/06/coffee3.jpg',
    altText: 'Group of mugs containing different types of coffee',
  },
  {
    src: 'https://codecopycoffee.com/wp-content/uploads/2019/06/beer3.jpg',
    altText: 'Beer being poured from a tap',
  },
  {
    src: 'https://codecopycoffee.com/wp-content/uploads/2019/06/coffee2.jpg',
    altText: 'A mug of coffee seen from above atpo a heart-shaped pile of coffee beans',
  },
  {
    src: 'https://codecopycoffee.com/wp-content/uploads/2019/06/beer2.jpg',
    altText: 'A flight of different types of beer',
  },
  {
    src: 'http://codecopycoffee.com/wp-content/uploads/2019/06/coffee1.jpg',
    altText: 'A steaming mug of coffee on a pile of coffee beans',
  },
  {
    src: 'https://codecopycoffee.com/wp-content/uploads/2019/06/beer1.jpg',
    altText: 'Two hands extending to cheers bottles of beer with a sunset in the background',
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








