const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Todos = db.define('todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Todos;
