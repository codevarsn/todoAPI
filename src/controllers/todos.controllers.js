const TodosServices = require("../services/todos.services");

//crear tarea
const createTodo = async (req, res) => {
    try {
        const data = req.body;
        const result = await TodosServices.create(data)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}


//actualizar taera
const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = await TodosServices.update(id, data)
        res.status(204).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}


// eliminar una tarea
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await TodosServices.delete(id)
        res.send("Todo deleted")
    } catch (error) {
        res.status(400).json(error)
    }
}



module.exports = {
    createTodo,
    updateTodo,
    deleteTodo,
}