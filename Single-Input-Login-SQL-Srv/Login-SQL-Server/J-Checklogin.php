<?PHP
  session_start();

  if ($G.$_SESSION["loggedIn"] != true) {
    redirect_to_login();
  } else {
    echo "blank";
  }

  function redirect_to_login() {
    header("location: login.php");
  }

?>
