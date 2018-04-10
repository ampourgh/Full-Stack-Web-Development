<!DOCTYPE html>
<html>
<head>
  <title>Promotion</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/jquery-3.3.1.js"></script>
  <script src="js/scroll.js"></script>
  <script src="js/toggle.js"></script>
</head>
<body>

  <div class="row">
    <div class="column" style="background-color: rgba(0, 0, 0, 0);">

    </div>
    <form action="/action_page.php">
    <div class="column" style="background-color: rgba(0, 0, 0, 0);">
      <div id="card">
        <div id="header">
          <br>
          <div id="card-inside">
            <p class="address" style="  display: flex; justify-content: space-between;">
              <img src="./img/map-marker-icon.svg" style="margin-left: 30px; padding: 0; height: 30px; width: auto;">
              <img src="./img/twitter-icon.svg" style=" padding: 0; height: 30px; width: auto;">
              <img src="./img/phone-icon.svg" style="margin-right: 30px; padding: 0; height: 30px; width: auto;">
            </p>
          </div>
          <script src="https://unpkg.com/vue/dist/vue.js"></script>

          <div id="logo-upload">
            <div v-if="!image">
              <input id="hide0" type="file" @change="onFileChange" name="logo-upload">

              <div class="container">
                <img src="./img/temp-company-logo.svg" style="max-width:200px; display:block; margin:auto;"/>
              </div>

            <br>

            </div>
            <div v-else>
              <button id="hide1" @click="removeImage">Remove image</button>
              <img :src="image" style="max-width:200px; display:block; margin:auto;"/>
            </div>
          </div>

          <div id="image-upload">
            <div v-if="!image">
              <input id="hide2" type="file" @change="onFileChange" name="image-upload">
              <div class="container">
                <img src="./img/alcohol.jpg" style="max-width:375px; padding: 0; margin: 0; display:block; margin:auto;"/>
              </div>
            </div>
            <div v-else>
              <button id="hide3" @click="removeImage">Remove image</button>
              <img :src="image" style="max-width:375px; padding: 0; margin: 0; display:block; margin:auto;"/>
            </div>

          </div>
           <div>
             <div id="text-insert">
               <b id="hide4" >Change text below:</b> <input id="hide5" type="text" v-model.text="promotion" name="promo-text">
              <p style="margin: 10px 10px;">{{ promotion }}</p>
              <div id="wrapper">
                <button class="button" style="vertical-align:middle"><span>REDEEM </span></button>
              </div>
            </div>
          </div>
          <div id="hide6">
            Location:<br>
            <input type="text" name="location">
            <br>
            Social Media:<br>
            <input type="text" name="social-media">
            <br>
            Contact number:<br>
            <input type="text" name="contact-number">
          </div>
        <script src="js/form.js"></script>
        </div>
      </div>
    </div>
    <div class="navbar" id="navbar">
        <span class='toggle' id='toggle'>Preview</span>
          <input class='submit' type="submit" value="Submit"></input>
        </form>
    </div>
    <div class="column" style="background-color: rgba(0, 0, 0, 0);">
    </div>
  </div>

  <table>
</body>
<footer>
</footer>
</html>
