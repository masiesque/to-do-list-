const dotenv = require('dotenv');
dotenv.config();

const mongoose = require("mongoose");
const mongooseConectToDB  =()=>{
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }
).then(()=>{
    console.log("Banco conectado!");
}).catch((err)=>console.log(err));
}
module.exports = mongooseConectToDB;
