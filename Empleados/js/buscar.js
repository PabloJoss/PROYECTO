window.onload = init;
function init() {
    if (!localStorage.getItem("token")){
        window.location.href= "login.html";
    }else{
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href="menu.html"
        });
    
        document.querySelector('.btn-primary').addEventListener('click', buscar);
    }
}

function buscar() {
    var nombre = document.getElementById('input-nombre').value;

    axios({
        method: 'post',
        url: 'http://localhost:3001/employees/buscar',
        data: {
            nombre: nombre
        }
    }).then(function(res) {
        console.log(res);

        if (res.data.code === 1) {
            var empleado = res.data.message[0];
            mostrarEmpleado(empleado);
        } else {    
            alert("Empleado no encontrado");
        }

    }).catch(function(err) {
        console.log(err);
    });
}

function mostrarEmpleado(empleado) {
    var infoEmpleado = document.getElementById('info-empleado');

    var html = '<h2>Información del Empleado</h2>';
    html += '<ul class="list-group">';
    html += '<li class="list-group-item">Nombre: ' + empleado.nombre + '</li>';
    html += '<li class="list-group-item">Apellidos: ' + empleado.apellidos + '</li>';
    html += '<li class="list-group-item">Telefono: ' + empleado.telefono + '</li>';
    html += '<li class="list-group-item">Correo: ' + empleado.correo + '</li>';
    html += '<li class="list-group-item">Direccion: ' + empleado.direccion + '</li>';
    html += '</ul>';

    infoEmpleado.innerHTML = html;
}
