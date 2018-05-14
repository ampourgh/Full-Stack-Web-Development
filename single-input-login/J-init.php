<?php
  session_start();

  $G.$host = 'localhost';
  $G.$user = 'root';
  $G.$pass = 'root';
  $G.$db = 'loginswitch';
  $mysqli = new mysqli($G.$host, $G.$user, $G.$pass, $G.$db) or die($mysqli->error);

  // if user placed the wrong password, redirect back to the beginning of the login page
  function refresh() {
    $G.$page = $_SERVER['PHP_SELF'];
    $G.$sec = "5";
    echo "<meta http-equiv='refresh' content='".$G.$sec."' URL='".$G.$page."'>";
    echo "<br><a href='./login.php'><p>(click here to return back to login page, or wait for an automatic refresh in 5 seconds)</p></a>";
  }
?>
