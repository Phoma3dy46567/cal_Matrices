<?php

    session_start();

    if(!isset($_SESSION['usuario'])){
        echo '
            <script>
                alert("por favor debe iniciar sesión");
                window.location = "/register/inicio_2/reguistrar.php";
            </script>
        ';
        session_destroy();
        die();
    } 
    //session_destroy();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>expandir</title>
    <link rel="stylesheet" href="/..//Register/inicio_2/animacion/trabajos/style_expandir.css">
</head>
<body>
 
<div class="cabecera">
         <header>
            <nav>
                <ul>
                    <li>  
                        <img src="/../Register/inicio_2/animacion/imagenes/LOGO_5.png" alt="icono" aria-posinset="static"></li>
                    <li>
                        <div class="cajas"><a href="/../Register//inicio_2/animacion/animar_letras.php"><B>INICIO</B></a></div>
                    </li>
                    <li>
                        <div class="cajas">
                            <a href="/../Register/inicio_2/animacion/proyecto_1roA/indeexx.html"><b>CALCULADORAS</b></a>
                        </div>
                    </li>
                    <li>
                        <div class="cajas">   
                            <a href="#"><b>NUEVOS PROYECTOS</b></a>
                        </div>
                    </li>
                    <li>
                        <div class="cajas">
                            <a href=""><b>CONCEPTOS</b></a>
                        </div>    
                    </li>
                    <li>
                        <div class="cajas">
                            <a href="/../Register/inicio_2/animacion/tarjetas_con_expancion.php"><b>PREGUNTAS</b></a>
                        </div>    
                    </li>
                     
                </ul>
            </nav>
        </header>
    </div>



<!--LA SECCION DE CONTENEDOR-->
    <section class="container">
        <h1>que te gustaria conocer sobre el proyecto</h1>
        <div class="tab">
            <input type="radio" name="abrir" id="acc1"/>
            <label for="acc1">
                <h2>01</h2>
                <h3>¿DE QUE TRATA NUESTRO PROYECTO?</h3>
            </label> 
            <div class="content">
                <p>
                     Construir una aplicacion web para la resolución de matrices, mediante Javascript que permita optimizar 
                     la verificación de resultados en operaciones matriciales
                     <a href="">ver mas...</a>
                </p>
                
           </div>
        </div>
        <div class="tab">
            <input type="radio" name="abrir" id="acc2"/>
           <label for="acc2">
            <h2>02</h2>
            <h3>OBJETIVOS ESPECIFICOS QUE SE DESEA ALCANZAR</h3>
           </label> 
           <div class="content">
            <p>
                integrar en aplicacion web de matrices Javascript para crear elementos dinamicos <br/>
                 Aplicar metodos de resolución de matrices en aplicacion web a partir de 
                 metodos de resolución existentes.
                 <a href="">ver mas...</a>
            </p>
           </div>
        </div>
        <div class="tab">
            <input type="radio" name="abrir" id="acc3"/>
           <label for="acc3">
            <h2>03</h2>
            <h3>¿COMO LO HICIMOS?</h3>
           </label> 
           <div class="content">
            <p>
                podemos comenzar con el formulario en las manos y <br/>
                 comenzar a escribir los datos necesarios en la casillas.
                 <a href="">ver mas...</a>
            </p>
           </div>
        </div>
        <div class="tab">
            <input type="radio" name="abrir" id="acc4"/>
           <label for="acc4">
            <h2>04</h2>
            <h3>¿como me comunico con tigo?</h3>
           </label> 
           <div class="content">
            <p>
                podemos comenzar con el formulario en las manos y <br/>
                 comenzar a escribir los datos necesarios en la casillas.
                 <a href="">ver mas...</a>
            </p>
           </div>
        </div>

    </section>

    <!--ESTA PARTE ES PARA VOLVER Y CERAR SESION-->
    <form action="">
        <button><a href="/../Register/inicio_2/dasboard/iniciar_creando.php">regresa</a>r</button>
        
    </form>
    <div>
        <form action="">
            <button>
                <a href="/creando/indexrun/cerrar_sesion.php" target="">CERRAR SESIÓN</a>
            </button>
        </form>
    </div>
</body>
</html>