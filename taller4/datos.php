<?php

$nombre = $_POST["nombre"];
$apellido = $_POST["apellido"];
$edad = $_POST["edad"];


header('Content-Type: application/json');
//Guardamos los datos en un array
$datos = array(
'estado' => 'ok',
'nombre' => $nombre, 
'apellido' => $apellido, 
'edad' => $edad
);

echo json_encode($datos, JSON_FORCE_OBJECT);
?>