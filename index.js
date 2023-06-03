const express = require('express');
const app = express ();
const {employees} = require('./employees.json');

app.get("/",(req,res, next)=>{
   return res.status(200).send("Bienvenido a la base de datos de empleados")
});

app.get('/employees/all', (req,res,next)=>{
    return res.status(200).send(employees);
});

app.get('/employees/:id([0-9]{1,3})', (req,res,next)=>{
    const id =req.params.id -1;
    (id >= 0 && id <= 1)?
        res.status(200).send(employees[req.params.id -1]):
        res.status(404).send("Empleado no encontrado");
    
});

app.get('/employees/:name([A-Za-z]+)', (req,res,next)=>{
    const name = req.params.name;

    const empl= employees.filter((p)=>{
        return (p.name.toUpperCase() == name.toUpperCase()) ?p : null;
    });

    (empl.length>0)? 
        res.status(200).send(empl):
        res.status(404).send ("Empledo no encontrado");   
    
});


app.listen(process.env.PORT || 3001, ()=>{
    console.log("Server is running...");
});