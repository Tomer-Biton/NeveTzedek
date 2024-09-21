import React, { useEffect, useState } from 'react'

const images = [
  'https://lh3.googleusercontent.com/p/AF1QipNznFZtAIjrEfBq8gZrBfdOn707rEQf7jq4sIaF=s1360-w1360-h1020',
  'https://lh3.googleusercontent.com/p/AF1QipPllfc6r3u6WwSzy9zMCfr5gVAeu1PNiZcx0cvH=s1360-w1360-h1020',
  'https://scontent.ftlv1-1.fna.fbcdn.net/v/t1.6435-9/31064359_1073845186088272_1443930256447635456_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=tyzcsDKA6oUQ7kNvgEGO7xE&_nc_ht=scontent.ftlv1-1.fna&oh=00_AYCratmQHaAPiytIwSFwYok9M2QdaTCPeIhbE8qjgbCwjA&oe=67161F5B'
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