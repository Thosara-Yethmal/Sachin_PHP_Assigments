<?php

session_start();
require "connection/connection.php";

if (isset($_SESSION["userDetails"])) {

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
        <link href="css/sb-admin-2.min.css" rel="stylesheet">


        <title>Dashboard</title>
        <link rel="icon" href="images/logo.png" />

    </head>

    <body id="page-top">

        <?php

        $today = date("Y-m-d");
        $teacher = Database::search("SELECT * FROM `teacher`");
        $student = Database::search("SELECT * FROM `student`");
        $academic = Database::search("SELECT * FROM `academic`");
        $admin = Database::search("SELECT * FROM `admin`");

        $numberOfTechers = $teacher->num_rows;
        $numberOfStudents = $student->num_rows;
        $numberOfAcademic = $academic->num_rows;
        $numberOfAdmins = $admin->num_rows;



        ?>


        <!-- Page Wrapper -->
        <div id="wrapper">

            <!-- Sidebar -->
            <?php require "sidebar.php"; ?>
            <!-- End of Sidebar -->

            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">

                <!-- Main Content -->
                <div id="content">

                    <!-- Begin Page Content -->
                    <div class="container-fluid">

                        <!-- Page Heading -->
                        <div class="text-center my-3">
                            <h1 class="h1 font-weight-bolder mb-0 text-gray-800">Dashboard</h1>
                        </div>

                        <!-- Content Row -->
                        <div class="row">

                            <?php

                            $name = $_SESSION["userDetails"]["username"];
                            $email = $_SESSION["userDetails"]["email"];
                            $type_id =  $_SESSION["user_type"];

                            ?>

                            <!-- Sidebar -->
                            <?php

                            if ($type_id == 1) {
                                require "teacherHome.php";
                            } else if ($type_id == 2) {
                                require "academicHome.php";
                            } else if ($type_id == 3) {
                                require "studentHome.php";
                            } else if ($type_id == 4) {
                                require "adminHome.php";
                            }


                            ?>

                        </div>

                        <!-- Content Row -->

                    </div>
                    <!-- /.container-fluid -->

                </div>
                <!-- End of Main Content -->

                <!-- Footer -->
                <footer class="sticky-footer bg-white">
                    <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright &copy; mic.lk 2021</span>
                        </div>
                    </div>
                </footer>
                <!-- End of Footer -->

            </div>
            <!-- End of Content Wrapper -->

        </div>
        <!-- End of Page Wrapper -->

        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>

        <!-- Logout Modal-->
        <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                        <a class="btn btn-primary" href="login.html">Logout</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bootstrap core JavaScript-->
        <script src="vendor/jquery/jquery.min.js"></script>
        <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

        <!-- Core plugin JavaScript-->
        <script src="vendor/jquery-easing/jquery.easing.min.js"></script>

    </body>

    </html>


<?php
} else {
    header("Location: index.html");
    exit();
}

?>