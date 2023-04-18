// datas
const itemsList = [
  { id: 1, description: "Aloe Vera", points: 4.99, img: "./assets/img/aloe-vera.jpg" },
  { id: 2, description: "Smycka", points: 17.99, img: "./assets/img/smycka.jpg" },
  { id: 3, description: "Dracaena Marginata", points: 14.99, img: "./assets/img/dracaena-marginata.jpg" },
  { id: 4, description: "Anthurium", points: 29.99, img: "./assets/img/anthurium.jpg" },
  { id: 5, description: "Epipremnum", points: 3.49, img: "./assets/img/epipremnum.jpg" },
  { id: 6, description: "Euphorbia Acrurensis", points: 39.99, img: "./assets/img/euphorbia-acrurensis.jpg" },
  { id: 7, description: "Fejka", points: 24.99, img: "./assets/img/fejka.jpg" },
  { id: 8, description: "Ficus", points: 16.99, img: "./assets/img/ficus.jpg" },
  { id: 9, description: "Monstera", points: 15.99, img: "./assets/img/monstera.jpg" },
  { id: 10, description: "Polyscias", points: 25.99, img: "./assets/img/polyscias.jpg" },
  { id: 11, description: "Schefflera Arboricola", points: 19.99, img: "./assets/img/schefflera-arboricola.jpg" },
  { id: 12, description: "Spathiphyllum", points: 12.99, img: "./assets/img/spathiphyllum.jpg" },
  { id: 13, description: "Succulent", points: 4.59, img: "./assets/img/succulent.jpg" }
];

// component 'home'
const Home = {
  template: "#home",
  name: "Home",
  data: () => {
    return {
      itemsList,
      searchKey: "",
      liked: [],
      card: [],
      total: []
    };
  },
  computed: {
    // filter in the search bar
    filteredList() {
      return this.itemsList.filter((items) => {
        return items.description
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    // get 'like' cookie
    getLikeCookie() {
      try {
        // let cookiesValue = JSON.parse($cookies.get('like'));
        let cookiesValue = JSON.parse(localStorage.getItem('like'));
        // cookiesValue == null ? this.liked = [] : this.liked = cookiesValue;
        if (cookiesValue == null) {
          console.log('cookies null')
          this.liked = [];
        } else {
          console.log('cookies array')
          this.liked = cookiesValue;
        }
      } catch (error) {
        console.log(error);
        // console.log($cookies.get('like'))
        console.log(localStorage.getItem('like'))
        console.log(cookiesValue)
      }
      // if (cookiesValue == null){
      //     this.liked = [];
      // } else {
      //     this.liked = cookiesValue;
      // }
    },
    // calculates the total of the quantity and points
    totalQuantity() {
      let amountQuantity = 0;
      for (let item in this.card) {
        amountQuantity = amountQuantity + this.card[item].quantity;
      }
      return amountQuantity;
    },
    totalPointsAmount() {
      let total = 0;
      for (let item in this.card) {
        total = total + (this.card[item].quantity * this.card[item].points);
        total = this.roundedResult(total);
      }
      return total;
    },
    // set the value of button
    changeColorButton() {
      for (let item in this.card) {
        if (this.card[item]) {
          return 'on';
        }
      }
      return 'off';
    }
  },
  methods: {
    // adds cookie 'like' to click
    setLikeCookie() {
      document.addEventListener('input', () => {
        setTimeout(() => {
          // $cookies.set('like', JSON.stringify(this.liked));
          localStorage.setItem('like', JSON.stringify(this.liked));
        }, 300);
      });
    },
    // add card in the basket
    addToCard(items) {
      for (let i = 0; i < this.card.length; i++) {
        if (this.card[i].id == items.id) {
          return this.card[i].quantity++;
        }
      }
      this.card.push({
        id: items.id,
        description: items.description,
        points: items.points,
        img: items.img,
        quantity: 1
      });
    },
    // delete card from the basket
    removeItems(items, id) {
      items.quantity = items.quantity - 1;
      if (items.quantity === 0) {
        if (this.card[id] === undefined) { return }
        this.card.splice(id, 1);
        // delete this.card[id];
      }
    },
    showPopup() {
      const pop = document.querySelector('#popup');
      const button = document.querySelector('.button__open');
      button.style.display = "none";
      pop.style.transform = 'translateX(-90%)' ? pop.style.transform = 'translateX(0%)' : null
    },
    hiddenPopup() {
      const pop = document.querySelector('#popup');
      const button = document.querySelector('.button__open');
      pop.style.transform = 'translateX(-90%)';
      button.style.display = "flex";
    },
    // rounded result 
    roundedResult(result) {
      result = Math.round(result * 100) / 100;
      return result;
    }
  },
  // add cookie at loading the page
  mounted: () => {
    this.getLikeCookie;
  }
};

const Main = {
  template: "<h1>main</h1>",
  name: "Main",
};

const Likes = {
  template: "<h1>likes</h1>",
  name: "Likes",
};

const Basket = {
  template: "<h1>basket</h1>",
  name: "Basket",
};

// Routeur vue 3 //
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/main", component: Main, name: "Main" },
    { path: "/likes", component: Likes, name: "Likes" },
    { path: "/basket", component: Basket, name: "Basket" },
    { path: "/:pathMatch()*", redirect: "/" }
  ],
});

// Instance Vue.js version 3 //
const app = Vue.createApp({
  data() {
    return {
      message: "Bienvenue sur une interface exemple..",
    };
  },
});
app.use(router);
app.mount("#app");
