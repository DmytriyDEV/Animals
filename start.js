



for (const key in data) { 
  
  const name = data[key].name; 
  const arr = data[key].data;
  const animal = document.createElement("div");
  const title = document.createElement("button");
  const hr = document.createElement("hr");

  title.textContent = name;

  title.classList.add("title");
  animal.classList.add("animal");

  const dataDiv = document.createElement("div");
  dataDiv.classList.add("data",key); 
  


  arr.forEach(el => newAnuimal(el,dataDiv,key));

  animal.append(title, dataDiv, hr);
  list.append(animal);


  title.onclick = () => {
    dataDiv.classList.toggle('open')


  }

  creatOption(key)
  
}



















