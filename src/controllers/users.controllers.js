const UserServices = require("../services/users.services")


//creacion de usuario
const createUser = async (req, res) => {
    try {
        const data = req.body;
        const result = await UserServices.create(data)
        res.status(201).json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getTodosByUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await UserServices.getTodos(id)
        res.json(result)
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    createUser,
    getTodosByUser,
}