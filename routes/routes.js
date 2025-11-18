const routes = require("express").Router();
const metodosController = require("../controllers/taskController");

routes.get('/home',metodosController.getAll )

module.exports= routes;

 