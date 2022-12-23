const creatError = (text) => {
    const errDiv = document.createElement('div')
    const p = document.createElement('p')
    errDiv.classList.add('negative')
    errDiv.classList.add('negativeAnime')
  
    p.textContent = text
  
    errDiv.append(p)
    error.append(errDiv)
  
  
  
    elem.style.border = '2px solid red'
    elem.disabled = true
  
    setInterval(() => {
      elem.style.border = '1px solid black'
      elem.disabled = false
      elem.value = ''
      errDiv.remove()
    },3000)
  }