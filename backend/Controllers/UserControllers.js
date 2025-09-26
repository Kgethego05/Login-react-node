const express = require('express');

const UserLogin = (req,res) =>{

    const { email, password} = req.body;

    if(email === '123@gmail.com' && password=== 'root'){
        res.status(200).json({message: 'Successful login'});
    }else{
        res.status(401).json({message:'Invalid login details'});
    }

};

module.exports = {UserLogin};