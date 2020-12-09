const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(e){
      this.name = e.target.value;
    }
  }
});

app.mount('#events');
