<!DOCTYPE html>
<html>
<head>
 <title>Table with database</title>
 <link rel="stylesheet" href="css/style.css" type="text/css">
</head>
<body>
  <form action="insert.php" method="post">
      <p>
          <label for="username">username:</label>
          <input type="text" name="username" id="username">
      </p>
      <p>
          <label for="password">password:</label>
          <input type="text" name="password" id="password">
      </p>
      <input type="submit" value="Submit">
  </form>
  <table>
  <tr>
  <th>Id</th>
  <th>Username</th>
  <th>Password</th>
  </tr>
  <?php
    include("./inc/database.php");
  ?>
  </table>
</body>
</html>
