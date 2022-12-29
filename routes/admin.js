const express = require('express'); 
const path = require('path'); 
const routes = express.Router();
routes.get('/' , (req , res)=>{
res.sendFile(path.join(__dirname , '..' , 'view' , 'admin-page.html')); 
});

exports.Router = routes ;