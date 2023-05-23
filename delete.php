<?php
header("Access-Control-Allow-Origin:*");

$dsn = "mysql:host=localhost:3306;dbname=store;"
$username = "root";
$password = "" ; 
$connection = new PDO ($dsn, $username, $password);

$id = $_GET['id'];

$query = "DELETE FROM users WHERE id = $id ";

$connection->query($query);