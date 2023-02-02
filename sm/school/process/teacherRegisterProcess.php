<?php
require "../connection/connection.php";

$fname = $_POST["fname"];
$lname = $_POST["lname"];
$nic = $_POST["nic"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$grade = $_POST["grade"];
$username = $_POST["username"];
$password = $_POST["password"];

if (empty($fname)) {
    echo "Please Enter Your First Name";
} else if(strlen($fname) > 50) {
   echo "First Name Must Be Less Than 50 characters";
}else if (empty($lname)) {
    echo "Please Enter Your Last Name";
} else if(strlen($lname) > 50) {
   echo "Last Name Must Be Less Than 50 characters";
}else if (empty($email)) {
    echo "Please Enter Your Email";
}else if (!filter_var($email,FILTER_VALIDATE_EMAIL)) {
    echo "Invalid Email Address";
} else if(strlen($email) > 100) {
    echo "Email Must Be Less Than 100 characters";
}else if (empty($password)) {
    echo "Please Enter Your Password";
} else if(strlen($password) < 5 || strlen($password) > 20) {
    echo "Password Length should between 5 to 20 Characters";
}else{

    $r = Database::search(" SELECT * FROM `teacher` WHERE `email` = '".$email."' OR `username` = '".$username."' ");
    if ($r->num_rows > 0) {
       echo "User with the same email/username already exist";
    } else {
        $d = new DateTime();
    $tz = new DateTimeZone("Asia/Colombo");
    $d->setTimezone($tz);
    $date = $d->format("Y-m-d H:i:s");

    Database::iud("INSERT INTO `SMS`.`teacher` (`fname`, `lname`, `email`, `username`, `password`, `nic`, `subject_id`, `grade_id`, `registration_date`)
     VALUES ('".$fname."', '".$lname."', '".$email."', '".$username."', '".$password."', '".$nic."', '".$subject."', '".$grade."', '".$date."');
    ");
    echo "success";
    }

    
    

}
?>