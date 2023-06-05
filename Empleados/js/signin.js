window.onload = init;
function init() {
    if (!localStorage.getItem("token")){
        window.location.href= "login.html";
    }else{
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href="menu.html"
        });
    
        document.querySelector('.btn-primary').addEventListener('click', signin);
    }
}

function signin() {

    var nombre = document.getElementById('input-nombre').value;
    var apellidos = document.getElementById('input-apellidos').value;
    var telefono = document.getElementById('input-telefono').value;
    var correo = document.getElementById('input-correo').value;
    var direccion = document.getElementById('input-direccion').value;

    axios({
        method: 'post',
        url: 'http://localhost:3001/employees/signin',
        data: {
            nombre: nombre,
            apellidos: apellidos,
            telefono: telefono,
            correo: correo,
            direccion: direccion
        }
    }).then(function(res) {
        console.log(res);
        alert("Registro exitoso");
        window.location.href = "signin.html";
    }).catch(function(err) {
        console.log(err);
    })
}