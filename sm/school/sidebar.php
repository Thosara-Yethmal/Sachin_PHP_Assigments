<?php
// session_start();
?>

<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Custom fonts for this template-->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="sb-admin-2.min.css" rel="stylesheet">


    <title>User Panel</title>

</head>

<body id="page-top">

    <?php

    $name = $_SESSION["userDetails"]["username"];
    $email = $_SESSION["userDetails"]["email"];
    $type_id =  $_SESSION["user_type"];

    ?>

    <!-- Sidebar -->
    <?php

    if ($type_id == 1) {
        require "teacherMenu.php";
    } else if ($type_id == 2) {
        require "academicMenu.php";
    } else if ($type_id == 3) {
        require "studentMenu.php";
    } else if ($type_id == 4) {
        require "adminMenu.php";
    }


    ?>
    <!-- End of Sidebar -->



    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="js/script.js"></script>

    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

</body>

</html>