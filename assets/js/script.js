// const spans = document.querySelectorAll('.hex')
const cards = document.querySelectorAll('.color')
const button = document.querySelector('.btn')

function generateHexCode() {
  let hexCode = "";
  
  const hexChars = "0123456789abcdef";
  
  for (let i = 0; i < 6; i++) {
    hexCode += hexChars[Math.floor(Math.random() * hexChars.length)];
  }
  return "#" + hexCode;
}

function update (){
  cards.forEach(element => {
    const pickerColor = generateHexCode()
    element.children[0].textContent = pickerColor.toUpperCase()
    element.children[1].style.backgroundColor = pickerColor
  })
}

button.addEventListener('click', update)