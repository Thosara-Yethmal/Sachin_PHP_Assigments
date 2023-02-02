<?php
session_start();

$_SESSION["userDetails"] = null;
session_destroy();

header("Location: ../index.html");
exit();


?>
