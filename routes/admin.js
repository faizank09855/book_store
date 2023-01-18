const express = require('express');

const routes = express.Router();
const adminController = require('../controller/admin_controller')
routes.get('/', adminController.adminController);
routes.post('/add', adminController.adminFetchData);

exports.Router = routes;