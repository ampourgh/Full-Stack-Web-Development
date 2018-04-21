<!DOCTYPE html>
<html>
<head>
  <title>Promotion</title>
  <link rel="stylesheet" href="./css/style.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800" rel="stylesheet">
  <script src="./js/jquery-3.3.1.js"></script>
  <script src="./js/scroll.js"></script>
  <script src="./js/toggle.js"></script>
  <script src="./js/vue-2.5.16.js"></script>
</head>
<body>
    <form method="POST" action="form_submit.php" enctype="multipart/form-data">
      <br><br><br>

      <section id="app" class="section">
        <div class="row">
        <div class="column" style="background-color: rgba(0, 0, 0, 0);">
        <div style="float: right; margin-right: 10px;">
          <span style="line-height: 40px;" />

          <input class="input" type="text" id='template_id' name='template_id' title="1" />

          <div class="field">
            <div class="control">
              <span class='bold'>Title:</span> <input class="input" type="text" name='title' v-model="form.title" />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <span class='bold'>Description:</span> <input class="input" type="text" name='description' v-model="form.description" />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <span class='bold'>Reduced Price:</span> <input class="input" type="text" name='reduced_price' v-model="form.reducedPrice" />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <span class='bold'>Original Price:</span> <input class="input" type="text" name='original_price' v-model="form.originalPrice" />
            </div>
          </div>
        </div>
      </div>

            <div class="column">

            <div id="card">
              <h3 style="display: block; text-align: center; font-weight: 800;">{{form.title}}</h3>
              <div class="advert-row">
                <div class="advert-column">

                  <br>

                  <div v-for="item in items">
                    <div v-if="!item.image">
                      <input type="file" name='image' @change="onFileChange(item, $event)" >
                    </div>
                    <div v-else>
                      <input type="file" style="display: none;" name='image' @change="onFileChange(item, $event)" >
                      <div class="img-container">
                        <img :src='items[0].image' style='z-index: 1; max-height: 135px; padding: 0; margin: 0; position: absolute; clip: rect(0px, 135px, 250px, 0px);'/>
                        <span class='toggle2 top-left' style='z-index: 2;' @click='removeImage(item)'>&#10006</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="advert-column">
                  <br>
                  <h3 style="display: block; color: rgb(50,205,50);">{{form.reducedPrice}}</h3>
                  <h5 style="display: block; color: red;"><s>{{form.originalPrice}}</s></h5>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="navbar" id="navbar">
          <a href="../controlpanel.php"><span class='submit'>Control Panel</span></a>
          <a href="../add_promo.php"><span class='submit'>Choose a Different Template</span></a>
            <button type="submit" class='submit' value="Submit">submit</button>
          </form>
        </div>
      </section>

      </div>
    </div>
  </div>
  <script>
    $( document ).ready(function() {
      $("#template_id").val('1');
      $("#template_id").hide();
    });
  </script>
  <script src="./js/form.js"></script>
</body>
<footer>
</footer>
</html>
