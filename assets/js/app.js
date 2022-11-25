// Vue.js version 2
// const app = new Vue({
//     el: '#app',
//     data: {
//         message: 'hello world mother fucker!'
//     }
// });

// data
const itemsList = [
  {
    id: 1,
    description: "Grenouille Pithecopus hypochondrialis amphibiens",
    points: 4,
    img: "./assets/img/grenouille.jpg",
  },
  {
    id: 2,
    description: "Papillon Euploea core",
    points: 6,
    img: "./assets/img/papillon.jpg",
  },
  {
    id: 3,
    description: "Fleur Marguerite Mauve africaine",
    points: 3,
    img: "./assets/img/marguerite.jpg",
  },
  {
    id: 4,
    description: "Grand Coquillage de mer",
    points: 12,
    img: "./assets/img/coquillage.jpg",
  },
  {
    id: 5,
    description: "Champignon de Foret d'automne",
    points: 15,
    img: "./assets/img/champignon.jpg",
  },
  {
    id: 6,
    description: "Koala d'Australie",
    points: 7,
    img: "./assets/img/koala.jpg",
  },
  {
    id: 7,
    description: "Fleur Strelitzia",
    points: 13,
    img: "./assets/img/strelitzia.jpg",
  },
  {
    id: 8,
    description: "Oiseau qui vole",
    points: 5,
    img: "./assets/img/oiseau.jpg",
  },
  {
    id: 9,
    description: "Escargot dans sa coquille",
    points: 16,
    img: "./assets/img/escargot.jpg",
  },
  {
    id: 10,
    description: "Goutte d'eau qui tombe",
    points: 21,
    img: "./assets/img/goutte.jpg",
  },
  {
    id: 11,
    description: "Coccinelles Rouge",
    points: 18,
    img: "./assets/img/coccinelles.jpg",
  },
  {
    id: 12,
    description: "Herisson des Forets",
    points: 11,
    img: "./assets/img/herisson.jpg",
  },
  {
    id: 13,
    description: "Tortue de Mer",
    points: 9,
    img: "./assets/img/tortue.jpg",
  },
];

const Home = {
  template: "#home",
  name: "Home",
  data: () => {
    return {
      itemsList,
      searchKey: "",
      liked: []
    };
  },
  computed: {
    filteredList() {
      return this.itemsList.filter((items) => {
        console.log(this.searchKey);
        return items.description
          .toLowerCase()
          .includes(this.searchKey.toLowerCase());
      });
    },
    getLikeCookie() {
        let cookiesValue = JSON.parse($cookies.get('like'));
        cookiesValue == null ? this.liked = [] : this.liked = cookiesValue;
        // if (cookiesValue == null){
        //     this.liked = [];
        // } else {
        //     this.likes = cookiesValue;
        // }
    }
  },
  methods: {
    setLikeCookie() {
        document.addEventListener('input', () => {
            setTimeout(() => {
                $cookies.set('like', JSON.stringify(this.liked))
            }, 300);
        });
    }
  },
  mounted: () => {
    console.log($cookies.get('like'))
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

// Routeur
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    { path: "/", component: Home, name: "Home" },
    { path: "/main", component: Main, name: "Main" },
    { path: "/likes", component: Likes, name: "Likes" },
    { path: "/basket", component: Basket, name: "Basket" },
  ],
});

// Vue.js version 3
const app = Vue.createApp({
  data() {
    return {
      message: "Instance vue.js version 3",
    };
  },
});
app.use(router);
app.mount("#app");
