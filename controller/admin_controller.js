const express = require('express');
const Product = require('../model/product');
const db = require('../utils/database'); 

exports.adminController = (req, res) => {

    db.execute('SELECT * FROM student')
    .then((result) =>{
        res.render('admin-page',
        {
            title: 'Admin Page',
            fetchData: result[0],
            isAdmin: true,
            isUser: false,
        });

        console.log(result[0]) ; })
    .catch(err => console.log("database error => " + err));
    // const fetchData = Product.fetchAll();

}

exports.adminFetchData = (req, res) => {

    const product = new Product(req.body.name);
    product.save();
    const fetchData = Product.fetchAll(res);
    

}