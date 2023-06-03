const express =require('express');
const employees= express.Router();
const db = require('../config/database');
  

employees.post("/",async(req,res,next)=>{
    const {nombre, apellidos, telefono, correo_electronico} = req.body;

    if(nombre && apellidos && telefono && correo_electronico){
        let query= "INSERT INTO empleados(nombre, apellidos, telefono, correo_electronico,direccion)";
        query += ` VALUES('${nombre}', ${apellidos}, ${telefono}, ${correo_electronico}),${direccion}`;
    
        const rows = await db.query(query);
        if(rows.affectedRows == 1){
            return res.status(201).json({code:201, message:"Empleado insertado correctamente"});
        }
    
        return res.status(500).json({code:500, message:"Ocurrio un error"});
    }
    return res.status(500).json({code:500, message: "Campos Incompletos"});
});

employees.delete("/:id([0-9]{1,3})",async(req,res,next)=>{
    const query = `DELETE FROM empleados WHERE id=${req.params.id}`;
    const rows = await db.query(query);
    if(rows.affectedRows == 1){
        return res.status(200).json({code:200, message: "Empleado borrado correctamente"});
    }
    return res.status(404).json({code:404, message:"Empleado no encontrado"});
});

employees.put("/:id([0-9]{1,3})",async(req,res,next)=>{
    const {nombre, apellidos, telefono, correo_electronico,direccion} = req.body;


    if(nombre && apellidos && telefono && correo_electronico && direccion){
        let query = `UPDATE empleados SET nombre='${nombre}',apellidos=${apellidos},telefono=${telefono},correo_electronico=${correo_electronico},direccion${direccion} WHERE id = ${req.params.id};`;
    
        const rows = await db.query(query);
        if(rows.affectedRows == 1){
            return res.status(201).json({code:201, message:"Empleado insertado correctamente"});
        }
    
        return res.status(500).json({code:500, message:"Ocurrio un error"});
    }
    return res.status(500).json({code:500, message: "Campos Incompletos"});

});

employees.patch("/:id([0-9]{1,3})",async(req,res,next)=>{
    
    if(req.body.nombre){
        let query = `UPDATE empleados SET nombre='${req.body.nombre}' WHERE id=${req.params.id}`;
    
        const rows = await db.query(query);
        if(rows.affectedRows == 1){
            return res.status(201).json({code:201, message:"Empleado insertado correctamente"});
        }
    
        return res.status(500).json({code:500, message:"Ocurrió un error"});
    }
    return res.status(500).json({code:500, message:"Campos incompletos"});
});

employees.get("/", async(req, res, next)=>{
    const pkmn = await db.query("SELECT * FROM Empleados")
    return res.status(200).json({code:200, message:pkmn});
});

employees.get("/:id([0-9]{1,3})", async(req,res,next)=>{
    const id = req.params.id;

    if (id>= 1 && id<= 722){
        const pkmn = await db.query("SELECT * FROM empleados WHERE id ="+ id);
        return res.status(200).json({code:200, message:pkmn});
    }
    return res.status(404).send({code: 404, message:"Empleado no encontrado"});
});

employees.get("/:name([A-Za-z]+)",async(req,res,next)=>{
    
    const name = req.params.name;

    const pkmn = await db.query(`SELECT * FROM empleados WHERE nombre = "${name.toLowerCase()}"`);

    if(pkmn.length>0){
        return res.status(200).json({code:200,message:pkmn});
    }
        return res.status(404).send({code:404,message:"Empleado no encontrado"});
    
});

module.exports = employees;