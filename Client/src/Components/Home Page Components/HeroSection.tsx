import React, { useEffect, useState } from 'react'
import '../../FrontendAssets/Images/product1img.jpg'
import '../../FrontendAssets/Images/product3img.jpg'
import '../../FrontendAssets/Images/product4img.jpg'

const images = [
  '../../FrontendAssets/images/product1img.jpg',
  '../../FrontendAssets/images/product3img.jpg',
  '../../FrontendAssets/images/product4img.jpg',
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length)
  }

  const handleMarkerClick = (index: number) => {
    setCurrentImage(index);
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="HeroSection"
      style={{ backgroundImage: `url(${images[currentImage]})` }}>
      <div className="ControlMarkers">
        {images.map((_, index) => (
          <div
            key={index}
            className='ControlMarker'
            onClick={() => handleMarkerClick(index)}
            style={{
              backgroundColor: index === currentImage ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.4)',
              transition: 'background-color 0.5s',
              cursor: 'pointer',
              width: '15px',
              height: '15px',
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default HeroSection;