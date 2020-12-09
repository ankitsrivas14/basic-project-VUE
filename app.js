const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    setName(e){
      this.name = e.target.value;
    },
    handleConfirm(){
      this.confirmedName = this.name;
      this.name = '';
    }
  }
});

app.mount('#events');
