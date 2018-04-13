new Vue({
  el: '#app',
  data: {
    items: [
       {
         image: false,
       },
       {
         image: false,
       }
    ],
    form: {
      formId: '1',
      title: 'Grocery Item',
      description: 'Grocery item information goes here, or not. You can leave this section blank if you want to!',
      button: '',
      reducedPrice: 7.49,
      originalPrice: 14.99,
      percentageOff: 0
    },
    showSubmitFeedback: false
  },
  methods: {
    onFileChange(item, e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(item, files[0]);
    },
    createImage(item, file) {
      var image = new Image();
      var reader = new FileReader();

      reader.onload = (e) => {
        item.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (item) {
      item.image = false;
    },
    fakeSubmit(){
      this.showSubmitFeedback = true;
      setTimeout(() => {
        this.showSubmitFeedback = false;
      }, 1500);
    }
  }
});
