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

        <title>Submit Marks</title>


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

                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Submit Marks</p>

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
                                    <th scope="col">Assignment ID</th>
                                    <th scope="col">Student Name</th>
                                    <th scope="col">Marks</th>
                                    <th scope="col">Result</th>
                                    <th scope="col">Comment</th>
                                    <th scope="col">Action</th>

                                </tr>
                            </thead>
                            <tbody>

                                <?php
                                $user_type = $_SESSION["user_type"];
                                $uid = $_SESSION["userDetails"]["id"];
                                $query = "";


                                if ($user_type == 1) {
                                    $query = "SELECT a.*,b.`fname`,b.`lname` FROM `exam_marks` a INNER JOIN `student` b ON a.`student_id` = b.`id` WHERE b.`teacher_id` = '$uid'; ";
                                } else if ($user_type == 2) {
                                    $query = "SELECT a.*,b.`fname`,b.`lname` FROM `exam_marks` a INNER JOIN `student` b ON a.`student_id` = b.`id`";
                                } else if ($user_type == 4) {
                                    $query = "SELECT a.*,b.`fname`,b.`lname` FROM `exam_marks` a INNER JOIN `student` b ON a.`student_id` = b.`id`";
                                }

                                $details = Database::search($query);
                                $rowCount = $details->num_rows;

                                for ($i = 0; $i < $rowCount; $i++) {
                                    $detailsRow = $details->fetch_assoc();
                                ?>
                                    <tr>
                                        <th scope="row"><?php echo $detailsRow["id"]; ?></th>
                                        <td><?php echo $detailsRow["fname"] . " " . $detailsRow["lname"]; ?></td>
                                        <td><input class="form-control" type="text" value="<?php echo $detailsRow["marks"]; ?>" id="marks"></td>
                                        <td><input class="form-control" type="text" value="<?php echo $detailsRow["result"]; ?>" id="result"></td>
                                        <td><input class="form-control" type="text" value="<?php echo $detailsRow["comment"]; ?>" id="comment"></td>                                                                                                                                                                                                                                                                                                                                                                       ?>
                                        <td><button class="btn btn-primary" onclick="submitAnswer(<?php echo $detailsRow['id']; ?>,<?php echo $detailsRow['id']; ?>);">Submit</button></td>                                                                                                                                                                                                                                                                                                                                                                          ?>

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