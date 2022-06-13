    <h1>REGISTRAR</h1>
    <form action="?seccion=acceso&accion=insertar" id="form1" method="post">
        <fieldset>
                Nombre:
                <input type="text" required name="nombre" id="nombre" size="80" maxlength="80">
                <br>
                Usuario (Correo electrónico):
                <input type="email" required name="usuario" id="usuario">
                <br>
                Contraseña:
                <input type="password" required name="contrasena" id="contrasena" size="80" maxlength="80">
            <button type="submit">ENVIAR</button>
        </fieldset>
    </form>
