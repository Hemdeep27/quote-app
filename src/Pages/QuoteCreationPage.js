// src/Pages/QuoteCreationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createQuote, uploadMedia } from '../Services/api';

const QuoteCreationPage = () => {
  const [text, setText] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const mediaData = await uploadMedia(file);
      console.log("mediaData", mediaData)
      await createQuote(text, mediaData[0].url);
      navigate('/quotes');
    } catch (error) {
      console.error('Failed to create quote', error);
      // Handle error
    }
  };

  return (
    <div className="quote-creation-page">
      <h2>Create Quote</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Quote text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />
        <button type="submit">Create Quote</button>
      </form>
    </div>
  );
};

export default QuoteCreationPage;
