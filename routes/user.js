const express = require('express');
const userController = require('../controller/user_controller');
const routes = express.Router();
routes.get('/user', userController.controller);
exports.Router = routes; 