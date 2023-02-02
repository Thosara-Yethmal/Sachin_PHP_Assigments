<?php

session_start();

require "../connection/connection.php";

$username =  $_POST["e"];
$password = $_POST["p"];
$user_type = $_POST["ut"];
$code = $_POST["vc"];


if (empty($username)) {
    echo "Please enter your username";
} else if (empty($password)) {
    echo "Please enter your password";
} else if (!isset($code)) {
    echo "Please enter verification code";
} else {

    $query = "";

    if ($user_type == 1) {
        $query = "SELECT * FROM `teacher` WHERE `username` = '" . $username . "' AND `password` = '" . $password . "' ";
    } else if ($user_type == 2) {
        $query = "SELECT * FROM `academic` WHERE `username` = '" . $username . "' AND `password` = '" . $password . "' ";
    } else if ($user_type == 3) {
        $query = "SELECT * FROM `student` WHERE `username` = '" . $username . "' AND `password` = '" . $password . "' ";
    }


    $details =  Database::search($query);
    $ucount = $details->num_rows;

    $detailsRow = $details->fetch_assoc();

    if ($ucount == 1) {

        if ($detailsRow["verification_code"] == 0) {
            echo "Please Ask Admin/Teacher Or Academic Officer For Verification Code";
        } else  if ($detailsRow["verification_code"] == $code) {

            if ($detailsRow["verification_status_id"] =="1") {
                echo "Error";
            } else {

                $userID = $detailsRow["id"];

                $query2;

                if ($user_type == 1) {
                    $query2 = "UPDATE `SMS`.`teacher` SET `verification_status_id` = '1' WHERE (`id` = '".$userID."')";
                } else if ($user_type == 2) {
                    $query2 = "UPDATE `SMS`.`academic` SET `verification_status_id` = '1' WHERE (`id` = '".$userID."')";
                } else if ($user_type == 3) {
                    $query2 = "UPDATE `SMS`.`student` SET `verification_status_id` = '1' WHERE (`id` = '".$userID."')";
                }

           Database::iud($query2);

                $_SESSION["userDetails"] = $detailsRow;
                $_SESSION["user_type"] = $user_type;
                echo "success";
            }
        }else{
            echo "verification code not matched";
        }
    } else {
        echo "invalid Details";
    }
}
