window.onload = init;
var headers = {};
var url = "http://localhost:3001";

function init() {
    if(localStorage.getItem("token")){
        headers = {
            headers: {
                'Authorization': "bearer " +localStorage.getItem("token")
            }
        };
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href="menu.html";
        });

        cargarBase();
    } else {
        window.location.href = "login.html";
    }
}

function cargarBase() {
    axios.get(url + "/employees", headers)
    .then(function(res) {
        console.log(res);
        imprimirlos(res.data.message);
    }).catch(function(err) {
        console.log(err);
    });
}

function imprimirlos(empleados) {
    var infoEmpleado = document.getElementById('info-empleado');
    infoEmpleado.innerHTML = '';

    for(var i = 0; i < empleados.length; i++){
        var html = '<div>';
        html += '<ul class="list-group">';
        html += '<li class="list-group-item">Nombre: ' + empleados[i].nombre + '</li>';
        html += '<li class="list-group-item">Apellidos: ' + empleados[i].apellidos + '</li>';
        html += '<li class="list-group-item">Telefono: ' + empleados[i].telefono + '</li>';
        html += '<li class="list-group-item">Correo: ' + empleados[i].correo + '</li>';
        html += '<li class="list-group-item">Direccion: ' + empleados[i].direccion + '</li>';
        html += '</ul>';
        html += '</div>';

        infoEmpleado.innerHTML += html;
    }
}
