const express = require("express");
const app=express();
const port = 3001;

Header("Acces-ControlAllow-Origin: *");

const { getAuto, getAutoById } =require("./controllers/autos.controller");

app.get("/", getAuto);

app.get("/:id", getAutoById);

app.listen(port,()=>{
    console.log("ahora si");
    console.log(`conectado exitosamente: ${port}`);
})