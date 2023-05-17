const express = require('express');

const routes = express.Router();
const adminController = require('../controller/admin_controller')
routes.get('/', 
(req , res)=>{
res.render('login');
}
// adminController.adminController
);

routes.get('/dash' , adminController.adminController)

routes.get('/signuppage' , adminController.signupController) ; 

routes.post('/createuser' , adminController.createUserController); 

routes.post('/loginuser' , adminController.loginController); 

routes.get('/loginuser' , adminController.loginController ) ; 

routes.post('/add', adminController.addProductController);

routes.get('/get_product_details' , adminController.getProductDetailsController);

routes.get('/get_edit_details' , adminController.getEditProductController);

routes.post('/edit_product' , adminController.editProductController );


exports.Router = routes;