<!--<?php

    session_start();
    
     if(!isset($_SESSION['usuario'])){
        echo '<script>
            alert("por favor debe iniciar sesión");
        </script>';
        header("location: /creando/indexrun/form_reguistrar.php");
        //session_destroy();
    }
    
    /*
    if(!isset($_SESSION['usuario'])){
        echo '
            <script>
                alert("por favor debe iniciar sesión");
                window.location = "/creando/indexRun/form_reguistrar.php";
            </script>
        ';
        
        
        die();
        
    } session_destroy();
    */
?>
-->


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/../creando/indexRun/dashboard/estilos/estilo_animacion.css">
   <?php
include("navar.php");
?></head>
<body >
    <!--
    <div class="cabecera">
        
         <header>
            <nav>
                <ul>
                    <li>  
                        <img src="/../Register/inicio_2/animacion/imagenes/LOGO_5.png" alt="icono" aria-posinset="static"></li>
                    <li>
                        <div class="cajas"><a href="/../Register/inicio_2/animacion/animar_letras.php"><B>INICIO</B></a></div>
                    </li>
                    <li>
                        <div class="cajas">
                            <a href="/../Register/inicio_2/dashboard/proyecto_1roA/indeexx.html"><b>MATRICES</b></a>
                        </div>
                    </li>
                    <li>
                        <div class="cajas">   
                            <a href="/../Register/inicio_2/dashboard/proyecto_1roA/cover_index.html"><b>CONVERSIONES</b></a>
                        </div>
                    </li>
                    <li>
                        <div class="cajas">   
                            <a href="#"><b>OTROS PROYECTOS</b></a>
                        </div>
                    </li>
                    <li>
                        <div class="cajas">
                            <a href="#"><b>CONCEPTOS</b></a>
                        </div>    
                    </li>
                    <li>
                        <div class="cajas">
                            <a href="/../creando/indexrun/dashboard/tarjetas_con_expancion.php"><b>PREGUNTAS</b></a>
                        </div>    
                    </li>
                     
                </ul>
            </nav>
        </header> 
       
    </div>
    -->
  
    <!--el centro de la pagina-->
    <h1>ANALISIS, DISEÑO Y EJECUCIÓN SISTEMAS INFORMATICOS EN ACCIÓN</h1>
    <section>
        <div class="text">
                <p> 
                    Comienza a pensar en grande, para lograr cosas grandes
                    puedes resolver rapido y de manera eficaz todos los 
                    ejercicios con matrices para hacer mas efectivo tu trabajo
                </p>
                    
        </div>
        <div class="text">
            
                <img src="/../Register/inicio_2/animacion/imagenes/fractal_2.gif" alt="fonfo">
        
        </div>
    </section>
          
    </div>  
            
    <footer>
        <marquee behavior="alternate" direction="right">
            trabaja con nostros y gana tu experiencia
        </marquee>
                        
            <div class="pie">
                <p>Eduardo Poma Castro @edyPoma123</p>
                            
                <a href="https://wa.me/59169704440"><img src="/../Register/inicio_2/animacion/imagenes/redes/whatsapp.png" alt="whatsapp"></a>
                <a href=""><img src="/..//inicio_2/animacion/imagenes/redes/gmail.png" alt="correo-gmail"></a>
                <a href=""><img src="/../Register/inicio_2/animacion/imagenes/redes/github.png" alt="github"></a>
                <a href=""><img src="/../Register/inicio_2/animacion/imagenes/redes/linkedin.png" alt="linkedin"></a>
                <a href=""><img src="/../Register/inicio_2/animacion/imagenes/redes/instagram.png" alt="instagram"></a>
            </div>
                        
    </footer> 
          
</body>
</html>