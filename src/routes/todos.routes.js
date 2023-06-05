const { Router } = require("express")
const { createTodo, updateTodo, deleteTodo } = require("../controllers/todos.controllers")

const router = Router()


// crear una tarea
router.post("/api/v1/todos", createTodo)

// actualizar tarea
router.put("/api/v1/todos/:id", updateTodo)

//eliminar una tarea
router.delete("/api/v1/todos/:id", deleteTodo)


module.exports = router;