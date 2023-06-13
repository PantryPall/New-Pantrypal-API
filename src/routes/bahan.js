const express = require('express');
const bahanController = require('../controller/con_bahan');


const routes = express();

routes.get("/", bahanController.getBahanUsingMoney);
routes.get("/all", bahanController.getAllBahan);

module.exports = routes;