<?php



session_start();

require "connection/connection.php";

if (isset($_SESSION["userDetails"])) {
    $user_type = $_SESSION["user_type"];
?>
    <!DOCTYPE html>
    <html lang="en">

    <head>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="description" content="">
        <meta name="author" content="">

        <title>View Assignment</title>


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

                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Your Assignments</p>

                        <div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span class="input-group-text border-0" id="search-addon">
                                <i class="fas fa-search"></i>
                            </span>
                        </div>
                    </div>

                    <!-- Main Content -->
                    <div class="col-11 ms-lg-5 mt-5">

                        <table class="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">Assignment ID</th>
                                    <th scope="col">Name</th>
                                    <?php
                                    if ($user_type != 3) {
                                    ?><th scope="col">Grade</th><?php
                                                            }
                                                                ?>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    <th scope="col">Assignment</th>
                                    <?php
                                    if ($user_type == 3) {
                                    ?>
                                        <th scope="col">Answer</th>
                                    <?php
                                    }
                                    if ($user_type == 3) {
                                    ?>
                                        <th scope="col">Status</th>
                                        <th scope="col">Marks</th>
                                    <?php
                                    }
                                    ?>

                                </tr>
                            </thead>
                            <tbody>

                                <?php

                                $query = "";
                                $userID = $_SESSION["userDetails"]["id"];
                                $grade_id = $_SESSION["userDetails"]["grade_id"];

                                if ($user_type == 1) {
                                    $query = "SELECT * FROM `assignment` WHERE `teacher_id` = '" . $userID . "' ORDER BY `start_date` DESC; ";
                                } else if ($user_type == 2) {
                                    $query = "SELECT * FROM `assignment` ORDER BY `start_date` DESC;";
                                } else if ($user_type == 3) {
                                    $query = "SELECT * FROM `assignment` WHERE `grade_id` = '" . $grade_id . "' ORDER BY `start_date` DESC;";
                                } else if ($user_type == 4) {
                                    $query = "SELECT * FROM `assignment` ORDER BY `start_date` DESC;";
                                }

                                $details = Database::search($query);

                                $rowCount = $details->num_rows;

                                for ($i = 0; $i < $rowCount; $i++) {
                                    $detailsRow = $details->fetch_assoc();
                                    $assigmentID = $detailsRow["id"];
                                ?>
                                    <tr>
                                        <th scope="row"><?php echo $assigmentID; ?></th>
                                        <td><?php echo $detailsRow["assignment_name"]; ?></td>

                                        <?php

                                        $sid = $detailsRow["subject_id"];
                                        $gid = $detailsRow["grade_id"];

                                        $subject = Database::search("SELECT * FROM `subject` WHERE `id` = '" . $sid . "' ");
                                        $subjectRow = $subject->fetch_assoc();

                                        $grade = Database::search("SELECT * FROM `grade` WHERE `id` = '" . $gid . "' ");
                                        $gradeRow = $grade->fetch_assoc();

                                        $status = Database::search("SELECT * FROM SMS.exam_marks a
                                        INNER JOIN `assignment_submit_status` b ON a.submit_status_id = b.id
                                        WHERE a.student_id = '" . $userID . "' ");
                                        $statusRow = $status->fetch_assoc();
                                        $n = $status->num_rows;


                                        if ($user_type != 3) {
                                        ?><td class="fw-bold"><?php echo $gradeRow["grade"]; ?></td><?php
                                                                                                }
                                                                                                    ?>

                                        <td><?php echo $subjectRow["name"]; ?></td>
                                        <td><?php echo $detailsRow["start_date"]; ?></td>
                                        <td><?php echo $detailsRow["last_date"]; ?></td>
                                        <td><a class="btn btn-primary" href="assignment/62aac43894ab0Web Programming 1 - Research_H7DT_04_EX_01.pdf">Download</a></td>
                                        <?php

                                        $today = date("Y/m/d");
                                        $endDate = $detailsRow["last_date"];

                                        $dateEnd = strtotime($endDate);
                                        $dateToday = strtotime($today);

                                        if ($user_type == 3) {

                                            if ($dateToday <= $dateEnd) {
                                        ?>
                                                <td>
                                                    <input type="file" class="form-control" id="assignment" />
                                                    <button class="btn btn-outline-primary" onclick="uploadAnswer(<?php echo $assigmentID; ?>);"><i class="fas fa-search"></i></button>

                                                </td><?php
                                                    } else {
                                                        ?><td>-</td><?php

                                                                }
                                                                if ($n == 2) {
                                                                    ?><td>Submited</td><?php
                                                                }else{
                                                                    ?><td>Not Submited</td><?php  
                                                                }if ($statusRow["marks"]== 0) {
                                                                    ?><td>Not Released</td><?php 
                                                                } else {
                                                                    ?><td><?php echo $statusRow["marks"]; ?></td><?php 
                                                                }
                                                                

                                                               
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