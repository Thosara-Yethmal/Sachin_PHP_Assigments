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
                            <h1 class="h1 font-weight-bolder mb-0 text-gray-800">My Profile</h1>
                        </div>

                        <!-- Content Row -->
                        <div class="col-12">
                            <section style="background-color: #eee;">
                                <div class="container py-5">

                                    <div class="row">


                                        <?php
                                        $query = "";
                                        $userType = $_SESSION["user_type"];
                                        $userID = $_SESSION["userDetails"]["id"];
                                        $email = $_SESSION["userDetails"]["email"];
                                        $fname = $_SESSION["userDetails"]["fname"];
                                        $lname = $_SESSION["userDetails"]["lname"];
                                        $nic = $_SESSION["userDetails"]["nic"];
                                        $username = $_SESSION["userDetails"]["username"];
                                        $password = $_SESSION["userDetails"]["password"];
                                        $registrationDate = $_SESSION["userDetails"]["registration_date"];

                                        $Type = Database::search("SELECT `name` FROM `user_type` WHERE `id` = '" . $userType . "'");
                                        $typerow = $Type->fetch_assoc();


                                        ?>

                                        <div class="col-lg-4">
                                            <div class="card mb-4">
                                                <div class="card-body text-center">
                                                    <img src="img/profileImg.png" alt="avatar" class="rounded-circle img-fluid" style="width: 150px;">
                                                    <h5 class="my-3"><?php echo $fname . " " . $lname; ?></h5>
                                                    <p class="text-muted mb-1"><?php echo $typerow["name"]; ?></p>
                                                </div>
                                            </div>
                                            <div class="card mb-4 mb-lg-0">
                                                <div class="card-body p-0">
                                                    <ul class="list-group list-group-flush rounded-3">
                                                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                                            <i class="fas fa-globe fa-lg text-warning"></i>
                                                            <p class="mb-0">https://github.com</p>
                                                        </li>
                                                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                                            <i class="fab fa-github fa-lg" style="color: #333333;"></i>
                                                            <p class="mb-0"><?php echo $fname; ?></p>
                                                        </li>
                                                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                                            <i class="fab fa-twitter fa-lg" style="color: #55acee;"></i>
                                                            <p class="mb-0"><?php echo $lname; ?>12</p>
                                                        </li>
                                                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                                            <i class="fab fa-instagram fa-lg" style="color: #ac2bac;"></i>
                                                            <p class="mb-0"><?php echo $fname; ?>12</p>
                                                        </li>
                                                        <li class="list-group-item d-flex justify-content-between align-items-center p-3">
                                                            <i class="fab fa-facebook-f fa-lg" style="color: #3b5998;"></i>
                                                            <p class="mb-0"><?php echo $lname; ?>12</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- left column end  -->

                                        <div class="col-lg-8">
                                            <div class="card mb-4 text-center">
                                                <div class="card-body">
                                                    <div class="row">
                                                        <div class="col-sm-3">
                                                            <p class="mb-0">First Name</p>
                                                        </div>
                                                        <div class="col-sm-9">
                                                            <input class="text-muted mb-0" id="inputVal1" value="<?php echo $fname; ?>" />
                                                            <button class="btn btn-success" onclick="updateDetails('<?php echo 'fname'; ?>','1'); ">
                                                                <i class="fas fa-pencil-alt"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-3">
                                                            <p class="mb-0">Last Name</p>
                                                        </div>
                                                        <div class="col-sm-9">
                                                            <input class="text-muted mb-0" id="inputVal2" value="<?php echo $lname; ?>" />
                                                            <button class="btn btn-success" onclick="updateDetails('<?php echo 'lname'; ?>','2'); ">
                                                                <i class="fas fa-pencil-alt"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-3">
                                                            <p class="mb-0">Email</p>
                                                        </div>
                                                        <div class="col-sm-9">
                                                            <p class="text-muted mb-0" id="inputVa2"><?php echo $email; ?></p>

                                                        </div>
                                                    </div>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-3">
                                                            <p class="mb-0">NIC</p>
                                                        </div>
                                                        <div class="col-sm-9">
                                                            <p class="text-muted mb-0" id="inputVa2"><?php echo $nic; ?></p>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-3">
                                                            <p class="mb-0">Registerd Date</p>
                                                        </div>
                                                        <div class="col-sm-9">
                                                            <p class="text-muted mb-0" id="inputVa2"><?php echo $registrationDate; ?></p>

                                                        </div>
                                                    </div>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-3">
                                                            <p class="mb-0">Username</p>
                                                        </div>
                                                        <div class="col-sm-9">
                                                            <input class="text-muted mb-0" id="inputVal3" value="<?php echo $username; ?>" />
                                                            <button class="btn btn-success" onclick="updateDetails('<?php echo 'username'; ?>','3'); ">
                                                                <i class="fas fa-pencil-alt"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <hr>
                                                    <div class="row">
                                                        <div class="col-sm-3">
                                                            <p class="">Password</p>
                                                        </div>
                                                        <div class="col-sm-9">
                                                            <input class="text-muted mb-0" id="inputVal4" value="<?php echo $password; ?>" />
                                                            <button class="btn btn-success" onclick="updateDetails('<?php echo 'password'; ?>','4'); ">
                                                                <i class="fas fa-pencil-alt"></i>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                                <!-- card body  -->

                                            </div>
                                            <!-- card body  -->

                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="card mb-4 mb-md-0">
                                                        <div class="card-body">
                                                            <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                                                            </p>
                                                            <p class="mb-1" style="font-size: .77rem;"> Grade 01</p>
                                                            <div class="progress rounded" style="height: 5px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p class="mt-4 mb-1" style="font-size: .77rem;"> Grade 02</p>
                                                            <div class="progress rounded" style="height: 5px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p class="mt-4 mb-1" style="font-size: .77rem;"> Grade 03</p>
                                                            <div class="progress rounded" style="height: 5px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p class="mt-4 mb-1" style="font-size: .77rem;"> Grade 04</p>
                                                            <div class="progress rounded" style="height: 5px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p class="mt-4 mb-1" style="font-size: .77rem;"> Grade 05</p>
                                                            <div class="progress rounded mb-2" style="height: 5px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="card mb-4 mb-md-0">
                                                        <div class="card-body">
                                                            <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                                                            </p>
                                                            <p class="mb-1" style="font-size: .77rem;"> Grade 06</p>
                                                            <div class="progress rounded" style="height: 5px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p class="mt-4 mb-1" style="font-size: .77rem;"> Grade 07</p>
                                                            <div class="progress rounded" style="height: 5px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 72%" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p class="mt-4 mb-1" style="font-size: .77rem;"> Grade 08</p>
                                                            <div class="progress rounded" style="height: 5px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 89%" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p class="mt-4 mb-1" style="font-size: .77rem;"> Grade 09</p>
                                                            <div class="progress rounded" style="height: 5px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p class="mt-4 mb-1" style="font-size: .77rem;"> Grade 10</p>
                                                            <div class="progress rounded mb-2" style="height: 5px;">
                                                                <div class="progress-bar" role="progressbar" style="width: 66%" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                        </div>
                        </section>
                    </div>

                    <!-- Content Row -->

                </div>
                <!-- /.container-fluid -->

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
            <!-- End of Main Content -->


        </div>
        <!-- End of Content Wrapper -->

        </div>
        <!-- End of Page Wrapper -->

        <!-- Scroll to Top Button-->
        <a class="scroll-to-top rounded" href="#page-top">
            <i class="fas fa-angle-up"></i>
        </a>


        <!-- Bootstrap core JavaScript-->
        <script src="js/jquery-3.6.0.min.js"></script>
        <script src="js/bootstrap.bundle.js"></script>

        <!-- Core plugin JavaScript-->
        <script src="js/jquery.easing.min.js"></script>

    </body>

    </html>


<?php
} else {
    header("Location: index.html");
    exit();
}

?>