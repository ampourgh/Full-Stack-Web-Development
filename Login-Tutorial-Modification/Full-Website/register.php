<?php
/* Registration process, inserts user info into the database
   and sends account confirmation email message
 */

$target = "./images/".basename($_FILES['image']['name']);

// Set session variables to be used on profile.php page
$_SESSION['email'] = $_POST['email'];
$_SESSION['username'] = $_POST['username'];
$_SESSION['company'] = $_POST['company'];
$_SESSION['image'] = $_FILES['image']['name'];

// Escape all $_POST variables to protect against SQL injections
$username = $mysqli->escape_string($_POST['username']);
$company = $mysqli->escape_string($_POST['company']);
$email = $mysqli->escape_string($_POST['email']);
$image = $mysqli->escape_string($_FILES['image']['name']);
$password = $mysqli->escape_string(password_hash($_POST['password'], PASSWORD_BCRYPT));
$hash = $mysqli->escape_string( md5( rand(0,1000) ) );

// Check if user with that email already exists
$result = $mysqli->query("SELECT * FROM users WHERE email='$email'") or die($mysqli->error());
$activated = $mysqli->query("SELECT * FROM users WHERE email='$email' AND hash='$hash' AND active='0'");

// We know user email exists if the rows returned are more than 0
if ( $result->num_rows > 0 ) {

  $_SESSION['message'] = 'User with this email already exists!';
  header("location: error.php");

}
elseif ( $activated->num_rows == 0 ) {

  move_uploaded_file($_FILES['image']['tmp_name'], $target);

  $sql = "INSERT INTO users (username, company, email, image, password, hash) "
          . "VALUES ('$username','$company','$email', '$image', '$password', '$hash')";

  if ( $mysqli->query($sql) ) {
    $_SESSION['active'] = 1; //0 until user activates their account with verify.php
    $_SESSION['logged_in'] = true; // So we know the user has logged in
    $_SESSION['message'] = 'Thanks for registering!';
    header("location: success_without_activation.php");
  } else {
    $_SESSION['message'] = 'Registration failed!';
    header("location: error.php");
  }

}
else { // Email doesn't already exist in a database, proceed...

    // active is 0 by DEFAULT (no need to include it here)
    $sql = "INSERT INTO users (username, company, email, image, password, hash) "
            . "VALUES ('$username','$company','$email', '$image', '$password', '$hash')";

    // Add user to the database
    if ( $mysqli->query($sql) ){

        $_SESSION['active'] = 0; //0 until user activates their account with verify.php
        $_SESSION['logged_in'] = true; // So we know the user has logged in
        $_SESSION['message'] =

                 "Confirmation link has been sent to $email, please verify
                 your account by clicking on the link in the message!";

        // Send registration confirmation link (verify.php)
        $to      = $email;
        $subject = 'Account Verification';
        $message_body = '
        Hello '.$username.',

        Thank you for signing up!

        Please click this link to activate your account:

        http://localhost/login-system/verify.php?email='.$email.'&hash='.$hash;

        mail( $to, $subject, $message_body );

        header("location: profile.php");

    }

    else {
        $_SESSION['message'] = 'Registration failed!';
        header("location: error.php");
    }

}
