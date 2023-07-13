/* 

  O que precisamos fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo
        passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
        passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        passo 2 - alterar a imagem do personagem grande
        passo 3 - alterar o nome do personagem grande
        passo 4 - alterar a descrição do personagem grande
*/



// OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo

// passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles

const personages = document.querySelectorAll('.character');


//passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse

personages.forEach(character => {
  character.addEventListener('mouseenter', () => {

    if (window.innerWidth < 450){
      window.scrollTo({top: 0, behavior: 'smooth'});
    }

      //passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover a seleção dele 
      removeCharacterSelection();
      
      
      character.classList.add('selected');

      //OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande

      //passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele

      changeImageSelectedCharacter(character);

      // passo 3 - alterar o nome do personagem grande
      changeCharacterSelectedName(character);

      // passo 4 - alterar a descrição do personagem grande
      changeDescriptionCharacter(character);


  })

})

/* for each personage it will have a representation of the class character that will do something, in this case for each PERSONAGE it will go through a character of the list */

function changeDescriptionCharacter(character) {
  const descriptionCharacter = document.getElementById('description-character');
  descriptionCharacter.innerText = character.getAttribute('data-description');
}

function changeCharacterSelectedName(character) {
  const namePersonage = document.getElementById('name-character');
  namePersonage.innerText = character.getAttribute('data-name');
}

function changeImageSelectedCharacter(character) {
  const imageBigCharacter = document.querySelector('.big-character');
  // passo 2 - alterar a imagem do personagem grande
  const idPersonage = character.attributes.id.value;
  imageBigCharacter.src = `./src/images/png/${idPersonage}.png`;
}



function removeCharacterSelection() {
  const selectedPersonage = document.querySelector('.selected');
  selectedPersonage.classList.remove('selected');
}

