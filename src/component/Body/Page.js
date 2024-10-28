import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page.css';


const Page = () => {

  const navigate = useNavigate();


  const handleSeeMore = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="pages-container">
      <div className="page">
        <div className="parent">
          <div className="card">
            <div className="content-box">
              <span className="card-title">Dutch auction</span>
              <p className="card-content">
                Dutch auction
              </p>
              <span className="see-more" onClick={() => handleSeeMore(1)}>See More</span>
            </div>
            <div className="date-box">
              <span className="month">JUNE</span>
              <span className="date">29</span>
            </div>
          </div>
        </div>
      </div>
      <div className="page">
        <div className="parent">
          <div className="card">
            <div className="content-box">
              <span className="card-title">English auction</span>
              <p className="card-content">
                English auction
              </p>
              <span className="see-more" onClick={() => handleSeeMore(2)}>See More</span>
            </div>
            <div className="date-box">
              <span className="month">JUNE</span>
              <span className="date">30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
