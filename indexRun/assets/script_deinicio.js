document.getElementById("tbn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("tbn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);
//declaracion de VARIABLES

var contenedor_login_register = document.querySelector(".contenedor__login-register");

var formulario__login= document.querySelector(".formulario__login");
var formulario__register = document.querySelector(".formulario__register");

var caja__trasera_login= document.querySelector(".caja__trasera-login");
var caja__trasera_register= document.querySelector(".caja__trasera-register");

function anchoPagina(){
    if(window.innerWidth > 850){
        caja__trasera_login.style.display="block"
        caja__trasera_register.style.display="block"
    }else{
        caja__trasera_register.style.display="block"
        caja__trasera_register.style.opacity="1"
        caja__trasera_login.style.display="none"
        formulario__login.styele.display="block"
        formulario__register.style.display="none"
        contenedor_login_register.style.left="0px"
    }
}

anchoPagina();

function iniciarSesion(){

    if(window.innerWidth> 850){
        formulario__register.style.display= "none";
        contenedor_login_register.style.left="10px";
        formulario__login.style.display= "block";
        caja__trasera_register.style.opacity = "1";
        caja__trasera_login.style.opacity = "0";  
    }
    else{
        formulario__register.style.display= "none";
        contenedor_login_register.style.left="0px";
        formulario__login.style.display= "block";
        caja__trasera_register.style.display = "block";
        caja__trasera_login.style.display = "none";
    }

    
}

function register(){

    if(window.innerWidth > 850){
        formulario__register.style.display= "block";
        contenedor_login_register.style.left="410px";
        formulario__login.style.display= "none";
        caja__trasera_register.style.opacity = "0";
        caja__trasera_login.style.opacity = "1"; 
    }
    else{
        formulario__register.style.display= "block";
        contenedor_login_register.style.left="0px";
        formulario__login.style.display= "none";
        caja__trasera_register.style.display = "none";
        caja__trasera_login.style.display = "block";
        caja__trasera_login.style.opacity = "1";
    }
    
}
/*
?emfdjv
!frhttf8gtyughyuogitft  borrar eduardo entonces a partir de esto trabajamos
!
!esto es parar comentarios

*/