window.onload = init;

function init() {
    if (!localStorage.getItem("token")){
        document.querySelector('.btn-primary').addEventListener('click', login);
    }else{
        window.location.href= "menu.html";
    }
}

function login() {
    var correo = document.getElementById('input-mail').value;
    var pass = document.getElementById('input-password').value;

    axios({
        method: 'post',
        url: 'http://localhost:3001/user/login',
        data: {
            user_mail: correo,
            user_password: pass
        }
    }).then(function(res) {
        if(res.data.code === 200){
            localStorage.setItem("token", res.data.message);
            window.location.href = "menu.html";
        }else{
            alert("Usuario y/o contraseña incorrectos");
        }
    }).catch(function(err) {
        console.log(err);
    })
}