const Todos = require("../models/todo.models");

class TodosServices {
    static async create (data) {
        try {
            return await Todos.create(data)
        } catch (error) {
            throw error;
        }
    }
    static async update (id, data) {
        try {
            return Todos.update(data, {
                where: {id}
            })
        } catch (error) {
            throw error;
        }
    }
    static async delete (id) {
        try {
            return await Todos.destroy({where: {id}})
        } catch (error) {
            throw error;
        }
    }
}

module.exports = TodosServices;