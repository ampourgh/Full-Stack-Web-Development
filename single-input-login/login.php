<!DOCTYPE html>
<html>
<head>
  <title>Sign In</title>
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
  <script src="js/jquery-3.3.1.js"></script>
</head>
<body>
  <div class="pre-form">
  <div class="form">
    <?php

      function refresh() {
        $page = $_SERVER['PHP_SELF'];
        $sec = "5";
        echo "<meta http-equiv='refresh' content='".$sec."' URL='".$page."'>";
        echo "<br><a href='./login.php'><p>(click here to return back to login page, or wait for an automatic refresh in 5 seconds)</p></a>";
      }

      session_start();

      $mysqli = new mysqli('localhost', 'root', 'root', 'loginswitch');

      echo "<form action='login.php' method='POST' autocomplete='off'>"
           ."<div id='hide0' class='centered'>"
           ."<button id='hide1' class='button' name='signin' />Sign In</button>"
           ."</div>"
           ."</form>";

      if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['signin'])) {
          echo "<form action='login.php' method='POST' autocomplete='off'>"
               ."<br><h1>Username</h1><br>"
               ."<input id='signin' type='text' name='username' />"
               ."</form>";
        }
        elseif (isset($_POST['username'])) {

          $username = $mysqli->escape_string($_POST['username']);
          $result = $mysqli->query("SELECT * FROM accounts WHERE username='$username'");

          $user = $result->fetch_assoc();

          $_SESSION['password'] = $user['password'];

          if ( $result->num_rows == 0 ){

            $_SESSION['message'] = "<br><h1>Username does not exist with us!</h1>";
            echo $_SESSION['message'];
            refresh();
          }
          else {
            echo "<form action='login.php' method='POST' autocomplete='off'>"
                 ."<br><h1>Password</h1><br>"
                 ."<input id='signin' type='password' name='password' />"
                 ."</form>";
          }
        }
        elseif (isset($_POST['password'])) {

          if ($_POST['password'] == $_SESSION['password']) {
            echo "<br><h1>Welcome!</h1>"
                 . "<br><a href='./panel.php'><p>Head to Control Panel</p></a>";

          } else {
            echo "<br><h1>Wrong password.</h1>";
            session_unset();
            session_destroy();
            refresh();
          }
        }
      }

    ?>
  </div>
  </div>  
</body>
<script>
  document.getElementById('signin').submit();

  $(document).ready(function(){
      $("#hide1").click(function(){
        $("#hide0").hide();
      });
  });
</script>
</html>
