import React from 'react';

const QuoteCard = ({ quote }) => {
  return (
    <div className="quote-card">
      <div className="quote-image">
        <img src={quote.mediaUrl} alt="Quote" />
        <div className="quote-text-overlay">{quote.text}</div>
      </div>
      <div className="quote-details">
        <span>{quote.username}</span>
        <span>{quote.created_at}</span>
      </div>
    </div>
  );
};

export default QuoteCard;
