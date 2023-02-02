<?php

session_start();
require "../connection/connection.php";

if (isset($_SESSION["userDetails"])) {
    $usertType = $_POST["user_type"];
    
}







?>