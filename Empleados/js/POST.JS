window.onload = init;
function init() {
    if (!localStorage.getItem("token")){
        window.location.href= "login.html";
    }else{
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href="menu.html"
        });
    
        document.querySelector('.btn-primary').addEventListener('click', agregar);
    }
}

function agregar() {

    var nombre = document.getElementById('input-nombre').value;
    var mail = document.getElementById('input-correo').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'http://localhost:3001/user/signin',
        data: {
            user_name: nombre,
            user_mail: mail,
            user_password: pass
        }
    }).then(function(res) {
        console.log(res);
        alert("Registro exitoso");
        window.location.href = "POST.html";
    }).catch(function(err) {
        console.log(err);
    })
}