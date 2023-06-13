const express = require('express');
const resepController = require('../controller/con_resep');


const routes = express();

routes.get("/category", resepController.getResepByCategori);
routes.get("/loves", resepController.getResepByLove);

module.exports = routes;