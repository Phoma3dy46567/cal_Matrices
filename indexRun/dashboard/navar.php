
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
      crossorigin="anonymous"
    ></script>
    <link rel="stylesheet" href="css/estilos_encabezado.css" />
    <!---->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <style>
      /* Estilos de la barra de navegación */
      nav{
        width: 100%;
        height: 100px;
      }
      .navbar {
        background: linear-gradient(
          90deg,
          #021b4c99 10%,
          #068f015c 30%,
          #02746b6e 100%
        );
        color: #ffffff;
        padding: 20px;
      }
      
      .navbar img {
        border-radius: 25px;
        height: 70px;
        margin-left: 5%;
        margin-right: 20%;
      }
      .navbar-nav {
        display: flex;
        justify-content: flex-end;
        list-style-type: none;
        margin: 0;
        padding: 0;
        text-align: right;
      }
      .navbar-toggler .navbar-toggler-icon {
        padding: 10px 20px;
        font-size: 18px;
        cursor: pointer;
      }
      .navbar-nav li {
        display: inline-block;
        margin-left: 20px;
      }

      .navbar-nav li a {
        color: #fff;
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
      @media screen and (max-width: 990px) {
        .navbar-nav li a:hover {
        background-color: #71d5d3a9;
        transform: scale(1.2);
        border-radius: 10px;transform: translate(-20px);
        cursor: pointer;
      }
        
      }
      .nombreUsuario {
        background-color: #6fbaf8;
      }
    </style>
  
    <nav class="navbar navbar-expand-lg navbar-light">
      <img src="#" alt="logo">
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
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#"
              ><strong>INICIO</strong><span class="sr-only"></span
            ></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><strong>MATRICES</strong></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><strong>CONVERSIONES</strong></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><strong>OTROS PROYECTOS</strong></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><strong>CONCEPTOS</strong></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><strong>PREGUNTAS</strong></a>
          </li>
        </ul>
      </div>
    </nav>
</head>