const express = require('express');
const Product = require('../model/product');
const db = require('../utils/database'); 

exports.adminController = (req, res) => {
    
Product.findAll().then(result =>{
    res.render('admin-page',
            {
                title: 'Admin Page',
                fetchData: result ?? [],
                isAdmin: true,
                isUser: false,
            });    
}).catch(err =>{console.log(err);});
    
    // db.execute('SELECT * FROM student')
    // .then((result) =>{
    //     res.render('admin-page',
    //     {
    //         title: 'Admin Page',
    //         fetchData: result[0],
    //         isAdmin: true,
    //         isUser: false,
    //     });

    //     console.log(result[0]) ; })
    // .catch(err => console.log("database error => " + err));
    // const fetchData = Product.fetchAll();

}

exports.adminFetchData = (req, res) => {

    const name = req.body.name ;
    const imageUrl = "https://media.digikey.com/Photos/McGraw-Hill%20Education/MFG_1259644251.jpg" ;
    const price = 12 ; 
    const desciption = "description" ; 
    Product.create({
        title : name ,
        price : price , 
        desciption : desciption , 
        imageUrl : imageUrl

    
    }).then(result1 =>{
        Product.findAll().then(result =>{
            res.render('admin-page',
                    {
                        title: 'Admin Page',
                        fetchData: result ?? [],
                        isAdmin: true,
                        isUser: false,
                    });    
        }).catch(err =>{console.log(err);});
    }).catch(err=>{
        console.log(err);
    }) ; 
     


    // const product = new Product(req.body.name);

    // product.save();
    // const fetchData = Product.fetchAll(res);



}