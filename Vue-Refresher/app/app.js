// Single Vue Instance
new Vue({
  el: '#vue-app',
  data: {
    name: 'Emerson',
    age: 10,
    description: 'Nothingness and a half.',
    url: 'http://www.nothingnothingnothing.org',
    webTag: '<a href="http://www.nothingnothingnothing.org">NothingNothingNothing</a>',
    x: 0,
    y: 0
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ', ' + this.name;
    },

    add: function(inc) {
      this.age+=inc;
    },

    subtract: function(dec) {
      this.age-=dec;
    },

    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },

    click: function() {
      console.log('Cannot go to the website.');
    }
  }
});


// Single Vue Instance
new Vue({
  el: '#vue-second',
  data: {
    name: '',
    age: ''
  },
  methods: {
    logName: function() {
      
    },

    logAge: function() {
      console.log('You entered your age');
    }
  }
});
