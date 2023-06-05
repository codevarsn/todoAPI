const Users = require("../models/users.models");
const Todos = require("../models/todo.models");
const Categories = require("../models/category.models");

class UserServices {
    static async create (data) {
        try {
            return await Users.create(data)
        } catch (error) {
            throw error;
        }
    }
    static async getTodos (id) {
        try {
            const result = await Users.findByPk(id, {
                attributes: ["id", "username", "email"],
                include: {
                    model: Todos,
                    attributes: { exclude: ["user_id", "createdAt", "updatedAt", "category_id"]},
                    include: Categories
                }
            })
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserServices