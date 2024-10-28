import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import LoginSignup from './component/Navbar/LoginSignup/LoginSignup';
import Buttons from './component/Body/Buttons';
import Page from './component/Body/Page';
import Payment from './component/Body/Payment';
import DetailPage from './component/Body/DetailPage';
import Footer from './component/Footer/Footer';
import PaymentPage from './component/Body/PaymentPage';
import ImageSlider from './component/Body/ImageSlider';
import './App.css';

const App = () => {


  const [showLoginSignup, setShowLoginSignup] = useState(false);
  const [userType, setUserType] = useState('');


  const handleButtonClick = useCallback((type) => {
    setUserType(type);
    setShowLoginSignup(true);
  }, []);


  const handleCloseModal = useCallback(() => {
    setShowLoginSignup(false);
    setUserType('');
  }, []);


  return (
    <Router>
      <div className="App">
        < Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Buttons onButtonClick={handleButtonClick} />
                <ImageSlider />
                <Page />
                <Payment />
                <Footer />
              </>
            }
          />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/paymentPage" element={<PaymentPage />} />

        </Routes>

        {showLoginSignup && (
          <LoginSignup closeModal={handleCloseModal} userType={userType} />
        )}
      </div>
    </Router>
  );
};

export default App;
