// data
const data = [
  {
    id: 1,
    description: "Grenouille Pithecopus hypochondrialis amphibiens",
    point: 4,
    img: "./assets/img/grenouille.jpg",
  },
  {
    id: 2,
    description: "Papillon Euploea core",
    point: 6,
    img: "./assets/img/papillon.jpg",
  },
  {
    id: 3,
    description: "Fleur Marguerite Mauve africaine",
    point: 3,
    img: "./assets/img/marguerite.jpg",
  },
  {
    id: 4,
    description: "Grand Coquillage de mer",
    point: 12,
    img: "./assets/img/coquillage.jpg",
  },
  {
    id: 5,
    description: "Champignon de Foret d'automne",
    point: 15,
    img: "./assets/img/champignon.jpg",
  },
  {
    id: 6,
    description: "Koala d'Australie",
    point: 7,
    img: "./assets/img/koala.jpg",
  },
  {
    id: 7,
    description: "Fleur Strelitzia",
    point: 13,
    img: "./assets/img/strelitzia.jpg",
  },
  {
    id: 8,
    description: "Oiseau qui vole",
    point: 5,
    img: "./assets/img/oiseau.jpg",
  },
  {
    id: 9,
    description: "Escargot dans sa coquille",
    point: 16,
    img: "./assets/img/escargot.jpg",
  },
  {
    id: 10,
    description: "Goutte d'eau qui tombe",
    point: 21,
    img: "./assets/img/goutte.jpg",
  },
  {
    id: 11,
    description: "Coccinelles Rouge",
    point: 18,
    img: "./assets/img/coccinelles.jpg",
  },
  {
    id: 12,
    description: "Herisson des Forets",
    point: 11,
    img: "./assets/img/herisson.jpg",
  },
  {
    id: 13,
    description: "Tortue de Mer",
    point: 9,
    img: "./assets/img/tortue.jpg",
  },
];

// animation icons cards
inputIcon = document.querySelectorAll(".like__container > input");
inputIcon.forEach((input) => {
  input.addEventListener("change", (e) => {
    if (e.currentTarget.checked == true) {
      console.log("yessssss");
    } else if (e.currentTarget.checked == false) {
      console.log("nooooo");
    }
  });
});
