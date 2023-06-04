window.onload = init;
function init() {
    if (!localStorage.getItem("token")){
        window.location.href= "login.html";
    }else{
        document.querySelector('.btn-primary').addEventListener('click', function(){
            localStorage.removeItem("token");
            window.location.href="login.html"
        });
        document.querySelector('.btn-secondary').addEventListener('click', function(){
            window.location.href="signin.html"
        });
        document.querySelector('.btn-modificar').addEventListener('click', function(){
            window.location.href="modificar.html"
        });
        document.querySelector('.btn-eliminar').addEventListener('click', function(){
            window.location.href="delete.html"
        });
        document.querySelector('.btn-buscar').addEventListener('click', function(){
            window.location.href="buscar.html"
        });
        document.querySelector('.btn-base').addEventListener('click', function(){
            window.location.href="empleados.html"
        });
        document.querySelector('.btn-agregar').addEventListener('click', function(){
            window.location.href="post.html"
        });
    
    }
}

