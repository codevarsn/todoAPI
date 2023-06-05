const { Router } = require("express");
const { createUser, getTodosByUser } = require("../controllers/users.controllers");


const router = Router();


//create user
router.post("/api/v1/users", createUser)

//consultar las tareas de un usuario
router.get("/api/v1/users/:id/todos", getTodosByUser)


module.exports = router;