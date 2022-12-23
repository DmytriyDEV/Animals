const list = document.querySelector(".list");
const create = document.querySelector(".creat");
const selec = document.querySelector("select");
const newDataForAnimal = document.querySelector(".newDataForAnimal");
const searchInputs = document.querySelectorAll(".search input");
const searchDiv = document.querySelector(".search");
const error = document.querySelector('.error')
const modal = document.querySelector('.modal')
const main = document.querySelector('main')





const data = {
  Fish: {
    name: "Riba",
    data: [], 
    elements: [
      {
        type: "number",
        name: "weight",
        text: "масса тварини",
      },
      {
        type: "text",
        name: "oreal",
        text: "oreal тварини",
      },
      {
        type: "checkbox",
        name: "isShabra",
        text: "if Shabra тварини",
      },
    ],
  },
  Mlecopit: {
    name: "Mlecopitaushie",
    data: [],
    elements: [
      {
        type: "number",
        name: "weigth",
        text: "масса тварини",
      },
      {
        type: "number",
        name: "foot",
        text: "foot тварини",
      },
      {
        type: "text",
        name: "oreal",
        text: "Место обитания",
      },
    ],
  },
  Nasicomue: {
    name: "Nasicomue",
    data: [],
    elements: [
      {
        type: "checkbox",
        name: "isCrula",
        text: "if isCrula тварини",
      },
    ],
  },
};

//   !!! dont toch
const nemo = {
  name: "name",
  isPredator: false,
  age: 1,
  weight: 0.5,
  speed: 20,
  oreal: "ocean",
  isShabra: true,
};

const turutol = {
  name: "turutol",
  isPredator: true,
  age: 1,
  weight: 0.5,
  speed: 20,
  oreal: "africa",
  foot: 4,
};

const naci = {
  name: "nosorog",
  isPredator: false,
  age: 1,
  speed: 20,
  isCrula: true,
};

const bird = {
  name: "nosorog",
  isPredator: false,
  age: 1,
  speed: 20,
  oreal: "Afrca",
  isFlie: true,
  weigth: 100,
};



// const inpN = document.querySelector('.inpN')
// inpN.valueAs