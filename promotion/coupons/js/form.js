new Vue({
  el: '#title-insert',
  data: {
    name: '',
    promoTitle: 'HALF OFF!!'
  }
});

new Vue({
  el: '#description-insert',
  data: {
    name: '',
    promoDescription: 'Special offer at restaurant for a buy 1 get another for insert text 50% off.'
  }
});

new Vue({
  el: '#new-price',
  data: {
    name: '',
    newPrice: '4.99'
  }
});

new Vue({
  el: '#original-price',
  data: {
    name: '',
    originalPrice: '9.99'
  }
});

new Vue({
  el: '#logo-upload',
  data: {
    image: ''
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
})

new Vue({
  el: '#image-upload',
  data: {
    image: ''
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
  }
})
