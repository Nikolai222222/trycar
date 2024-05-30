const express = require("express");
const app=express();
const port = 3001;
const cors= require("cors");

const { getAuto, getAutoById } =require("./controllers/autos.controller");

app.use(cors());

app.get("/", getAuto);

app.get("/:id", getAutoById);

app.listen(port,()=>{
    console.log("ahora si");
    console.log(`conectado exitosamente: ${port}`);
})



