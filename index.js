const express = require("express");
const app=express();
const port = 3001;
const cors = require('cors');

app.use((cors));

const { getAuto, getAutoById } =require("./controllers/autos.controller");

app.get("/", getAuto);

app.get("/:id", getAutoById);

app.listen(port,()=>{
    console.log("ahora si");
    console.log(`conectado exitosamente: ${port}`);
})