
const Task = require('../models/task');

const getAllTask = async (req, res)=>{
    try{
        const tasklist = await Task.find();
        return res.render("index", {tasklist, task:null, taskDelete : null});

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
};
const getById = async (req, res) => {
    try 
    {
      
        const tasklist = await Task.find();
        if(req.params.method == "uptade")
        {
              const task = await Task.findOne({ _id: req.params.id });
             return res.render("index", { tasklist, task, taskDelete: null });
        }else
        {
            const taskDelete = await Task.findOne({ _id: req.params.id });
             return res.render("index", { tasklist, task: null, taskDelete });
        }
    } catch (err) {
        return res.status(500).json({ error: "Erro ao encontrar ou renderizar a página" });
    }
}
const updateOneTask = async (req, res)=>
{
    try{
        const task = req.body;
        await Task.updateOne({_id:req.params.id}, task);  
        res.redirect('/');
    }catch(err){
        console.log(err);
        return res.status(500).json({error: err.message});
    }
}
const deleteOneTask = async (req, res)=>
{
    try{
        await Task.deleteOne({_id: req.params.id});
        return res.redirect('/');

    }catch(err){
        res.status(500).json({error: err.message});
    }
    
}

module.exports ={
    getAllTask,
    createTask,
    getById,
   updateOneTask,
   deleteOneTask,
};