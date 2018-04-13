<!DOCTYPE html>
<html>
<head>
  <title>Promotion</title>
  <link rel="stylesheet" href="css/style.css">
  <script src="js/jquery-3.3.1.js"></script>
  <script src="js/scroll.js"></script>
  <script src="js/toggle.js"></script>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
</head>
<body>



    <form action="/action_page.php">

      <br><br><br>
      <div id="external-padding">
        <div id="card">
          <section id="app" class="section">
            <div class="row">
            <div class="column" style="background-color: rgba(0, 0, 0, 0);">

            <form>
              <h1 class="title is-1">
                Template # {{form.formId}}:
              </h1>

              <div class="field">
                <label class="label">Title</label>
                <div class="control">
                  <input class="input" type="text" v-model="form.title" />
                </div>
              </div>

              <div class="field">
                <label class="label">Description</label>
                <div class="control">
                  <input class="input" type="text" v-model="form.description" />
                </div>
              </div>

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

              <div class="field">
                <label class="label">Percentage off?</label>
                <div class="control">
                  <h4 class="title is-4">
                    {{form.percentageOff}} / 100
                  </h4>
                  <input type="range" min="0" max="100" v-model="form.percentageOff"/>
                </div>
              </div>

              <input class="button is-primary margin-bottom" type="submit" @click.prevent="fakeSubmit" />

            </form>
            </div>
            <div class="column" style="background-color: rgba(0, 0, 0, 0);">
            <transition name="fade" mode="out-in">
              <article class="message is-primary" v-show="showSubmitFeedback">
                <div class="message-header">
                  <p>Fake Send Status:</p>
                </div>
                <div class="message-body">
                  Successfully Submitted!
                </div>
              </article>
            </transition>

            <hr>

            <h1>
              Preview
            </h1>
            <pre>{{form.title}}</pre>
            <pre>{{form.description}}</pre>
            <pre>{{form.percentageOff}} % OFF</pre>
            <span id='hide0'class="button" style="vertical-align:middle"><span>{{form.button}}</span></span>
          </div>
        </div>
          </section>
          <div id="wrapper">
            <div id="wrapper2">

              <span class="button" style="vertical-align:middle"><span>REDEEM </span></span>
            </div>
          </div>
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
  </div>
</body>
<footer>
</footer>
</html>
