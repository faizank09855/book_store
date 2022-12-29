const express = require('express'); 

const routes = express.Router();
const adminController = require('../controller/admin_controller')
routes.get('/' , adminController.adminController);
exports.Router = routes ;