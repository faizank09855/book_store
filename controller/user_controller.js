const express = require('express');
const path = require('path'); 

exports.controller = (req , res) => {

    res.sendFile(path.join(__dirname , ".." , "view" , "user-page.html")); 
    
    }