window.onload= init;
var headers ={};
var url ="http://localhost:3001";

function init(){
    if (localStorage.getItem("token")){
        headers={
            headers:{
                'Authorization': "bearer" + localStorage.getItem("token")
            }
        }
        loadEmpleado();

    }
    else {
        window.location.href="index.html";
    }
}

function loadEmpleado(){
    axios.get(url + "/employees",headers)
    .then(function(res){
        console.log(res);
        displayEmpleado(res.data.message);

    }).catch(function(err){
        console.log(err);
    })
}

function displayEmpleado(empleados){
    console.log("Entro a display pokemon");
    var body = document.querySelector("body");
    for (var i = 0; i<empleados.length; i ++){
        body.innerHTML += `<h3>${empleados[1].nombre}</h3>`;
    }

}


