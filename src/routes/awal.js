const express = require('express');

const routes = express();

routes.get("/", (req, res) =>{
    res.json({
        message: "berhasil terhubung",
    });
});

module.exports = routes;