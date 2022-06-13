<?php  
    
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    session_start();
    
    include("conexion/index.php"); 

?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DLS EATS</title>

    <link rel="icon" type="image/png" href="imagenes/dlspizza-favicon.png">

    <!-- CSS personalizado -->
    <link href="css/index.css" rel="stylesheet">
    
</head>
<body>
    <?php
        $seccion = (isset($_GET['seccion']) && $_GET['seccion'] != '') ? $_GET['seccion'] : 'inicio';
        $accion = (isset($_GET['accion']) && $_GET['accion'] != '') ? $_GET['accion'] : 'lista';
        include("menu/index.php");
        
  
        switch ($seccion) {
            case "inicio":
                include("inicio/index.php");
                include("productos/lista.php");
                break;
            case "aviso":
                include("aviso/index.php");
                break;
            case "terminos":
                include("terminos/index.php");
                break;
            case "acceso":
                include("acceso/index.php");
                break;
        }
 
        include("piedepagina/index.php");

    ?>


</body>
</html>