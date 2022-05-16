const catchImageInput = document.getElementById('meme-insert');
const catchImage = document.getElementById('meme-image');
const catchTextInput = document.getElementById('text-input');
const catchLegendElement = document.getElementById('meme-text');
const catchMemeContainer = document.getElementById('meme-image-container');
const catchAllButtons = document.getElementsByTagName('button');
const catchInputContainer = document.getElementById('input-container');
const catchPresetMemes = document.getElementsByClassName('preset');
console.log(catchPresetMemes);

// Imprime na tela a legenda capturada no input
catchTextInput.addEventListener('keyup', (event) => {
  catchLegendElement.innerHTML = event.target.value;
});

// Captura a imagem selecionada e imprime na tela. Solução retirada do repositório do meu colega de trybe Roberval Filho https://github.com/tryber/sd-012-project-meme-generator/pull/17/commits/5484e6475995ed356ddbd4ad2f1f86f3ad6c880c
catchImageInput.addEventListener('change', (event) => {
  catchImage.src = URL.createObjectURL(event.target.files[0]);
  catchImage.onload = () => {
    URL.revokeObjectURL(event);
  };
});

// cria três botões com os ids red blue e green
const colorsArray = ['red', 'blue', 'green'];
const btnNamesArray = ['Fire', 'Water', 'Earth'];
const btnIdsArray = ['fire', 'water', 'earth'];

for (let index = 0; index < colorsArray.length; index += 1) {
  const newButton = document.createElement('button');
  newButton.innerHTML = btnNamesArray[index];
  newButton.id = btnIdsArray[index];
  newButton.style.backgroundColor = colorsArray[index];
  catchInputContainer.appendChild(newButton);
}

// define cada tipo de borda que cada um dos botões deve colocar no meme container
function changeBorder(event) {
  if (event.target.style.backgroundColor === 'red') {
    catchMemeContainer.style.border = '3px dashed red';
  } else if (event.target.style.backgroundColor === 'blue') {
    catchMemeContainer.style.border = '5px double blue';
  } else if (event.target.style.backgroundColor === 'green') {
    catchMemeContainer.style.border = '6px groove green';
  }
}

// adiciona listener de click em todos botões
for (let index = 0; index < catchAllButtons.length; index += 1) {
  catchAllButtons[index].addEventListener('click', changeBorder);
}

// define listener para cada preset meme e printa ele no container ao ser clicado
for (let index = 0; index < catchPresetMemes.length; index += 1) {
  catchPresetMemes[index].addEventListener('click', (event) => {
    catchImage.src = event.target.src;
    catchImage.onload = () => {
      URL.revokeObjectURL(event);
    };
  });
}
