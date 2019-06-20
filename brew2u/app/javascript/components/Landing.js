import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const coffeepics = [
  {
    src: '#',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: '#',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: '#',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const beerpics = [
  {
    src: '#',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: '#',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: '#',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

class Sliders extends Component {
    constructor(props) {
    super(props)
    this.state = {
        activeIndex: 0
    }
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
    const nextIndex = this.state.activeIndex === coffeepics.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? coffeepics.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }
  
  render() {
      const { activeIndex } = this.state;
      const coffeeslides = coffeepics.map((pic) => {
        return (
            <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={pic.src}
            >
            <img src={pic.src} alt={pic.altText} />
            <CarouselCaption captionText={pic.caption} captionHeader={pic.caption} />
            </CarouselItem>
        );
    });
    const beerslides = beerpics.map((pic) => {
        return (
            <CarouselItem
                onExiting={this.onExiting}
                onExited={this.onExited}
                key={pic.src}
            >
            <img src={pic.src} alt={pic.altText} />
            <CarouselCaption captionText={pic.caption} captionHeader={pic.caption} />
            </CarouselItem>
        );
    });
      return (
          <React.Fragment>
            <h1 className="headline">Brew2U</h1>
            
            <h2 className="subheadline">Find local independent coffeeshops and breweries in your area</h2>
            
            <Carousel className="coffeeCarousel"
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
            >
                <CarouselIndicators items={coffeepics} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {coffeepics}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
            
            <Carousel className="beerCarousel"
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
            >
                <CarouselIndicators items={beerpics} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {beerpics}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
          </React.Fragment>
      );
  }
}