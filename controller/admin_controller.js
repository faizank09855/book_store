const express = require('express') ;
const path = require('path'); 

exports.adminController = (req , res)=>{

    res.render('admin-page' ,
     {title : 'Admin Page' ,
     isActive : true}) ; 
    
}