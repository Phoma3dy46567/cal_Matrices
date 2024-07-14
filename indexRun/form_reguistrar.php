 <?php

    session_start();
    
    if(isset($_SESSION['usuario'])){
        header("location: /creando/indexrun/dashboard/iniciar_creando.php");
    }
?> 

<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login y register</title> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../indexRun/css_registrar/estilos.css">
</head>
<body>   
    <main>
        <div class="contenedor__todo">
            <div class="caja__trasera">
                <!--TEXTO de LOGIN-->
                <div class="caja__trasera-login">
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Inicia secion para entrar en la pagina</p>
                    <button id="tbn__iniciar-sesion">Iniciar Seción</button>
                </div>
                <!--TEXTO  de REGISTRO-->
                <div class="caja__trasera-register">
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Registrate para poder Iniciar Sesión</p>
                    <button id="tbn__registrarse">Registrarse</button>
                </div>
            </div>
            <!--FORMULARIO DE login-->
            <div class="contenedor__login-register">
                <!--LOGIN....-->
                <form action="php/login_usuario_be.php" method="POST" class="formulario__login">
                    <h2>Iniciar Sesión</h2>
                        <input type="text" placeholder="Coreo Electronico" name="correo">
                        <input type="password" placeholder="Contraseña" name="contrasena">
                    <button><B>Iniciar</B></button>
                </form>
                <!--REGISTRO....-->
                <form action="php/registro_usuario_be.php" method="POST" class="formulario__register">
                    <h2>Registrarse</h2>
                        <input type="text" placeholder="Nombre Completo" name="nombre_completo">
                        <input type="text" placeholder="Correo Electronico" name="correo">
                        <input type="text" placeholder="Nombre de Usuario" name="usuario">
                        <input type="password" placeholder="Contraseña" name="contrasena">
                    <button><b>Registrarse</b></button>
                </form>
            </div>
        </div>
    </main>
    
    <script src="../indexRun/assets/script_deinicio.js"></script>
</body>
</html>