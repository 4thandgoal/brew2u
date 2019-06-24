import * as React from 'react';
import { Gallery, GalleryImage } from 'react-gesture-gallery';
import ReactDOM from "react-dom";

const images1 = ['https://codecopycoffee.com/wp-content/uploads/2019/05/helloquence-unsplash.jpg',
      'https://codecopycoffee.com/wp-content/uploads/2019/04/imgix.jpg',
      'https://codecopycoffee.com/wp-content/uploads/2019/04/jamie-street.jpg'];
      
const images2 = ['https://codecopycoffee.com/wp-content/uploads/2019/05/helloquence-unsplash.jpg',
      'https://codecopycoffee.com/wp-content/uploads/2019/04/imgix.jpg',
      'https://codecopycoffee.com/wp-content/uploads/2019/04/jamie-street.jpg'];      


function Landing() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 2) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 4000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <React.Fragment>
    
      <h1>Brew2U</h1>
      <h2>Find independent coffeeshops and breweries in your area</h2>
    
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
      >
        
        {images1.map(image => (
          <GalleryImage objectFit="contain" key={image} src={image} />
        ))}
        
      </Gallery>
    
      <div className="divider"></div>
    
      <Gallery
        index={index}
        onRequestChange={i => {
          setIndex(i);
        }}
    >
      
      {images2.map(image => (
        <GalleryImage objectFit="contain" key={image} src={image} />
      ))}
      
    </Gallery>
    
    </React.Fragment>
  );
}

export default Landing;

