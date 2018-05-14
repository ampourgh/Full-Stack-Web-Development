<!DOCTYPE html>
<html>
<head>
  <title>Promotion</title>
  <link rel="stylesheet" href="./css/style.css">
  <link rel="stylesheet" href="./preview-css/style.css">
  <script src="./js/jquery-3.3.1.js"></script>
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700,800" rel="stylesheet">
  <script src="./js/html2canvas.js"></script>
  <script src="./js/html2canvas.min.js"></script>
  <script src="./js/scroll.js"></script>
  <script src="./js/toggle.js"></script>
  <script src="./js/vue-2.5.16.js"></script>
</head>
<body>
  <b>File Name:</b> <span id="filename">PromotionNameGoesHere</span>.png
  <b>File Name:</b> <span id="filename2">PromotionNameGoesHere2</span>.png
  <b>File Name:</b> <span id="filename3">PromotionNameGoesHere3</span>.png
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
              <span class='bold'>Reduced Price:</span> <input class="input" type="text" name='reduced_price' v-model="form.reducedPrice" />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <span class='bold'>Original Price:</span> <input class="input" type="text" name='original_price' v-model="form.originalPrice" />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <span class='bold'>Description:</span> <input id="description" class="input" type="text" name='description' v-model="form.description" />
            </div>
          </div>

          <div class="field">
            <div class="control">
              <span class='bold'>Disclaimer:</span> <input id="disclaimer" class="input" type="text" name='disclaimer' v-model="form.disclaimer" />
            </div>
          </div>

          <div id="image-upload">
            <input type="file" id="myFile">
            <span class="submit">Submit</span>
          </div>
        </div>
      </div>

            <div class="column">

            <div class="card">
              <!-- <img src="./images/grocery.png" id="company-logo" style="width: 80px; height: auto; display: None; padding-top: 10px; margin: 0 auto;"> -->
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
                        <img :src='items[0].image' class="promo-image"/>
                        <span class='toggle2 top-left' style='z-index: 2;' @click='removeImage(item)'>&#10006</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="advert-column">
                  <div class="right-column-bg">
                    <br><br>
                    <h3 style="display: block; color: rgb(50,205,50); padding-left: 15%;">{{form.reducedPrice}}</h3>
                    <h5 style="display: block; color: red; padding-left: 15%;"><s>{{form.originalPrice}}</s></h5>
                  </div>
                </div>
              </div>
              <p style="text-align: center;">{{form.description}}</p>
              <p style="font-size: .70em; text-align: center;">{{form.disclaimer}}</p>
              <img src="./images/barcode.png" id="barcode" style="width: 100px; height: auto; display: None; padding-top: 10px; margin: 0 auto;">
            </div>

            <br>

            <div class="modal-overlay" id="modal-overlay"></div>
            <div class="modal" id="modal">
              <span class="close-button" id="close-button">Go Back</span>
              <span class="timer" id="timer"></span>

              <!-- WxH : 2 x 1 -->

              <div class="modal-guts">

                <div class="tab-section" data-example-id="togglable-tabs">
                  <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade in active" role="tabpanel" id="chat-log" aria-labelledby="chat-log-tab">
                <div id="card-preview-1" class="cards-preview">
                  <h3 style="display: block; text-align: center; font-weight: 800; font-size: 3em;">{{form.title}}</h3>
                  <div class="advert-row">
                    <div class="advert-column">

                      <br>

                      <div v-for="item in items">
                          <input type="file" style="display: none;" name='image' @change="onFileChange(item, $event)" >
                          <div class="img-container">
                            <img :src='items[0].image' class="promo-image2"/>
                          </div>
                      </div>
                    </div>
                    <div class="advert-column">
                      <div class="right-column-bg2">
                        <br><br>
                        <h3 style="display: block; color: rgb(50,205,50); padding-left: 15%; font-size: 3em;">{{form.reducedPrice}}</h3>
                        <h5 style="display: block; color: red; padding-left: 15%; font-size: 1.5em;"><s>{{form.originalPrice}}</s></h5>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
                </div>

                <br>

                <!-- WxH : 5 x 3 -->

                <div class="tab-section2" data-example-id="togglable-tabs">
                  <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade in active" role="tabpanel" id="chat-log" aria-labelledby="chat-log-tab">
                <div id="card-preview-2" class="cards-preview">
                  <h3 style="display: block; text-align: center; font-weight: 800; font-size: 3em;">{{form.title}}</h3>
                  <div class="advert-row">
                    <div class="advert-column">

                      <br>

                      <div v-for="item in items">
                          <input type="file" style="display: none;" name='image' @change="onFileChange(item, $event)" >
                          <div class="img-container">
                            <img :src='items[0].image' class="promo-image2"/>
                          </div>
                      </div>
                    </div>
                    <div class="advert-column">
                      <div class="right-column-bg2">
                        <br><br>
                        <h3 style="display: block; color: rgb(50,205,50); padding-left: 15%; font-size: 3em;">{{form.reducedPrice}}</h3>
                        <h5 style="display: block; color: red; padding-left: 15%; font-size: 1.5em;"><s>{{form.originalPrice}}</s></h5>
                      </div>
                    </div>
                  </div>
                  <p style="font-size: 1.5em;text-align: center;">{{form.description}}</p>
                </div>
                </div>
                </div>
                </div>

                <br>

                <!-- WxH : 1 x 2 -->

                <div class="tab-section3" data-example-id="togglable-tabs">
                  <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade in active" role="tabpanel" id="chat-log" aria-labelledby="chat-log-tab">
                <div id="card-preview-3" class="cards-preview">
                  <!-- <img src="./images/grocery.png" id="company-logo" style="width: 120px; height: auto; display: block; padding-top: 15px; margin: 0 auto;"> -->
                  <h3 style="display: block; text-align: center; font-weight: 800; font-size: 3em;">{{form.title}}</h3>
                  <div class="advert-row">
                    <div class="advert-column">

                      <br>

                      <div v-for="item in items">
                          <input type="file" style="display: none;" name='image' @change="onFileChange(item, $event)" >
                          <div class="img-container">
                            <img :src='items[0].image' class="promo-image2"/>
                          </div>
                      </div>
                    </div>
                    <div class="advert-column">
                      <div class="right-column-bg2">
                        <br><br>
                        <h3 style="display: block; color: rgb(50,205,50); padding-left: 15%; font-size: 3em;">{{form.reducedPrice}}</h3>
                        <h5 style="display: block; color: red; padding-left: 15%; font-size: 1.5em;"><s>{{form.originalPrice}}</s></h5>
                      </div>
                    </div>
                  </div>
                  <p style="font-size: 1.5em;text-align: center;">{{form.description}}</p>
                  <p style="font-size: 1.05em; text-align: center;">{{form.disclaimer}}</p>
                  <img src="./images/barcode.png" id="barcode" style="width: 150px; height: auto; display: block; padding-top: 15px; margin: 0 auto;">
                </div>
                </div>
                </div>
                </div>

                <form method="POST" action="./form_submit.php">
                  <input id="divID" style="display: none;" class="input"  type="text" name='main' />
                  <input id="divID2" style="display: none;" class="input"  type="text" name='store' />
                  <input id="divID3" style="display: none;" class="input"  type="text" name='detail' />
                  <br>
                  <button type="submit" class='publish' value="Submit">Publish</button>
                </form>

              </div>
            </div>

          </div>
        </div>
        <div class="navbar" id="navbar">
          <span id="open-button" class="submit">Preview</span>
          <a href="../controlpanel.php"><span class='submit'>Control Panel</span></a>
          <a href="../add_promo.php"><span class='submit'>Choose a Different Template</span></a>
        </div>
      </section>

      </div>
    </div>
  </div>
  <script>

    function setTimer(boolean) {
      if (boolean === true) {
        boolean = false;
        timer = 15;
      }

      if (timer > 9) {
        document.getElementById("timer").innerHTML = "<p>" + timer + "</p>";
      } else {
        document.getElementById("timer").innerHTML = "<p>0" + timer + "</p>";
      }

      if (timer === 0) {
        $("#modal").hide();
        $("#modal-overlay").hide();
      } else {
        timer--;
        setTimeout(setTimer, 1000);
      }
      $("#close-button").click(function(){
        timer = 0;
        setTimeout(setTimer, 0);
      });
    }

    $( document ).ready(function() {

      $("#open-button").click(function(){

        $("#modal").toggle();
        $("#modal-overlay").toggle();

        setTimer(true);

        $(function(){html2canvas($(".tab-section").get(0), {
          allowTaint: true
        }).then(function (canvas) {
          var url = canvas.toDataURL();
          var name = document.getElementById("filename").innerText;
          var triggerDownload = $("<a>").attr("href", url).attr("download",name+".png").appendTo("body");

          $("#divID").val(triggerDownload[0]);
        });
      });

      $(function(){html2canvas($(".tab-section2").get(0), {
        allowTaint: true
      }).then(function (canvas) {
        var url2 = canvas.toDataURL();
        var name2 = document.getElementById("filename2").innerText;
        var triggerDownload2 = $("<a>").attr("href", url2).attr("download",name2+".png").appendTo("body");

        $("#divID2").val(triggerDownload2[0]);
      });
    });

    $(function(){html2canvas($(".tab-section3").get(0), {
      allowTaint: true
    }).then(function (canvas) {
      var url3 = canvas.toDataURL();
      var name3 = document.getElementById("filename3").innerText;
      var triggerDownload3 = $("<a>").attr("href", url3).attr("download",name3+".png").appendTo("body");

      $("#divID3").val(triggerDownload3[0]);
    });
  });


      });

      $("#template_id").val('1');
      $("#template_id").hide();
    });


  </script>

  <script src="./js/form.js"></script>
</body>
<footer>
</footer>
</html>
