// src/Pages/QuoteListPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getQuotes } from '../Services/api';
import FloatingActionButton from '../components/FloatingActionButton';
import QuoteCard from '../components/QuoteCard';
import '../QuoteListPage.css'; // Import the CSS file

const QuoteListPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const limit = 9; // Number of quotes to fetch per request

  const fetchQuotes = async () => {
    if (loading || !hasMore) return; // Prevent multiple calls
    setLoading(true);
    try {
      const response = await getQuotes(limit, offset);
      const data = response.data
      console.log('Quotes data:', data); // Log the data to verify its structure

      if (Array.isArray(data)) {
        if (data.length < limit) {
          setHasMore(false); // No more quotes to fetch
        }
        setQuotes((prevQuotes) => [...prevQuotes, ...data]);
        setOffset((prevOffset) => prevOffset + limit);
      } else {
        console.error('Data is not an array', data);
        setHasMore(false); // Stop pagination if data is not as expected
      }
    } catch (error) {
      console.error('Failed to fetch quotes', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  return (
    <div className="quote-list-page">
      <h2>Quotes</h2>
      <button onClick={handleLogout} className="logout-button">Logout</button>
      <div className="quote-grid">
        {quotes.length > 0 ? (
          quotes.map((quote) => (
            <QuoteCard key={quote.id} quote={quote} />
          ))
        ) : (
          <p>No quotes available.</p>
        )}
      </div>
      {hasMore && (
        <button onClick={fetchQuotes} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
      <FloatingActionButton onClick={() => navigate('/create-quote')} />
    </div>
  );
};

export default QuoteListPage;
