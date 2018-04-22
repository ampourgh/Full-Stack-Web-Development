<!DOCTYPE html>
<html>
<head>
  <title>Sign In</title>
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
</head>
<body>
  <div class="form">
    <?php
      session_start();

      $mysqli = new mysqli('localhost', 'root', 'root', 'loginswitch');

      echo "<form action='login.php' method='POST' autocomplete='off'>"
           ."<div class='centered'>"
           ."<button class='button' name='signin' />Sign In</button>"
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
            $_SESSION['message'] = "<h1>Username does not exist with us!</h1>";
            echo $_SESSION['message'];
          }
          else {
            echo "<form action='login.php' method='POST' autocomplete='off'>"
                 ."<br><h1>Password</h1><br>"
                 ."<input id='signin' type='text' name='password' />"
                 ."</form>";
          }
        }
        elseif (isset($_POST['password'])) {

          if ($_POST['password'] == $_SESSION['password']) {
            echo "<br><h1>Welcome!</h1>";
          } else {
            echo "<br><h1>Wrong password.</h1>";
            session_unset();
            session_destroy();
          }
        }
      }

    ?>
  </div>
</body>
<script>
  document.getElementById('signin').submit();
</script>
</html>
