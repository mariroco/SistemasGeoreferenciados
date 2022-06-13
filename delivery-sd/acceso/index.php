<?php
    $accion = (isset($_GET['accion']) && $_GET['accion']!='') ? $_GET['accion'] : 'ingresar';


    switch ($accion)
    {
        case "ingresar":
            include ("acceso/ingresar.php");
            break;
        case "valida":
            include ("acceso/valida.php");
            break;
        case "bienvenido":
            include ("acceso/bienvenido.php");
            break;
        case "salir":
            include ("acceso/salir.php");
            break;
        case "recordar":
            include ("acceso/recordar.php");
            break;
        case "enviarContrasena":
            include ("acceso/enviarContrasena.php");
            break;
        case "actualizar":
            include ("acceso/actualizar.php");
            break;
        case "micuenta":
            include ("acceso/micuenta.php");
            break;
        case "registrar":
            include ("acceso/registrar.php");
            break;
        case "insertar":
            include ("acceso/insertar.php");
            break;
    }
?>
