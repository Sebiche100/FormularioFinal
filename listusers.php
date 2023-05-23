<?php
header("Access-Control-Allow-Origin:*");
$dsn = "mysql:host=localhost:3306;dbname=store;";
$username = "root";
$password = "" ; 
$connection = new PDO($dsn, $username, $password);

$query = "SELECT * FROM users";

$result = $connection->query($query);

$users = [];

foreach($result as $item){
    $users[] = $item;

}

print json_encode($users);