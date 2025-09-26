import React from 'react'

const Registerform = () => {


  const handleSubmit= (e)=>{

    e.preveDefault();



   const email= document.getElementById('email');
   const password = document.getElementById('password');
   const username = document.getElementById('username');

  };

  return (
    <div>
        <form onSubmit={handleSubmit} method="POST">

            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required />

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Registerform