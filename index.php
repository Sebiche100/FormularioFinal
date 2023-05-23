<?php
//Permite recibir peticiones desde cualquier direccion
header("Access-Control-Allow-Origin:*");
//Esta linea es para recibir datos enviados en el cuerpo de la peticion
$rawData = file_get_contents("php://input");
//transforma el raw data en php
$user = json_decode($rawData);
//Ver en pantalla que estamos recibiendo
$dsn = "mysql:dbname=store;host=localhost:3306";
$username = "root";
$password = "" ; 

$connection = new PDO($dsn, $username, $password);

$nombre = $user->nombre;
$email = $user->email;
$birthdate = $user->fecha;
$sex = $user->sexo;

$query = "INSERT INTO  users(nombre, email, birthdate, sex) VALUES ('$nombre','$email','$birthdate','$sex')";


$connection->query($query);