<!DOCTYPE html>
<html>
<head>
  <title>Promotion</title>
  <link rel="stylesheet" href="css/style.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
  <script src="js/jquery-3.3.1.js"></script>
  <script src="js/scroll.js"></script>
  <script src="js/toggle.js"></script>
  <script src="js/vue-2.5.16.js"></script>
</head>
<body>

    <form action="/action_page.php">
      <br><br><br>

      <section id="app" class="section">
        <div class="row">
        <div class="column" style="background-color: rgba(0, 0, 0, 0); padding-left: 20%;">

        <form>
          <h3 class="title is-1">
            Template # {{form.formId}}:
          </h3>

          <h4>Select an image:</h4>

          <div v-for="item in items">
            <div v-if="!item.image">
              <input type="file" @change="onFileChange(item, $event)">
            </div>
            <div v-else>
              <span class='toggle' @click="removeImage(item)">Remove image</span>
            </div>
          </div>

          <br>

          <div class="field">
            <label class="label">Title</label>
            <div class="control">
              <input class="input" type="text" v-model="form.title" />
            </div>
          </div>

          <br>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <input class="input" type="text" v-model="form.description" />
            </div>
          </div>

          <br>

          <div class="field">
            <label class="label">Promotion Button?</label>
            <div class="control">
              <label>
                <input id='show' type="radio" value="REDEEM " v-model="form.button" />
                Yes
              </label>
              <br>
              <label>
                <input id='hide' type="radio" value="NO REDEEM" v-model="form.button" />
                No
              </label>
            </div>
          </div>

          <br>

          <div class="field">
            <label class="label">Reduced Price:</label>
            <div class="control">
              <input class="input" type="text" v-model="form.reducedPrice" />
            </div>
          </div>

          <br>

          <div class="field">
            <label class="label">Original Price:</label>
            <div class="control">
              <input class="input" type="text" v-model="form.originalPrice" />
            </div>
          </div>

          <br>

          <div class="field">
            <label class="label">Percentage off?</label>
            <div class="control">
              <h4 class="title is-4">
                {{form.percentageOff}} / 100
              </h4>
              <input type="range" min="0" max="100" step="5" list="tickmarks" v-model="form.percentageOff"/>

              <!-- "Currently, no browser fully supports these features. Firefox doesn't support hash marks and labels at all, for example, while Chrome supports the hash marks but doesn't support labels." -MDN -->
              <datalist id="tickmarks">
                <option value="0" label="0%">
                <option value="10">
                <option value="20">
                <option value="30">
                <option value="40">
                <option value="50" label="50%">
                <option value="60">
                <option value="70">
                <option value="80">
                <option value="90">
                <option value="100" label="100%">
              </datalist>
            </div>
          </div>

          <input class="button is-primary margin-bottom" type="submit" @click.prevent="fakeSubmit" />

        </form>
        <transition name="fade" mode="out-in">
          <article class="message is-primary" v-show="showSubmitFeedback">
            <div class="message-header">
              <p>Send Status:</p>
            </div>
            <div class="message-body">
              Successfully Submitted!
            </div>
          </article>
        </transition>
          </div>
            <div class="column" style="background-color: rgba(0, 0, 0, 0);">

            <h3>Preview</h3>

            <div id="external-padding">
              <div id="card">
                <h2 style="display: block; text-align: center;">{{form.title}}</h2>
                <div class="advert-row">
                  <div class="advert-column" style="background-color: rgba(0, 0, 0, 0);">
                    &nbsp;
                    <img :src="items[0].image" style="max-height: 240px; padding: 0; margin: 0; position: absolute; clip: rect(0px, 240px, 250px, 0px);"/>
                  </div>
                  <div class="advert-column" style="background-color: rgba(0, 0, 0, 0); padding-left: 20px;">
                    <h1 style="display: block;">{{form.reducedPrice}} <b style="font-size: 25px;"><s>{{form.originalPrice}}</s></b></h1>
                    <h1 style="margin-top: -70px;">{{form.percentageOff}}% OFF</h1>
                  </div>
                </div>
              </div>
            </div>

            <div id="external-padding">
              <div id="card2">
                <h2 style="display: block; text-align: center;">{{form.title}}</h2>
                <div class="advert-row">
                  <div class="advert-column" style="background-color: rgba(0, 0, 0, 0);">
                    &nbsp;
                    <img :src="items[0].image" style="max-height: 300px; padding: 0; margin: 0; position: absolute; clip: rect(0px, 300px, 300px, 0px);"/>
                  </div>
                  <div class="advert-column" style="background-color: rgba(0, 0, 0, 0); padding-left: 20px;">
                    <h1 style="display: block;">{{form.reducedPrice}} <b style="font-size: 25px;"><s>{{form.originalPrice}}</s></b></h1>
                    <h1 style="margin-top: -70px;">{{form.percentageOff}}% OFF</h1>
                  </div>
                </div>
                <br>
                <h4 style="display: block; text-align: center;">{{form.description}}</h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      </div>
    </div>
    <div class="navbar" id="navbar">
        <input class='submit' type="submit" value="Submit"></input>
      </form>
    </div>
  </div>
  <script src="js/form.js"></script>
</body>
<footer>
</footer>
</html>
