<?php

$servrername = "localhost";
$username = "root";
$password = "";
$dbname = "registerUser";

$conn = mysqli_connect($servrername, $username, $password, $dbname);

if(!$conn){
    die("Connection failed", mysqli_connect_error());
    
} else {
    echo "sucess";
} ?>