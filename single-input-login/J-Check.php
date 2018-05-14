<?PHP
include 'J-Init.php';
session_start();
  function get_results($username_post) {

    $result = $mysqli->query("SELECT * FROM accounts WHERE username='$username_post'");
    return $result;
  }
?>
