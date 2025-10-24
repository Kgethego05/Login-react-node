import React, { useState } from 'react';
import { useAuth } from '../AuthoContext';
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); 

    try {
      const response = await fetch('https://login-react-node-1-k25g.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        login(); 
        navigate('/Users'); 
      } else {
        setError(data.message || 'Invalid login details');
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('Network error. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Loginform;
