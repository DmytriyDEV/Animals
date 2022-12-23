

selec.onchange = (e) => {
  newDataForAnimal.innerHTML = "";
  create.disabled = false;
  const selected = e.target.value;

  const allInputs = data[selected].elements;

  allInputs.forEach((elem) => {
    const div = document.createElement("div");
    const inp = document.createElement("input");
    const spun = document.createElement("span");
    inp.classList.add("uniqInput");
    inp.slot = elem.name; 
    inp.type = elem.type;
    spun.textContent = elem.text;
    div.append(inp, spun);
    newDataForAnimal.append(div);
  });

};



create.onclick = () => {
 
  const dataDiv = document.querySelector('.data.' + selec.value) 


  const animal = {};
  const uniqInput = document.querySelectorAll(".uniqInput");
  getAllInfo([...searchInputs,...uniqInput], animal); //4

  let newClass;
  switch (selec.value) {
      case 'Fish':
        newClass = Fish;
        break;

     case 'Mlecopit':
        newClass = Mlecopit;
        break;
      case 'Nasicomue':
        newClass = Nasicomue;
        break;  
      
       
  }
  const newAnimal = new newClass(animal)
  data[selec.value].data.push(newAnimal)
  newAnuimal(newAnimal,dataDiv,selec.value)

  clearInput()
};

searchInputs.forEach((elem) => {
  elem.onchange = (e) => {
    const val = e.target.value;
    if (val < 0) return creatError("Cant tobe negative number!!!!!");
  };
});



// ! to do paint

