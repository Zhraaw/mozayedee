
import React from 'react';
import { useParams } from 'react-router-dom';
import DutchAuction from './DutchAuction';
import EnglishAuction from './EnglishAuction';
import './DetailPage.css';

const DetailPage = () => {
  const { id } = useParams();

  return (
    <div className="detail-page">
      {id === '1' && <DutchAuction />}
      {id === '2' && <EnglishAuction />}
    </div>
  );
};

export default DetailPage;
