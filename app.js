const express=require("express");
const app = express();
const path=require('path');
const mainRoutes = require("./routes/mainRoutes.js");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", mainRoutes);

// SERVIDOR 

app.listen(
    3000, () => console.log('Servidor corriendo en el puerto 3000')
);