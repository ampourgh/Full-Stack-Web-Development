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
      |
    </div>

    <form action="/action_page.php">

    <div class="column" style="background-color: rgba(0, 0, 0, 0);">
      <br><br><br>
      <div id="card">
        <p id="hide9"><br>Please fill out the content below and press the top Preview button to see how the promotion will look in the app.</p>
        <div id="header">
          <br>
          <div id="card-inside">
            <div id="card-inside2">
              <p class="address" style="  display: flex; justify-content: space-between;">
                <img src="./img/map-marker-icon.svg" style="margin-left: 30px; padding: 0; height: 30px; width: auto;">
                <img src="./img/twitter-icon.svg" style=" padding: 0; height: 30px; width: auto;">
                <img src="./img/phone-icon.svg" style="margin-right: 30px; padding: 0; height: 30px; width: auto;">
              </p>
            </div>
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
            <div id="title-insert">
              <b id="hide4" >Change title below:</b> <input id="hide5" type="text" v-model.text="promoTitle" name="promo-title">
              <h2 style="margin: 10px 10px;">{{ promoTitle }}</h2>
            </div>
            <div id="description-insert">
              <b id="hide7" >Change description below:</b> <input id="hide8" type="text" v-model.text="promoDescription" name="promo-description">
              <p style="margin: 10px 10px;">{{ promoDescription }}</p>
            </div>
            <div id="new-price">
              <b id="hide10" >New Price:</b> <input id="hide11" type="text" v-model.text="newPrice" name="new-price">
              <h1 style="margin: 10px 10px;">{{ newPrice }}</h1>
            </div>
            <div id="original-price">
              <b id="hide12" >Original Price:</b> <input id="hide13" type="text" v-model.text="originalPrice" name="original-price">
              <s><p style="margin: 10px 10px;">{{ originalPrice }}</p></s>
            </div>
            <div id="wrapper">
              <div id="wrapper2">
                <span class="button" style="vertical-align:middle"><span>REDEEM </span></span>
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
</body>
<footer>
</footer>
</html>
