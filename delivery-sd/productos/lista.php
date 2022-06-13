
    <h2>NUESTROS PRODUCTOS</h2>
    <?php
        $consulta  = " SELECT * FROM tb_productos";
        $query = $conn->prepare($consulta);
        $query->execute();
        while($registro = $query->fetch()) {
            include("productos/tarjeta.php");
        }
    ?>