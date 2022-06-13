<?php

	$correo=$_POST['correo'];
	$contrasena=$_POST['contrasena'];

	$consulta  = " SELECT * FROM
				tb_usuarios WHERE txt_email_usu=? 
				AND txt_contrasena_usu=? ";
	$query = $conn->prepare($consulta);
	$query->bindParam(1, $correo);
	$query->bindParam(2, $contrasena);
	$query->execute();
	$cuenta=0;
	$cuenta = $query->rowCount();

	if ($cuenta)
	{
      $redireccionar="?seccion=acceso&accion=bienvenido";
	  $registro = $query->fetch();
      $_SESSION["id"]=  $registro["pk_clave_usu"];
      $_SESSION["nombre"]=  $registro["txt_nombre_usu"];
	  $_SESSION["tipo"]=  $registro["num_tipo_usu"];
    }
  else
    $redireccionar="?seccion=acceso&accion=ingresa&mensaje=novalido";
?>
<script>
  window.location.href = "<?=$redireccionar?>";
</script>
