
const Task = require('../models/task');

const getAllTask = async (req, res)=>{
    try{
        const tasklist = await Task.find();
        return res.render("index", tasklist);

    }catch(err)
    {
        console.log(err);
        return res.status(500).send({ error: err.message });
    }
}

const createTask = async (req, res) => {
    const task = req.body;
    if (!task || !task.task) {
        return res.redirect('/');
    }
    try {
       await Task.create(task);
       return res.redirect('/');
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: "Requisição não encontrada." });
    }
}


module.exports ={
    getAllTask,
    createTask,

};