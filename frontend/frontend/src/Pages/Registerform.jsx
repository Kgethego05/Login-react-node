import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Registerform = () => {

  const navigate = useNavigate();

   const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit= async (e)=>{

    e.preventDefault();
    
    const response =await fetch('https://login-react-node-1-k25g.onrender.com/api/register',{
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({name,email,password}),
    });

    const data= await response.json();

    console.log(data.message);

    navigate('/login');
    

  };

  return (
    <div>
        <form onSubmit={handleSubmit} method="POST">

            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Registerform
