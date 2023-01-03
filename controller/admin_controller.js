const express = require('express') ;
const path = require('path'); 
const Product = require('../model/product');

exports.adminController = (req , res)=>{
    const fetchData = Product.fetchAll(); 
    res.render('admin-page' ,
     {title : 'Admin Page' ,
     fetchData :  fetchData,
     isAdmin : true ,
    isUser : false ,
    }) ; 
    
}

exports.adminFetchData = (req , res , next)=>{
    const product = new Product("faizan");
    product.save(); 
    const fetchData = Product.fetchAll(); 
    res.render('admin-page' ,
     {title : 'Admin Page' ,
     fetchData : fetchData ?? [],
     isAdmin : true ,
    isUser : false ,
    }) ; 
    
}