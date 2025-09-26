import React from 'react'
import { useAuth } from '../AuthoContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Loginform = () => {

 const { login} = useAuth();
 const navigate = useNavigate();
 const [ error, setError ] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

   

    const email= document.getElementById('email').value;
    const password= document.getElementById('password').value;

    if(email == '123@gmail.com' && password=='root'){

        login();

        navigate('/Users');

  }else{

    setError('Invalid Login details');
  }


    

  };
  return (
    <div>
        <form onSubmit={handleSubmit} method="POST">

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <input type="submit" value="Login" />
        </form>
    </div>
  )
}

export default Loginform