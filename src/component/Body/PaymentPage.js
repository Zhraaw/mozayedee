import React from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  
  return (
    <section className="add-card page">
      <form className="form">
        <label htmlFor="name" className="label">
          <span className="title">Card holder full name</span>
          <input
            className="input-field"
            type="text"
            name="input-name"
            title="Input title"
            placeholder="Enter your full name"
          />
        </label>
        <label htmlFor="serialCardNumber" className="label">
          <span className="title">Card Number</span>
          <input
            id="serialCardNumber"
            className="input-field"
            type="text"  
            inputMode="numeric"  
            pattern="\d*"  
            name="input-name"
            title="Input title"
            placeholder="0000 0000 0000 0000"
          />
        </label>
        <div className="split">
          <label htmlFor="ExDate" className="label">
            <span className="title">Expiry Date</span>
            <input
              id="ExDate"
              className="input-field"
              type="text"
              name="input-name"
              title="Expiry Date"
              placeholder="01/23"
            />
          </label>
          <label htmlFor="cvv" className="label">
            <span className="title">CVV</span>
            <input
              id="cvv"
              className="input-field"
              type="text" 
              inputMode="numeric" 
              pattern="\d*"  
              name="cvv"
              title="CVV"
              placeholder="CVV"
            />
          </label>
        </div>
        <input className="checkout-btn" type="button" value="Checkout" />
      </form>
    </section>
  );
};

export default PaymentPage;

