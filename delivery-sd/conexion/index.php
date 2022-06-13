<?php

	$usuario    = "mrochaadm";
	$contrasena = "DQjP^ACz,9@DXo.7e!";
	try{
    	$conn = new PDO('mysql:host=localhost;dbname=mrocha', $usuario, $contrasena);
    	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	 	}
		catch(PDOException $e)
			{
    			echo "ERROR: " . $e->getMessage();
			}
?>