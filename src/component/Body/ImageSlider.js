import React, { useState } from 'react';
import './ImageSlider.css'; 
import photo001 from '../../component/assets/photo001.png.jpg';
import photo002 from '../../component/assets/photo002.png.jpg';
import photo003 from '../../component/assets/photo003.png.jpg';

const ImageSlider = () => {
  const images = [photo001, photo002, photo003];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img src={images[currentIndex]}  />
      </div>
      <div className="slider-buttons">
        <span className="prev" onClick={prevSlide}>&lt;</span>
        <span className="next" onClick={nextSlide}>&gt;</span>
      </div>
    </div>
  );
};

export default ImageSlider;
