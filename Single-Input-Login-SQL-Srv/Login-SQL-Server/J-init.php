<?php
  session_start();

  $uid = "sa";
  $pwd = "Sql318!";
  $connectionInfo = array( "UID"=>$uid,
                           "PWD"=>$pwd,
                           "Database"=>"JazzB");
  $serverName = "JAZZB-WWW";
  $connectionInfo = array( "Database"=>"JazzB", "UID"=>"sa", "PWD"=>"Sql318!");
  $conn = sqlsrv_connect( $serverName, $connectionInfo);

  if( $conn ) {
     echo "Connection established.<br />";
  } else {
      echo "Connection could not be established.<br />";
      die( print_r( sqlsrv_errors(), true));
  }

  // if user placed the wrong password, redirect back to the beginning of the login page
  function refresh() {
    $G.$page = $_SERVER['PHP_SELF'];
    $G.$sec = "5";
    echo "<meta http-equiv='refresh' content='".$G.$sec."' URL='".$G.$page."'>";
    echo "<br><a href='./login.php'><p>(click here to return back to login page, or wait for an automatic refresh in 5 seconds)</p></a>";
  }
?>
