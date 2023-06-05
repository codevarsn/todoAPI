const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Users = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    lastname: {
        type: DataTypes.STRING(30),
        allowNull: true,
    },
    username: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    timestamps: true,
    updatedAt: false,
})

module.exports = Users;