// cria um p para armazenar os valores RGB
const catchRgbContainer = document.getElementById('rgb');
const catchRgbId = document.getElementById('rgb-color');
const catchColorsContainer = document.getElementById('colors');
const catchAllBalls = document.getElementsByClassName('ball');

function createRGB() {
  let rgbArray = [];
  for (let index = 0; index < 3; index += 1) {
    let rgb = Math.round(Math.random() * 256);
    rgbArray.push(rgb);
  }
  const newP = document.createElement('p');
  newP.innerHTML = `(${rgbArray})`;
  newP.id = 'rgb-color';
  catchRgbContainer.appendChild(newP);
}
createRGB();

function createCircles() {
  for (let index = 0; index < 6; index += 1) {
    const newDivCircle = document.createElement('div');
    newDivCircle.classList.add('ball');
    catchColorsContainer.appendChild(newDivCircle);
  }
  catchAllBalls[Math.floor(Math.random() * 6)].style.backgroundColor = `rgb${}`
  
}
createCircles();
// newDivCircle.style.backgroundColor = `rgb(${rgbArray})`;
// let rgbArray = [];
// for (let index = 0; index < 3; index += 1) {
//   let rgb = Math.round(Math.random() * 256);
//   rgbArray.push(rgb);
// }