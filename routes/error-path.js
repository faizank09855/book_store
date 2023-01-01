const express = require('express'); 
const path = require('path'); 
const routes = express.Router();

routes.use((req , res)=>{
res.render('error-page' , {title : "Error 404"});
});

exports.Router = routes ; 