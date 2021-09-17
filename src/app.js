const express=require("express");
const app = express();
const path=require('path');
const cancionesRoutes = require("./routes/cancionesRoutes.js");
const albumesRoutes = require("./routes/albumesRoutes.js");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.set('views', path.join(__dirname, 'views'))

//Parsear Body

app.use(express.urlencoded ({extended:false}));
app.use(express.json());


app.use("/canciones", cancionesRoutes);

app.use("/albumes", albumesRoutes);

// SERVIDOR 

app.listen(
    3000, () => console.log('Servidor corriendo en el puerto 3000')
);