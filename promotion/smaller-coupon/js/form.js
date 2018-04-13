new Vue({
  el: '#app',
  data: {
    form: {
      formId: '1',
      title: 'Item Name',
      description: 'Description of the item goes here.',
      button: '',
      percentageOff: 0
    },
    showSubmitFeedback: false
  },
  methods: {
    fakeSubmit(){
      this.showSubmitFeedback = true;
      setTimeout(() => {
        this.showSubmitFeedback = false;
      }, 1500);
    }
  }
});
