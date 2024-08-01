import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const QuoteCreationPage = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    console.log(image)
    const response = await axios.post('/api/upload', formData);
    return response.data.mediaUrl;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mediaUrl = await handleImageUpload();
    await axios.post('/api/quotes', { text, mediaUrl });
    navigate('/quotes');
  };

  return (
    <div className="quote-creation-page">
      <h2>Create Quote</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          placeholder="Quote text" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
        <input 
          type="file" 
          onChange={(e) => setImage(e.target.files[0])} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuoteCreationPage;
