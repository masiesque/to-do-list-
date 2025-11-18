// const express =  require ('express');
// const dotenv = require('dotenv');
// dotenv.config();
// const path = require('path');
// const routes = require('./routes/routes')


// const app = express();
// app.use(express.static(path.join(__dirname, "public")))
// app.use = express.json();
// app.use(routes);
// app.set("view engine", "ejs");



// app.listen(process.env.PORT, ()=>
// {
//      console.log("Servidor rodando na porta 3000");
// }); 
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const routes = require('./routes/routes');

dotenv.config();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.set("view engine", "ejs");

app.listen(process.env.PORT, () => {
    console.log("Servidor rodando na porta 3000");
});
