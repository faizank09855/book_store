const express = require('express');
const Product = require('../model/product').Products;
const db = require('../utils/database');

exports.adminController = (req, res) => {

    const products = new Product();
    products.getProducts().then(result => {
        res.render('admin-page',
            {
                title: 'Admin Page',
                fetchData: result ?? [],
                isAdmin: true,
                isUser: false,
            });
    }).catch(err => { console.log(err); });
}

exports.addProductController = (req, res) => {
    const products = new Product(req.body.name, req.body.price,
         "https://lh3.googleusercontent.com/a-/AOh14GgkXhnTEDxmVoXZEao4iHBj_rhSkxJ-GlG1DV7WRA=k-s48", 
         req.body.description);
    products.addProduct().then(result => {
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    });
}