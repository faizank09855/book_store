const express = require('express');
const Product = require('../model/product');

exports.adminController = (req, res) => {
    const fetchData = Product.fetchAll();
    res.render('admin-page',
        {
            title: 'Admin Page',
            fetchData: fetchData,
            isAdmin: true,
            isUser: false,
        });
}

exports.adminFetchData = (req, res) => {

    const product = new Product(req.body.name);

    product.save();
    const fetchData = Product.fetchAll();
    res.render('admin-page',
        {
            title: 'Admin Page',
            fetchData: fetchData ?? [],
            isAdmin: true,
            isUser: false,
        });

}