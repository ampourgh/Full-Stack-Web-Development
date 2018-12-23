// Single Vue Instance
new Vue({
  el: '#vue-app',
  data: {
    name: 'Emerson',
    description: 'Nothingness and a half.',
    url: 'http://www.nothingnothingnothing.org'
  },
  methods: {
    greet: function(time) {
      return 'Good ' + time + ', ' + this.name;
    }
  }
});
