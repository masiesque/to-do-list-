const routes = require("express").Router();
const metodosController = require("../controllers/taskController");

routes.get('/',metodosController.getAllTask );
routes.post('/create',metodosController.createTask);
routes.get('/getById/:id/:method', metodosController.getById);
routes.post('/update/:id', metodosController.updateOneTask);
routes.get('/deleteTask/:id',metodosController.deleteOneTask);
module.exports= routes;

 