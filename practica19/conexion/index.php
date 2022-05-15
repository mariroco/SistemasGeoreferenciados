<?php
    $usuario = "sistemasgeo5452_mrochaadm";
    $contrasena = "DQjP^ACz,9@DXo.7e!";
    try{
        $conn = new PDO('mysql:host=localhost;dbname=sistemasgeo5452_mrocha', $usuario, $contrasena);
        $conn -> setAttributes(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e)
        {
            echo "ERROR: " . $e->getMessage();
        } 

?>