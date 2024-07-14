<?php

    session_start();
     if(!isset($_SESSION['usuario'])){
        echo '<script>
            alert("por favor debe iniciar sesión");
        </script>';
        header("location: ../paginaindex/index.html");
      }
?>

<link rel="stylesheet" href="css/estilos_encabezado.css">

    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <style>
      

      /* Estilos de la barra de navegación */

      .navbar {
        background-image: linear-gradient(to right, #369aeb, #0b2f72ef, #02042aef);
        color: #ffffff;
        padding: 10px 0;
      }

      .navbar .logo img {
        border-radius: 25px;
        height: 70px;
        margin-left: 20%;
        vertical-align: middle;
      }
      .navbar-nav {
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-align: right;
        margin-left: 80%;
        margin-right: 4%;
      }
      .navbar-toggler .navbar-toggler-icon{
         background-color: #2883a4; 
          border-radius: 5px; 
          padding: 10px 20px;
          font-size: 18px; 
          margin-right: 25%;
          cursor: pointer;
      }
      .navbar-nav li {
        display: inline-block;
        margin-left: 20px;
      }

      .navbar-nav li a {
        color:#fff;
        transition: transform 0.3s ease;
        text-decoration: none;
        padding: 10px 15px;
        display: block;
      }
      #ini {
        background-color: #ff6600a9;
        border-radius: 10px;
        color: #fff;
      }
      .navbar-nav li a:hover {
        background-color: #71d5d3a9;
        transform: scale(1.2);
        border-radius: 10px;
      }
      .nombreUsuario{
        background-color: #6fbaf8;
      }
    </style>
  </head>
  <header>
    <nav class="navbar navbar-expand-lg">
      <div class="logo">
        <img src="media/logo_1.png" alt="Logo de la tienda" class="logo" />
      </div>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link" id="ini" href="#"
              ><strong>Productos</strong></a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#productos"><strong>Nosotros</strong></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="cerrar.php"><strong>Salir</strong></a>
          </li>
        </ul>
      </div>
      
    </nav>
    <div class="nombreUsuario" id="">
        <ul class="user ml-auto">
            <?php
              
              echo "<h2>Bienvenido ".$_SESSION['usuario']."</h2>";
            ?>
          
        </ul>
      </div>
</header>

    <?php
include("ventaForm.php");
?>