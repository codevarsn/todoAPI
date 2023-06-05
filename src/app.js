const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRoutes = require("./routes/users.routes");
const todosRoutes = require("./routes/todos.routes");
require ("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8001;

initModels();

//coneccion (testing) a base de dato
db.authenticate()
  .then(() => console.log("Successful Auth"))
  .catch((error) => console.error(error)); 

db.sync({alter: true})
.then(() => console.log("base de datos sincronizada"))
.catch((error) => console.log(error))

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(userRoutes);
app.use(todosRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});