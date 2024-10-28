import React, { useState } from 'react';
import './EnglishAuction.css';
import photo01 from '../../component/assets/photo01.png.jpg';
import photo02 from '../../component/assets/photo02.png.jpg';
import photo03 from '../../component/assets/photo03.png.jpg';
import photo04 from '../../component/assets/photo04.png.jpg';
import photo05 from '../../component/assets/photo05.png.jpg';
import photo06 from '../../component/assets/photo06.png.jpg';

const EnglishAuction = () => {

  const images = [photo01, photo03, photo02, photo04, photo06, photo05];
  const [prices, setPrices] = useState({});

  const handleBidPriceChange = (index, value) => {
    setPrices((prevPrices) => ({
      ...prevPrices,
      [index]: value,
    }));
  };

  return (
    <div className="auction-container">
      <div className="auction-header">
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
            <div className="price-inputs">
              <input
                type="text"
                className="bid-price"
                value={prices[index] || ''}
                onChange={(e) => handleBidPriceChange(index, e.target.value)}
                placeholder="Enter bid price"
              />
              <div className="lcd-display">{prices[index] || ''}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnglishAuction;
