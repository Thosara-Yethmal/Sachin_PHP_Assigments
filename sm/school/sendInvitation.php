<?php



session_start();

require "connection/connection.php";

if (isset($_SESSION["userDetails"])) {
    $user_type = $_GET["ut"];
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>Student Registration</title>


        <link href="css/all.min.css" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">
        <link rel="stylesheet" href="css/bootstrap.min.css">
        <link href="css/sb-admin-2.min.css" rel="stylesheet">

    </head>

    <body id="page-top">

        <!-- Page Wrapper -->
        <div id="wrapper">

            <?php require "sidebar.php"; ?>

            <div>

            </div>

            <!-- Content Wrapper -->
            <div id="content-wrapper" class="d-flex flex-column">

                <div class="row">

                    <div class="col-6 offset-3 mt-5">

                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Send Invitations To

                            <?php
                            if ($user_type == 1) {
                                echo "Teachers";
                            } else if ($user_type == 2) {
                                echo "Academic";
                            } else if ($user_type == 3) {
                                echo "Student";
                            }
                            ?>

                        </p>

                        <div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Search By Email or ID" aria-label="Search" aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </div>

                    <!-- Main Content -->
                    <div class="col-10 offset-1 mt-5">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">User Type</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Invite</th>

                                </tr>
                            </thead>
                            <tbody>

                                <?php

                                $query = "";

                                if ($user_type == 1) {
                                    $query = "SELECT * FROM `teacher` ";
                                } else if ($user_type == 2) {
                                    $query = "SELECT * FROM `academic` ";
                                } else if ($user_type == 3) {
                                    $query = "SELECT * FROM `student` ";
                                }

                                $details = Database::search($query);

                                $rowCount = $details->num_rows;

                                for ($i = 0; $i < $rowCount; $i++) {
                                    $detailsRow = $details->fetch_assoc();
                                ?>
                                    <tr>
                                        <th scope="row"><?php echo $detailsRow["id"]; ?></th>
                                        <td><?php echo $detailsRow["fname"] . " " . $detailsRow["lname"]; ?></td>
                                        <td><?php echo $detailsRow["email"]; ?></td>
                                        <td>Teacher</td>
                                        <td class="fw-bold"><?php echo $detailsRow["username"]; ?></td>
                                        <td><?php echo $detailsRow["password"]; ?></td>
                                        <?php

                                        $vid = $detailsRow["verification_status_id"];
                                        $verification = Database::search("SELECT `status` FROM `verification_status` WHERE `id` = '" . $vid . "' ");
                                        $verificationDetails = $verification->fetch_assoc();

                                        ?>
                                        <td><?php echo $verificationDetails["status"]; ?></td>
                                        <?php
                                        if ($vid == 2 && $detailsRow["verification_code"] == 0) {
                                        ?><td><button class="btn btn-outline-primary" onclick='sendInvitations(<?php echo $detailsRow["id"]; ?>,<?php echo $user_type; ?>);'>Send Invitation</button></td><?php
                                                                                                                                                                                                            }
                                                                                                                                                                                                            if ($detailsRow["verification_code"] != 0 && $vid != 1) {
                                                                                                                                                                                                                ?> <td><button class="btn btn-outline-success" onclick='sendInvitations(<?php echo $detailsRow["id"]; ?>,<?php echo $user_type; ?>);'>Invite Again</button> <?php
                                                                                                                                                                                                            }

                ?>

                                    </tr>
                                <?php
                                }

                                ?>


                            </tbody>
                        </table>
                    </div>
                    <!-- End of Main Content -->

                </div>






            </div>
            <!-- End of Content Wrapper -->

        </div>
        <!-- End of Page Wrapper -->


        <!-- Bootstrap core JavaScript-->
        <script src="js/jquery-3.6.0.min.js"></script>
        <script src="js/bootstrap.bundle.min.js"></script>
        <script src="js/script.js"></script>

        <!-- Core plugin JavaScript-->
        <script src="js/jquery.easing.min.js"></script>

        <!-- Custom scripts for all pages-->
        <script src="js/sb-admin-2.min.js"></script>

    </body>

    </html>
<?php
} else {
    header("Location: signIn.php");
    exit();
}


?>