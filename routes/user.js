const express = require('express'); 
const path = require('path') ;
const routes = express.Router();
 

routes.get('/user' , (req , res)=>{

res.sendFile(path.join(__dirname , ".." , "view" , "user-page.html")); 

});

exports.Router = routes ; 