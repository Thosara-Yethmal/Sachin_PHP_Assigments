<?php
require "../connection/connection.php";

$examMarksID = $_POST["eid"];
$sid = $_POST["sid"];
$marks = $_POST["marks"];
$comment = $_POST["comment"];
$result = $_POST["result"];

if (empty($marks)) {
    echo "Please Enter Marks";
}else if (empty($comment)) {
    echo "Please Enter Comment";
}else if (empty($result)) {
    echo "Please Enter Your Result";
} else if(strlen($comment) > 20) {
    echo "Comment Must Be Less Than 20 characters";
}else{

    Database::iud("UPDATE `SMS`.`exam_marks` SET `marks` = '$marks', `comment` = '$comment', `result` = '$result' WHERE (`id` = '$examMarksID');
    ");
    echo "success";

}
?>