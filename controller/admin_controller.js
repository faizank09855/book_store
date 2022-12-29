const express = require('express') ;
const path = require('path'); 

exports.adminController = (req , res)=>{
    res.sendFile(path.join(__dirname , '..' , 'view' , 'admin-page.html')); 
    }