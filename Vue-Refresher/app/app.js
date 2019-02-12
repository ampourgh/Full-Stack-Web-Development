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


// Single Vue Instance
new Vue({
  el: '#vue-computed',
  data: {
    age: 1000,
    a: 0,
    b: 0
  },
  // computed propert only runs a single one of the methods,
  // not both like methods does
  computed: {
    addToA: function() {
      console.log('addToA');
      return this.a + this.age;
    },
    addToB: function() {
      console.log('addToB');
      return this.b + this.age;
    }
  }
});


new Vue({
    el: '#vue-css',
    data: {
        available: false,
        block: false,
        block2: false
    },
    methods: {

    },
    computed: {
        compClasses: function(){
            return{
                available: this.available,
                block: this.block,
                block2: this.block2,
            }
        }
    }
});

new Vue({
    el: '#vue-conditionals',
    data: {
        error: false,
        success: false
    },
    methods: {

    },
    computed: {

    }
});


new Vue({
    el: '#vue-loops',
    data: {
        characters: ['A', 'B', 'C', 'D', 'E', 'F'],
        rng: [
            { alias: 'dino', age: 25 },
            { alias: 'shade', age: 35 },
            { alias: 'vault', age: 55 }
        ]
    },
    methods: {

    },
    computed: {

    }
});
