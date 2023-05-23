<?php

header("Access-Control-Allow-Origin:*");

$rawData = file_get_contents("php://input");

$user = json_decode($rawData);

$dsn = "mysql:dbname=store;host=localhost:3306";
$username = "root";
$password = "" ; 

$connection = new PDO($dsn, $username, $password);

$nombre = $user->nombre;
$email = $user->email;
$birthdate = $user->fecha;
$sex = $user->sexo;


$query = "UPDATE users SET 
nombre = '$name', email = '$email', 
birthdate = '$birthdate', sex = '$sex'
where id = $id";

$connection->query($query);
