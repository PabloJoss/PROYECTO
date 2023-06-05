const express =require('express');
const jwt = require('jsonwebtoken');
const employees= express.Router();
const db = require('../config/database');
  

employees.post("/signin",async(req,res,next)=>{
    const {nombre, apellidos, telefono, correo_electronico} = req.body;

    if(nombre && apellidos && telefono && correo_electronico,direccion){
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

employees.put("/modificar", async (req, res, next) => {
    const {nombre, nuevo, apellidos, telefono, correo, direccion} = req.body;

    if(nombre && nuevo && apellidos && telefono && correo_electronico && direccion){
        let query =`UPDATE empleados SET nombre='${nuevo}' ,apellidos= '${apellidos}',`;
        query += `telefono=${telefono},correo_electronico='${correo_electronico}',direccion='${direccion}' WHERE nombre = '${nombre}';`;

        const rows=await db.query(query);
        console.log(rows);

        if(rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Empleado actualizado correctamente "});
        }
        return res.status(500).json({code: 500, message: "Ocurrio un error"});

    }
    return res.status(500).json({code: 500, message:"Campos incompletos"});

});

employees.delete("/eliminar", async (req, res, next) => {
    const {nombre} = req.body;

    const query = `DELETE FROM empleados WHERE nombre = '${nombre}'`;

    const rows = await db.query(query);

    if(rows.affectedRows == 1){
        return res.status(200).json({code: 200, message: "Empleado borrado correctamente"});
    }else{
    return res.status(404).json({code:404,message:"Empleado no encontrado"});
    }

});

employees.get("/", async(req, res, next)=>{
    const empl = await db.query("SELECT * FROM empleados")
    return res.status(200).json({code:200, message:empl});
});

employees.post('/buscar', async (req,res, next) =>{
    
    const {nombre} = req.body;
    const emp = await db.query("SELECT * FROM empleados WHERE UPPER(nombre) = UPPER('"+nombre+"')")

    if (emp.length > 0) 
    {
        return res.status(200).json({ code: 1 , message: empl});
    }else{
        return res.status(404).send({code: 404, message: "Empleado no encontrado"});
    }
});

module.exports = employees;