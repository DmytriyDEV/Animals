const creatOption = (key) => {
  const opt = document.createElement("option");
  opt.innerHTML = data[key].name;
  opt.value = key;
  selec.append(opt);
};

const getAllInfo = (arr, animal) => {
  arr.forEach((elem) => {
    let value = elem.value;
    switch (elem.type) {
      case "number":
        value = +value;
        break;

      case "checkbox":
        value = elem.checked;
        break;
    }
    animal[elem.slot] = value;
  });
};

const newAnuimal = (el, dataDiv, key) => {
  const currentEnimal = document.createElement("div"); //!1
  currentEnimal.classList.add("currentEnimal");

  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");



  p1.textContent = "Назва тварини: " + el.name;
  p2.textContent = "Швидкість тварини: " + el.speed;
  p3.textContent = "Вік тварини: " + el.age;

  currentEnimal.append(p1, p2, p3);
  dataDiv.append(currentEnimal);

  currentEnimal.onclick = () => {
    const modalDiv = document.createElement("div");
    const x = document.createElement("button");
    x.textContent = "X";
    x.classList.add("x");
    modalDiv.classList.add("modalDiv");
    main.classList.add("blur");
    modal.classList.add("open");
    modalDiv.append(x);
    modal.append(modalDiv);
    creatEditBlock(el, modalDiv, key, currentEnimal); //!2

    x.onclick = () => {
      
      main.classList.remove("blur");
      modal.classList.remove("modal");
      modalDiv.remove();
    };
  };
};

const rootData2 = [
  {
    name: "isFlie",
    type: "checkbox",
    data: "checked",
  },
  {
    name: "weigth",
    type: "number",
    data: "valueAsNumber",
  },

  {
    name: "age",
    type: "number",
    data: "valueAsNumber",
  },
  {
    name: "isShabra",
    type: "checkbox",
    data: "checked",
  },
  {
    name: "isPredator",
    type: "checkbox",
    data: "checked",
  },
  {
    name: "foot",
    type: "number",
    data: "valueAsNumber",
  },
  {
    name: "oreal",
    type: "text",
    data: "value",
  },
  {
    name: "speed",
    type: "number",
    data: "valueAsNumber",
  },
  {
    name: "isCrula",
    type: "checkbox",
    data: "checked",
  },
];


const cretContDiv = (bottom, typeElem, el, parametrAnimal, newDataForClass,save) => {

  const paramsDiv = document.createElement("div");
  paramsDiv.classList.add("paramsDiv");
  const paramsInp = document.createElement("input");
  paramsInp.oninput = (e) => {
    newDataForClass[typeElem.name] = paramsInp[typeElem.data];
    const value = e.target.value;
    if(+value < 0){
      e.target.value = value * -1
    } 
    
    if (value.length == 0) {
      save.disabled = true
    } else {
      save.disabled = false
    }

    

   

    

   

    // if (!e.target.value.slice(-1).match(/[0-9]/)) {
    //   e.target.value = e.target.value.slice(0, -1);
    // }
  };
  const paramsP = document.createElement("span");
  paramsInp.type = typeElem.type;
  paramsInp[typeElem.data] = el[parametrAnimal];
 
  paramsP.textContent = `edit input for ${parametrAnimal}`;
  paramsDiv.append(paramsInp, paramsP);
  bottom.append(paramsDiv);
};

const creatEditBlock = (el, modalDiv, key, currentEnimal) => {
  //! 3 currentEnimal add
  
  const newDataForClass = {};
  const section = document.createElement("section");
  const top = document.createElement("div");
  top.classList.add("top");
  const bottom = document.createElement("div");
  bottom.classList.add("bottom");
  const h2 = document.createElement("h2");
  const save = document.createElement("button");
  save.onclick = (e) => {
    // console.log(e);
    // console.log(el);
    for (const param in newDataForClass) {
      el[param] = newDataForClass[param];
    }

    

    console.log(currentEnimal.children);
    // for(const e in currentEnimal.children){
    //   console.log(currentEnimal.children[e]);
    // }
    // currentEnimal.children.forEach(e => {
    //   console.log(e);
    // })
    const P = currentEnimal.children
   P[0].textContent = "Назва тварини: " + el.name
   P[1].textContent = "Швидкість тварини: " + el.speed
   P[2].textContent = "Вік тварини: " + el.age


    main.classList.remove("blur");
    modal.classList.remove("modal");
    modalDiv.remove();

    console.log(el);
  };
  const clear = document.createElement("button");
  clear.textContent = "Clear";
  const btnsDiv = document.createElement("div");
  btnsDiv.classList.add("btnsDiv");
  save.textContent = "SAVE";

  h2.textContent = data[key].name;

  btnsDiv.append(clear, save);

  for (const parametrAnimal in el) {
    const typeElem = rootData2.find((el) => el.name == parametrAnimal);

    if (typeElem === undefined) continue;
    cretContDiv(bottom, typeElem, el, parametrAnimal, newDataForClass,save);
  }

  top.append(h2);
  cretContDiv(
    top,
    { name: "name", type: "text", data: "value" },
    el,
    "name",
    newDataForClass
  );
  section.append(top, bottom, btnsDiv);
  modalDiv.append(section);

  clear.onclick = () => {
    main.classList.remove("blur");
    modal.classList.remove("modal");
    modalDiv.remove();
  };
};

const clearInput = () => {
  const uniqInput = document.querySelectorAll(".uniqInput");
  const newArr = [...uniqInput, ...searchInputs];

  newArr.forEach((el) => {
    el.value = "";
    switch (el.type) {
      case "checkbox":
        el.checked = false;
        break;
      default:
        el.value = "";
    }
  });
};

// case "text":
// case "number":
// break;
// let num = 2;

// num === (1 || 2);
// num === true;

// switch (num) {
//   case 0:
//     console.log(0);
//     break;
//   case 1:
//     console.log(1);
//     break;
//   // case 2:
//   // case 3:
//   //   console.log(2 + " or " + 3);
//   //   break;
// }

// const w = {
//   key: 1,
//   d: false,
//   h: "asd",
// };

// for(const DK in w){
// console.log(w[DK]);
// }

// const arr2 = [
//   {
//     active : true,
//     age :20,
//     name : 'asdasdasd'
//   },
//   {
//     active : false,
//     age :60,
//     name : 'helll'
//   },
//   {
//     active : false,
//     age :70,
//     name : 'der tor 3'
//   },
//   {
//     active : false,
//     age :10,
//     name : '4fff'
//   },
//   {
//     active : true,
//     age :100,
//     name : '5'
//   },
// ]

// const q = arr2.find(el => {
//   return el.age === 3000
// })
// console.log(q);

// const obj=  {
// a : 1,
// is : false,
// num : 90
// }

// for(const aa  in obj){
// console.log(aa);
// }

// const elem = arr2.find(function (element,index) {
//   ///console.log(index);
//   return element.name.length < 4
// })
// elem.age = 89237498;
// console.log(arr2);






// const div = document.querySelectorAll('div')
// console.log(div);
// div.forEach(e => {
//   console.log(e);
// })



const a = (v,t,x) =>{ //  10 false dasdas
  s(x,undefined,t)
}
const s = (j,m,r) =>{ // false undefined 10 
  v(j,77,m)
}
const v = (q,d,l) =>{ // 10 false undefined
  console.log(l); 
}
a(null,false,'assa')

