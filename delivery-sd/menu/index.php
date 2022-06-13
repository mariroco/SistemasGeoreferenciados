    <a class="navbar-brand" href="?seccion=inicio">
      LOGO
    </a>
    <a href="?seccion=inicio">Inicio</a>
    <a href="#">Promociones</a>
	<a href="#">Productos</a>
	<a href="#">Mis pedidos</a>
	<?php
	if(!isset($_SESSION["id"])) 
	{
	?>
		<a href="?seccion=acceso">Ingresar</a>
	<?php
	}
	?>

	<?php
	if(isset($_SESSION["id"])) 
	{
	?>
		<a href="?seccion=acceso&accion=micuenta">Mi cuenta</a>
		<a href="?seccion=acceso&accion=salir">Salir</a>
	<?php
	}
	?>
 