<?php
session_start();


require "../connection/connection.php";

            require '../emailSending/Exception.php'; 
            require '../emailSending/PHPMailer.php'; 
            require '../emailSending/SMTP.php'; 
            use PHPMailer\PHPMailer\PHPMailer; 

            $userId = $_POST["uid"];
            $userType = $_POST["ut"];

    if (isset($_SESSION["userDetails"])) {

    if (empty($userId)) {
        echo "Error";
    } else {

    $searchQuery = "";
        if ($userType == 1) {
            $searchQuery = "SELECT * FROM `teacher` WHERE `id` ='".$userId."'";
        }else if($userType == 2) {
            $searchQuery = "SELECT * FROM `academic` WHERE `id` ='".$userId."'";
        }else if($userType == 3){
            $searchQuery = "SELECT * FROM `student` WHERE `id` ='".$userId."'";
        }

        

        
        $rs = Database::search($searchQuery);
        $n = $rs->num_rows;
        if ($n == 1) {
            $code = uniqid();

            $updateQuery = "";
            if ($userType == 1) {
                $updateQuery = "UPDATE `teacher` SET `verification_code` = '$code' WHERE `id` = '$userId' ";
            }else if($userType == 2) {
                $updateQuery = "UPDATE `academic` SET `verification_code` = '$code' WHERE `id` = '$userId' ";
            }else if($userType == 3){
                $updateQuery = "UPDATE `student` SET `verification_code` = '$code' WHERE `id` = '$userId' ";
            }

            Database::iud($updateQuery);

            $userDetails = $rs->fetch_assoc();
            $username = $userDetails["username"];
            $password = $userDetails["password"];
            $email = $userDetails["email"];


            // email code start             
            $mail = new PHPMailer; 
            $mail->IsSMTP();
            $mail->Host = 'smtp.gmail.com'; 
            $mail->SMTPAuth = true; 
            $mail->Username = 'rukshan19950212@gmail.com'; 
            $mail->Password = 'ofnyaqlwjcnqugvc';
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;
            $mail->setFrom('rukshan@gmail.com', 'eshop'); 
            $mail->addReplyTo('rukshan19950212@gmail.com', 'eshop'); 
            $mail->addAddress($email); 
            $mail->isHTML(true); 
            $mail->Subject = 'Rukshan'; 
            $bodyContent = '<h1 style="color:red">Username : '.$username.'</h1>
            <h1 style="color:red">Your verification code : '.$password.'</h1>
            <h1 style="color:red">Your verification code : '.$code.'</h1>
            '; 
            $mail->Body    = $bodyContent; 
            
            if(!$mail->send()) { 
                echo 'verification code sending failed'; 
            } else { 
                echo 'Success'; 
            } 
            // email code end 
        } else {
            echo "User Not Found";
        }        
        
    }
    
}else{

header("Location: ../signIn.php");
exit();

}
?>