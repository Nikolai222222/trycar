const { request, response } =require("express")
const{autos} =require("../autos");


const getAuto=(req=request, res=response)=>{
    return res.json({
        status:true,
        autos,
        statusCode : 200
    });
}

const getAutoById=(req=request, res=response)=>{
    let id = req.params.id;

    if(!req.params.id){
        return res.json({
            msg:"debe agregar un id del área para realizar la busqueda"
        });
    }

    let autoABuscar ="";

    autoABuscar = autos.find((autos)=>{
        return autos.id === id
    });

    if(autoABuscar){
        return res.json({
            ok:true,
            autoABuscar,
            statusCode:200
        })
    }else{
        return res.json({
            ok:false,
            msg:"no hay autos con esta id",
            statusCode:404
        });
    }
}

module.exports ={
    getAuto,
    getAutoById
}