const routes = require("express").Router();
const metodosController = require("../controllers/taskController");

routes.get('/',metodosController.getAllTask );
routes.post('/create',metodosController.createTask);

module.exports= routes;

 