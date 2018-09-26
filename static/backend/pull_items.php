<?php
header('Access-Control-Allow-Origin: http://localhost:8081');
header('Content-type: application/json');
$caketype = json_decode(file_get_contents("php://input"));
$servername = "localhost";
$username = "root";
$password = "";
try {
    $conn = new PDO("mysql:host=$servername;dbname=cake_shop", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //Prepared query to save cake orders in the database
    $stmt = $conn->prepare("SELECT * FROM $caketype->cake_category");
    $stmt->execute();

    // set the resulting array to associative
    $result = $stmt->fetchAll(); 
    echo json_encode($result);
}
catch(PDOException $e)
{
    echo "Connection failed: " . $e->getMessage();
}  

?>