const express = require('express');
const Product = require('../model/product').Products;
const Users = require('../model/product');
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

exports.signupController = (req, res) => {
    res.render('signup');
}


exports.createUserController = (req, res) => {
    const usersModel = new Users.UserModel(req.body.email, req.body.password);
    // const users = new Users(req.body.email, req.body.password);
    usersModel.createUser().then(result => {
        res.redirect('/');
    }).catch(err => {
        console.log(err);
    });
}

exports.loginController = (req, res) => {
    console.log('login controller');
    const model = new Users.UserModel(req.body.email, req.body.password);
    model.loginUser(req.body.email, req.body.password).then(result => {
        if (result == null) {
            console.log('result=>' + result.email);
        }
        else if (result.password != req.body.password) {
            console.log('Wrong Password');
        }
        else {
            res.redirect('/dash');
        }
    }).catch(err => {
        console.log(err);
    });
}

exports.getProductDetailsController = (req, res) => {

    const model = new Users.UserModel('fk', '1234');
    model.getProductDetails(req.query.id).then(result => {
        res.render("product_details", {
            productData: result
        });
    }).catch(err => {
        console.log(err);
    });
}


exports.getEditProductController = (req, res) => {
    const model = new Users.UserModel();
    console.log(req.query.id);
    model.getProductDetails(req.query.id)
        .then(result => {
            res.render("product_edit_page", {
                product: result
            });
        }).catch(err => {
            console.log(err);
        });

}


exports.editProductController = (req, res) => {
    const model = new Users.UserModel();
    console.log(req.query.id);
    model.editProductDetails(req.query.id, req.body)
        .then(result2 => {
            console.log(result2);
            const product = new Product();
            product.getProducts().then(result => {
                res.render("admin-page", {
                    title: 'Admin Page',
                    fetchData: result ?? [],
                    isAdmin: true,
                    isUser: false,
                });
            }).catch(err => {
                console.log(err);
            });


        }).catch(err => {
            console.log(err);
        });

}