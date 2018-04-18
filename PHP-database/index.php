<!DOCTYPE html>
<html>
<head>
 <title>Table with database</title>
 <link rel="stylesheet" href="css/style.css" type="text/css">
 <script src="js/vue-2.5.16.js"></script>
</head>
<body>
  <section id="preview">
    <form action="insert.php" method="post">
      <p>
          <label for="username">username:</label>
          <input type="text" name="username" id="username" v-model="form.username" />
      </p>
      <p>
          <label for="password">password:</label>
          <input type="text" name="password" id="password" v-model="form.password" />
      </p>
      <input type="submit" value="Submit">
    </form>
    <p>USER: {{form.username}}</p>
    <p>PASS: {{form.password}}</p>
  </section>
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
  <script src="js/form.js"></script>
</body>
</html>
