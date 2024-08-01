import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from '../Components/QuoteCard';
import FloatingActionButton from '../Components/FloatingActionButton';
import { useNavigate } from 'react-router-dom';

const QuoteListPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await axios.get(`/api/quotes?page=${page}`);
      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        setQuotes((prevQuotes) => [...prevQuotes, ...response.data]);
      }
    };

    fetchQuotes();
  }, [page]);

  const loadMoreQuotes = () => {
    if (hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="quote-list-page">
      <h2>Quotes</h2>
      <div className="quote-list">
        {quotes.map((quote) => (
          <QuoteCard key={quote.id} quote={quote} />
        ))}
      </div>
      {hasMore && <button onClick={loadMoreQuotes}>Load More</button>}
      <FloatingActionButton onClick={() => navigate('/create-quote')} />
    </div>
  );
};

export default QuoteListPage;
