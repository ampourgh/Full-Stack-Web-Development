<?php
/* Verifies registered user username, the link to this page
   is included in the register.php username message
*/
require '../db.php';
session_start();

// Make sure username and hash variables aren't empty
if(isset($_GET['username']) && !empty($_GET['username']) AND isset($_GET['hash']) && !empty($_GET['hash']))
{
    $username = $mysqli->escape_string($_GET['username']);
    $hash = $mysqli->escape_string($_GET['hash']);

    // Select user with matching username and hash, who hasn't verified their account yet (active = 0)
    $result = $mysqli->query("SELECT * FROM promotion WHERE username='$username' AND hash='$hash' AND active='0'");

    if ( $result->num_rows == 0 )
    {
        $_SESSION['message'] = "Account has already been activated or the URL is invalid!";

        header("location: verificationStatus.php");
    }
    else {
        $_SESSION['message'] = "Your account has been activated!";

        // Set the user status to active (active = 1)
        $mysqli->query("UPDATE promotion SET active='1' WHERE username='$username' AND hash='$hash'") or die($mysqli->error);
        $_SESSION['active'] = 1;

        header("location: verificationStatus.php");
    }
}
else {
    $_SESSION['message'] = "Invalid parameters provided for verification!";
    header("location: verificationStatus.php");
}
?>
