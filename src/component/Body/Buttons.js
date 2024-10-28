import React from 'react';
import './Buttons.css';

const Buttons = ({ onButtonClick }) => {

  const handleButtonClick = (userType) => {
    onButtonClick(userType);
  };

  return (
    <div className="buttons-container">
      <button className='buttons' onClick={() => handleButtonClick('customers')}>Customers</button>
      <button className='buttons' onClick={() => handleButtonClick('sellers')}>Sellers</button>
      <button className='buttons' onClick={() => handleButtonClick('experts')}>Experts</button>
    </div>
  );
};

export default Buttons;

