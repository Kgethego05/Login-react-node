import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthoContext';

const Logout = () => {

   const { logout} = useAuth();
   const navigate = useNavigate();
   
  const handleSubmit= (e) =>{

    logout();
    navigate('/');

  };

  return (
    <div>
        <h1>Logout Page</h1>


        <form action={handleSubmit} method="POST">

          <label htmlFor='logout'>Click button to log out</label>
          <button type='submit' value='LOGOUT'>Logout</button>
        </form>
    </div>
  )
}

export default Logout