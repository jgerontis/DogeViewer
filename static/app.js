// vue goes here
var app = new Vue({
  el: "app",
  vuetify: new Vuetify(),
  data: {
    currentPrice: 0,
    server_url: "http://localhost:8080",
  },
  created: function () {
    this.getCurrentPrice();
  },
  methods: {
    getCurrentPrice: function () {
      fetch(this.server_url + "/doge").then(function (response) {
        response.json().then(function (data) {
          app.currentPrice = data.market_data.current_price.usd;
          console.log(app.currentPrice);
        });
      });
    },
  },
  computed: {},
});
