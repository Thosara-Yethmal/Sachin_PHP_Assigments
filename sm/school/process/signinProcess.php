<?php

session_start();

require "../connection/connection.php";

$username =  $_POST["e"];
$password = $_POST["p"];
$user_type = $_POST["ut"];


if (empty($username)) {
    echo "Please enter your username";
} else if (empty($password)) {
    echo "Please enter your password";
} else {

    $query = "";

    if ($user_type == 1) {
        $query = "SELECT * FROM `teacher` WHERE `username` = '" . $username . "' AND `password` = '" . $password . "'  ";
    } else if($user_type == 2) {
        $query = "SELECT * FROM `academic` WHERE `username` = '" . $username . "' AND `password` = '" . $password . "' ";
    } else if($user_type == 3) {
        $query = "SELECT * FROM `student` WHERE `username` = '" . $username . "' AND `password` = '" . $password . "' ";
    } else if($user_type == 4) {
        $query = "SELECT * FROM `admin` WHERE `username` = '" . $username . "' AND `password` = '" . $password . "' ";
    }
    

    $Details =  Database::search($query);
    $ucount = $Details->num_rows;

    // $m = $resultset["id"];

    if ($ucount == 1) {


        $userDetails = $Details->fetch_assoc();
        if ($user_type == 4) {

            $_SESSION["userDetails"] = $userDetails;
            $_SESSION["user_type"] = $user_type;
            echo "success";
        }else{
           

            if ($userDetails["verification_status_id"] == 2) {
                echo "1";
            } else {
    
                $_SESSION["userDetails"] = $userDetails;
                $_SESSION["user_type"] = $user_type;
                echo "success";
            }
        }


    } else {
        echo "invalid username or password";
    }
}

?>
