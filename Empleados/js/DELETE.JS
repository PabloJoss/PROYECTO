window.onload = init;
function init() {
    if (!localStorage.getItem("token")){
        window.location.href= "login.html";
    }else{
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href="menu.html"
        });
    
        document.querySelector('.btn-primary').addEventListener('click', eliminar);
    }
}

function eliminar() {

    var nombre = document.getElementById('input-nombre').value;

    axios({
        method: 'delete',
        url: 'http://localhost:3001/employees/eliminar',
        data: {
            nombre: nombre
        }
    }).then(function(res) {
        console.log(res);
        alert("Empleado eliminado correctamente");
        window.location.href = "eliminar.html";
    }).catch(function(err) {
        console.log(err);
    })
}