import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic here
    // Assuming login is successful
    navigate('/quotes');
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="OTP" 
          value={otp} 
          onChange={(e) => setOtp(e.target.value)} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LoginPage;
