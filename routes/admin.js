const express = require('express');

const routes = express.Router();
const adminController = require('../controller/admin_controller')
routes.get('/', 
(req , res)=>{
res.render('login')

}
// adminController.adminController
);
routes.post('/add', adminController.addProductController);

exports.Router = routes;