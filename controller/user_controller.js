const express = require('express');
const path = require('path');

exports.controller = (req, res) => {

    res.render('user-page', {
        userName: "faizan",
        isAdmin: false,
        isUser: true,
        pageTitle: "User Page",
        price : "Price" , 
        description : "description" , 
        bookName: "Book Name",
        category: "Category",
        artist: "Artist",
    });
}