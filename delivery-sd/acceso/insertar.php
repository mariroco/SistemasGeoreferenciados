<?php

  $nombre=$_POST["nombre"];
  $usuario=$_POST["usuario"];
  $contrasena=$_POST["contrasena"];

  $consulta  = " INSERT INTO tb_usuarios (txt_nombre_usu,txt_email_usu,txt_contrasena_usu,num_tipo_usu) 
                VALUES (?,?,?,1) ";
  $query = $conn->prepare($consulta);
  $query->bindParam(1, $nombre);
  $query->bindParam(2, $usuario);
  $query->bindParam(3, $contrasena);
  $query->execute();

?>

  <h1>REGISTRAR</h1>
  <h2>Se guardaron los cambios con éxito.</h2>
