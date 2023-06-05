const Users = require("./users.models");
const Todos = require("./todo.models");
const Categories = require("./category.models")

const initModels = () => {

    Users.hasMany(Todos, { foreignKey: "user_id" })
    Todos.belongsTo(Users, { foreignKey: "user_id" })

    Categories.hasMany(Todos, { foreignKey: "category_id" })
    Todos.belongsTo(Categories, { foreignKey: "category_id" })
}

module.exports = initModels;