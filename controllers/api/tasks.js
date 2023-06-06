const Task = require('../../models/tasks')

module.exports = {
    index,
    create,
    detail,
    deleteTask,
    update
}

async function index(req, res){
    try{
        const tasks = await Task.find();
        res.status(200).json(tasks)
    }catch(err){
        res.status(400).json(err)
    }
}

async function create(req, res){
    try{
        req.body.uploaded_by = req.user._id;
        const newTask = await Task.create(req.body);
        console.log(newTask)
        res.status(201).json(newTask)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function detail(req, res){
    try{
        const task = await Task.findById(req.params.id)
        console.log(task)
        res.status(200).json(task)
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

async function deleteTask(req, res){
    try{
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).json({
            data: 'success'
        })
    }catch(err){
        res.status(400).json(err)
    }
}

async function update(req, res){
    try{
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedTask)
    }catch(err){
        console.log(err);
        res.status(400).json('Bad Request')
    }
}