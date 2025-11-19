 
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes/routes');
const conectDB = require('./db/db');

dotenv.config();

conectDB();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);


app.set("view engine", "ejs");

app.listen(process.env.PORT, () => {
    console.log("Servidor rodando na porta 3000");
});
