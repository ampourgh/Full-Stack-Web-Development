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
      include 'J-Init.php';

      //form section that duplicates into the sign in button, username input and password
      $G.$form = "<form action='login.php' method='POST' autocomplete='off'>";

      // HTML of the first page of login
      $G.$signIn.$start = $G.$form."<div id='hide0' class='centered'>"
                ."<button id='hide1' class='button' name='signin' />Sign In</button>"
                ."</div>"
                ."</form>";

      // the sign in input
      $G.$signIn.$userName = $G.$form."<br><h1>Username</h1><br>"
                          ."<input id='signin' type='text' name='username' />"
                          ."</form>";

      // the password input
      $G.$signIn.$password = $G.$form."<br><h1>Password</h1><br>"
                          ."<input id='signin' type='password' name='password' />"
                          ."</form>";

      echo $G.$signIn.$start;

      if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['signin'])) {
          echo $G.$signIn.$userName;
        }
        elseif (isset($_POST['username'])) {

          $username = $_POST['username'];
          $result = "SELECT * FROM JazzbUser WHERE User_Name='$username'";
          $stmt = sqlsrv_query($conn, $result);

          if( $stmt === false) {
              die( print_r( sqlsrv_errors(), true) );
          }

          $user = $result->sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC);

          $_SESSION['password'] = $user['User_Password'];

          if ( $result->num_rows == 0 ){

            $_SESSION['message'] = "<br><h1>Username does not exist with us!</h1>";
            echo $_SESSION['message'];
            refresh();
          }
          else {
            echo $G.$signIn.$password;
          }
        }
        elseif (isset($_POST['password'])) {

          if ($_POST['password'] == $_SESSION['password']) {
            echo "<br><h1>Welcome!</h1>"
                 . "<br><a href='./panel.php'><p>Head to Control Panel</p></a>";
            $G.$_SESSION['loggedIn'] = True;
            header("location: J-Checklogin.php");

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
