<?php
/* Main page with two forms: sign up and log in */
require 'db.php';
session_start();
?>
<!DOCTYPE html>
<html>
<head>
  <title>Sign-Up/Login Form</title>
  <?php include './css/css.html'; ?>
  <script src="js/vue-2.5.16.js"></script>
</head>

<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    if (isset($_POST['login'])) { //user logging in

        require 'login.php';

    }

    elseif (isset($_POST['register'])) { //user registering

        require 'register.php';

    }
}
?>
<body>
  <div class="form">

      <ul class="tab-group">
        <li class="tab"><a href="#signup">Sign Up</a></li>
        <li class="tab active"><a href="#login">Log In</a></li>
      </ul>

      <div class="tab-content">

         <div id="login">
          <h1>Login</h1>

          <form action="index.php" method="post" autocomplete="off">

            <div class="field-wrap">
            <h3>Email Address<span class="req">*</span></h3>
            <input type="email" required autocomplete="off" name="email"/>
          </div>

          <div class="field-wrap">
            <h3>Password<span class="req">*</span></h3>
            <input type="password" required autocomplete="off" name="password"/>
          </div>

          <p class="forgot"><a href="forgot.php">Forgot Password?</a></p>

          <button class="button button-block" name="login" />Log In</button>

          </form>

        </div>

        <div id="signup">
          <h1>Registration</h1>

          <form action="index.php" method="POST" enctype="multipart/form-data" autocomplete="off">

          <div class="top-row">
            <div class="field-wrap">
              <h3>Username<span class="req">*</span></h3>
              <input type="text" required autocomplete="off" name='username' />
            </div>

            <div class="field-wrap">
              <h3>Company<span class="req">*</span></h3>
              <input type="text"required autocomplete="off" name='company' />
            </div>
          </div>

          <div class="field-wrap">
            <h3>Upload your company's logo<span class="req">*</span></h3>
            <section id="app" class="section">
              <div v-for="item in items">
                <div v-if="!item.image">
                  <input type="file" name='image' @change="onFileChange(item, $event)" >
                </div>
                <div v-else>
                  <input type="file" name='image' @change="onFileChange(item, $event)" >
                  <p @click="removeImage(item)" class="forgot">Remove Logo &nbsp;</p>
                  <img :src="items[0].image" style="max-height: 240px; padding: 0; margin: 0;"/>
                </div>
              </div>
            </section>

          </div>

          <div class="field-wrap">
            <h3>Email Address<span class="req">*</span></h3>
            <input type="email"required autocomplete="off" name='email' />
          </div>

          <div class="field-wrap">
            <h3>Set A Password<span class="req">*</span></h3>
            <input type="password"required autocomplete="off" name='password'/>
          </div>

          <button type="submit" class="button button-block" name="register" />Register</button>

          </form>

        </div>

      </div><!-- tab-content -->

</div> <!-- /form -->
  <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>

    <script src="js/index.js"></script>
    <script src="js/showLogo.js"></script>

</body>
</html>
