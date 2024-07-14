<?php

    session_start();    

    include 'coneccion_be.php';

        $correo = $_POST['correo'];
        $contrasena = $_POST['contrasena'];
        $contrasena = hash('sha512', $contrasena);

        $validar_login = mysqli_query($coneccion, "SELECT * FROM usuario WHERE  correo='$correo' and contrasena ='$contrasena'");

        if(mysqli_num_rows($validar_login)>=0){

            $_SESSION['usuario']= $correo;
            header("location: ../dashboard/iniciar_creando.php");
            exit;
        }else{
            echo '
            <script>
                alert("el USUARIO NO EXISTE, por favor verifique sus datos");
                window.location= "../form_reguistrar.php";
            </script>
            ';
            exit;
        }

?>