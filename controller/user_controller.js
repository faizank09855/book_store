const express = require('express');
const path = require('path'); 

exports.controller = (req , res) => {


    res.render('user-page' , {
userName : "faizan" , 
isActive : true , 
pageTitle : "User Page" , 
bookName : "Book Name" ,
category : "Category" ,
artist : "Artist" , 


    }) ; 
    // res.sendFile(path.join(__dirname , ".." , "view" , "user-page.html")); 

    }