<?php
    session_start();
    session_destroy();

    header("location: /creando/indexRun/form_reguistrar.php");
    /*echo '
        <script>
            windw.location ="../register/inicio_2/reguistrar.php"
        </script>
    ';*/
    
    
?>