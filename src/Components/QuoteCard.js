// src/components/QuoteCard.js
import React from 'react';
import '../QuoteCard.css'; // Assuming you have separate CSS for the quote card

const QuoteCard = ({ quote }) => {
  return (
    <div className="quote-card">
      <img src={quote.mediaUrl} alt="Quote Media" />
      <div className="quote-card-content">
        <p className="quote-card-text">{quote.text}</p>
        <div className="quote-card-footer">
          <span>{quote.username}</span>
          <span>{new Date(quote.updatedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
