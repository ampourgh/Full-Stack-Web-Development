<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <title>Success</title>
  <?php include 'css/css.html'; ?>
</head>
<body>
<div class="form">
    <h1><?= 'Status'; ?></h1>
    <p>
    <?php
    if( isset($_SESSION['message']) AND !empty($_SESSION['message']) ):
        echo $_SESSION['message'];
    else:
        header( "location: 001.php" );
    endif;
    ?>
    </p>
</div>
</body>
</html>
