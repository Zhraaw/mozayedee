import React, { useState, useEffect } from 'react';
import './DutchAuction.css';
import photo1 from '../../component/assets/photo1.png.jpg';
import photo2 from '../../component/assets/photo2.png.jpg';
import photo3 from '../../component/assets/photo3.png.jpg';
import photo4 from '../../component/assets/photo4.png.jpg';
import photo5 from '../../component/assets/photo5.png.jpg';
import photo6 from '../../component/assets/photo6.png.jpg';

const DutchAuction = () => {
  const images = [photo1, photo3, photo2, photo4, photo6, photo5];
  const [price, setPrice] = useState(10000);
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let priceInterval = null;

    if (isCounting && price > 0) {
      priceInterval = setInterval(() => {
        setPrice(prevPrice => Math.max(prevPrice - 50, 0));
      }, 1000);
    } else if (price <= 0) {
      setIsCounting(false);
    }

    return () => clearInterval(priceInterval);
  }, [isCounting, price]);

  const stopPriceDecrease = () => {
    setIsCounting(false);
  };

  return (
    <div className="auction-container">
      <div className="clock-container">
        <div className="cloader">
          <div className="clface">
            <div className="clsface">
              <div id="h2" className="hand"></div>
            </div>
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="left"></div>
            <div className="right"></div>
            <div id="sub" className="pin"></div>
            <div id="h1" className="hand"></div>
            <div id="main" className="pin"></div>
          </div>
        </div>
      </div>

      <div className="auction-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            <img src={image} />
          </div>
        ))}
      </div>

      <div className="price-display">
        <h2>Current price: {price}$</h2>
        <button onClick={stopPriceDecrease} disabled={!isCounting}>
          I'm a buyer
        </button>
      </div>
    </div>
  );
};

export default DutchAuction;
