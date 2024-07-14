<?php
    /*importamos el archivo de coneccion */

    include 'coneccion_be.php';
    $nombre_completo = $_POST['nombre_completo'];
    $correo = $_POST['correo'];
    $usuario =$_POST['usuario'];
    $contrasena =$_POST['contrasena'];
    /*contraseña encriptada */
    $contrasena= hash('sha512', $contrasena);
    $query = "INSERT INTO usuario(nombre_completo, correo, usuario, contrasena) 
                VALUES('$nombre_completo', '$correo', '$usuario', '$contrasena')";
/* !verificar que el usuario y el correo no se repita*/
$verificar_usuario =mysqli_query($coneccion, "SELECT * FROM usuario WHERE usuario='$usuario'");
if(mysqli_num_rows($verificar_usuario) > 0){
    echo '
        <script> 
            alert("este nombre de usuario ya esta registrado, intent con otro");

            window.location = "/../creando/indexRun/form_reguistrar.php";
        </script>
    ';
    //header("location: /form_reguistrar.php");
    exit();
}
/* !CORREO */

    $verificar_correo =mysqli_query($coneccion, "SELECT * FROM usuario WHERE correo='$correo'");
    if(mysqli_num_rows($verificar_correo) > 0){
        echo '
            <script>
                alert("este correo ya esta registrado, intent con otro");
                window.location= "/../creando/indexRun/form_reguistrar.php";
            </script>
        ';
        //header("location: /creando/indexrun/form_reguistrar.php");
        exit();
    }

/**------------- incerta los datos a la base de datos */
    $ejecutar = mysqli_query($coneccion, $query );

    if($ejecutar){
        /*echo '
        <script>
            alert("BIENVENIDO SE REGISTRÓ CORRECTAMENTE");

            window.location= "../animacion/animar_letras.php"
        </script>
        ';*/
        $_SESSION['usuario']= $correo;
            header("location: ../dashboard/iniciar_creando.php");
            exit;
        
    }else{
        echo '
            <script>
                alert("LO SENTIMOS no se reguistro correctamente");

                window.location= "../form_reguistrar.php"
            </script>
            ';
        }

    mysqli_close($coneccion);
?>
<!--
    aprendemos en comparativo y el superla tivo
    superlative
    ER en el prefiko de los adjetivos
    fat-ER
    cundo son las de 2 o mas silabas utilizamos MORE
    el celular es mas pequeño que una computadora
    the cel phone is smaller than the computer
    juan is MORE intelligent than carlos
TAREA
    COMPARAR ENTRE FRONT END U BACKEND
    ARRAY AND LIST
    DESCKTOP AND SERVER
    E-BUSINESS AND E-COMERCE
    DIVICE AND DISK DRIVE
    INFORMATION AND DATA
    NAV ES PARA LA ACABECERA
-->