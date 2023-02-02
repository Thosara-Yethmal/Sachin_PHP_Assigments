<?php

session_start();

if (isset($_SESSION["userDetails"])) {
    header("Location: home.php");
        exit();

} else {
    $userType = $_GET["ut"];
       ?>



<!DOCTYPE html>

<html>

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>SignIn</title>
    <link rel="stylesheet" href="img/logo.png">
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/adminsignin.css">


</head>

<body>


    <div class="container">
        <div class="row">

            <div class="login-box ">
                <div class="text-center">
                    <img src="img/logo.png" style="height: 250px; background-size: contain;" alt="">
                </div>
                <h2 class="mt-2" >Sign In As <?php
  if ($userType == 1) {
    echo "Teacher";
} else if($userType == 2) {
    echo "Academic";
} else if($userType == 3) {
    echo "Student";
} else if($userType == 4) {
    echo "Admin";
}
?> <Aside></Aside></h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="" required="" id="e">
                        <label>Username</label>
                    </div>
                    <div class="user-box" id="c">
                        <input type="text" name="" required="" id="p">
                        <label>Password</label>
                    </div>
                    <div class=" d-none" id="vcDiv">
                        <input type="text" name="" required="" id="vc">
                        <label>Verification Code</label>
                    </div>
                    <div class="text-center" id="loginbtn">
                        <a onclick="signin(<?php echo $userType; ?>);" href="#" class="text-primary" id="b">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Login
                        </a>
                    </div>
                    <div class="text-center d-none" id="verifybtn">
                        <a onclick="verify(<?php echo $userType; ?>);" href="#" class="text-primary" id="b">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Login
                        </a>
                    </div>

                </form>
            </div>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">First Time Login Verification Process</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label class="form-label">Enter The Verification Code That Has Sent By Admin</label>
                            <input class="form-control" type="text" placeholder="Verification Code" id="verCode">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onclick="verify();">Verify</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-12 d-none d-lg-block fixed-bottom text-center text-secondary">
                <p>&copy;2022 scholl.lk All Rights Reserved.</p>
            </div>

        </div>
    </div>

    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/script.js"></script>


</body>

</html>
       <?php
}


?>