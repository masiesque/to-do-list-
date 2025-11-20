const routes = require("express").Router();
const metodosController = require("../controllers/taskController");

routes.get('/',metodosController.getAllTask );
routes.post('/create',metodosController.createTask);
routes.get('/getById/:id', metodosController.getById);
routes.post('/update/:id', metodosController.updateOneTask)

module.exports= routes;

 