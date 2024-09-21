import React, { useEffect, useState } from 'react'

const images = [
  'https://www.banamashkaot.co.il/images/itempics/Page_Thumb_560.jpg?08022024103745',
  'https://www.banamashkaot.co.il/images/itempics/Page_Thumb_499.jpg?03092023153324',
  'https://www.banamashkaot.co.il/images/itempics/Page_Thumb_626.jpg?17062024115719'
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